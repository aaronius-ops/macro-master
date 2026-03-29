// ===== Spaced Repetition (SM-2 Variant, Session-Based) =====
// Tracks per-question performance and prioritizes due cards.
// Intervals are in "sessions" not calendar days (ADHD-friendly).

const SRS = (() => {
  const STORAGE_KEY = 'macromaster_srs';

  // SM-2 parameters
  const INITIAL_EASE = 2.5;
  const MIN_EASE = 1.3;
  const INITIAL_INTERVAL = 1; // 1 session

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  // Get or create card data for a question
  function getCard(questionId) {
    const data = load();
    if (!data[questionId]) {
      data[questionId] = {
        ease: INITIAL_EASE,
        interval: 0,       // sessions until next review
        repetitions: 0,    // consecutive correct
        totalSeen: 0,
        totalCorrect: 0,
        lastSession: 0,
        due: 0,             // session number when due
      };
      save(data);
    }
    return data[questionId];
  }

  // Record an answer (correct/incorrect) and update SM-2 params
  function recordAnswer(questionId, correct) {
    const data = load();
    const card = data[questionId] || {
      ease: INITIAL_EASE, interval: 0, repetitions: 0,
      totalSeen: 0, totalCorrect: 0, lastSession: 0, due: 0
    };
    const session = getCurrentSession();

    card.totalSeen++;
    card.lastSession = session;

    if (correct) {
      card.totalCorrect++;
      card.repetitions++;

      if (card.repetitions === 1) {
        card.interval = 1;
      } else if (card.repetitions === 2) {
        card.interval = 3;
      } else {
        card.interval = Math.round(card.interval * card.ease);
      }

      // Increase ease slightly on correct
      card.ease = Math.max(MIN_EASE, card.ease + 0.1);
    } else {
      card.repetitions = 0;
      card.interval = 0; // Review again soon
      // Decrease ease on incorrect
      card.ease = Math.max(MIN_EASE, card.ease - 0.2);
    }

    card.due = session + card.interval;
    data[questionId] = card;
    save(data);
    return card;
  }

  // Get current session number
  function getCurrentSession() {
    try {
      return parseInt(localStorage.getItem('macromaster_session') || '1');
    } catch {
      return 1;
    }
  }

  function incrementSession() {
    const s = getCurrentSession() + 1;
    localStorage.setItem('macromaster_session', s.toString());
    return s;
  }

  // Select questions for a round, prioritizing:
  // 1. Due/overdue cards
  // 2. Never-seen cards
  // 3. Cards with low accuracy
  function selectQuestions(pool, count) {
    const session = getCurrentSession();
    const data = load();

    const scored = pool.map(q => {
      const card = data[q.id];
      let priority;

      if (!card || card.totalSeen === 0) {
        // Never seen — high priority
        priority = 100;
      } else if (card.due <= session) {
        // Due or overdue — highest priority, more overdue = higher
        priority = 200 + (session - card.due);
      } else {
        // Not due yet — low priority, scaled by accuracy (lower accuracy = higher priority)
        const accuracy = card.totalCorrect / card.totalSeen;
        priority = (1 - accuracy) * 50;
      }

      // Add small random factor for variety
      priority += Math.random() * 10;

      return { question: q, priority };
    });

    scored.sort((a, b) => b.priority - a.priority);
    const selected = scored.slice(0, count).map(s => s.question);

    // Interleave: avoid consecutive same-topic questions
    for (let i = 1; i < selected.length; i++) {
      if (selected[i].topic === selected[i - 1].topic) {
        // Find a different-topic question to swap with
        for (let j = i + 1; j < selected.length; j++) {
          if (selected[j].topic !== selected[i - 1].topic) {
            [selected[i], selected[j]] = [selected[j], selected[i]];
            break;
          }
        }
      }
    }

    return selected;
  }

  // Get mastery stats per topic
  function getTopicMastery(questions) {
    const data = load();
    const topics = {};

    questions.forEach(q => {
      if (!topics[q.topic]) {
        topics[q.topic] = { seen: 0, correct: 0, total: 0 };
      }
      topics[q.topic].total++;

      const card = data[q.id];
      if (card) {
        topics[q.topic].seen += card.totalSeen;
        topics[q.topic].correct += card.totalCorrect;
      }
    });

    const result = {};
    for (const [topic, stats] of Object.entries(topics)) {
      const accuracy = stats.seen > 0 ? stats.correct / stats.seen : 0;
      const coverage = stats.seen > 0 ? Math.min(1, stats.seen / (stats.total * 2)) : 0;
      const mastery = (accuracy * 0.7 + coverage * 0.3);

      let level;
      if (stats.seen === 0) level = 'none';
      else if (mastery < 0.4) level = 'red';
      else if (mastery < 0.65) level = 'yellow';
      else if (mastery < 0.85) level = 'green';
      else level = 'gold';

      result[topic] = { ...stats, accuracy, coverage, mastery, level };
    }
    return result;
  }

  // Get overall stats
  function getOverallStats() {
    const data = load();
    let totalSeen = 0, totalCorrect = 0, uniqueSeen = 0;
    for (const card of Object.values(data)) {
      if (card.totalSeen > 0) {
        uniqueSeen++;
        totalSeen += card.totalSeen;
        totalCorrect += card.totalCorrect;
      }
    }
    return {
      totalSeen,
      totalCorrect,
      uniqueSeen,
      accuracy: totalSeen > 0 ? totalCorrect / totalSeen : 0,
      session: getCurrentSession()
    };
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('macromaster_session');
  }

  return {
    getCard,
    recordAnswer,
    selectQuestions,
    getTopicMastery,
    getOverallStats,
    getCurrentSession,
    incrementSession,
    reset
  };
})();
