// ===== Macro Master — Game Engine =====

const Game = (() => {
  // ===== CONSTANTS =====
  const STORAGE_KEY = 'macromaster_state';
  const XP_PER_CORRECT = 10;
  const STREAK_BONUS_THRESHOLD = 5;
  const STREAK_BONUS_XP = 5;
  const LIGHTNING_TIME = 60;
  const QUESTIONS_PER_ROUND = 10;
  const MYTH_SPEED_THRESHOLD = 3000; // ms — answers faster than this earn speed bonus
  const MYTH_SPEED_BONUS = 5;
  const CALC_XP = 20; // calculator problems worth more
  const POLICY_XP = [0, 5, 10, 15]; // XP by score: 0=wrong, 1=fair, 2=good, 3=best
  const BOSS_PART_XP = 15;
  const BOSS_SWEEP_BONUS = 50;
  const EXAM_QUESTIONS = 25;
  const EXAM_TIME = 150 * 60; // 150 minutes in seconds
  const BREAK_REMINDER_QUESTIONS = 30; // remind after this many questions
  const BREAK_REMINDER_MINUTES = 15;   // or after this many minutes

  // ===== PROFILE & LEADERBOARD =====
  const PROFILES_KEY = 'macromaster_profiles';
  const ACTIVE_PROFILE_KEY = 'macromaster_active_profile';

  // Fun macro-themed leaderboard titles (by rank position)
  const LB_TITLES = [
    'Chair of the Federal Reserve of Vibes',
    'Supreme Chancellor of Aggregate Demand',
    'Tenured Professor of Money Printer Studies',
    'Deputy Undersecretary of Multiplier Effects',
    'Chief Inflation Hawk (Retired)',
    'Part-Time Phillips Curve Whisperer',
    'Assistant to the Regional Economist',
    'Intern at the Bureau of Made-Up Statistics',
    'Grad Student Who Peaked in Office Hours',
    'Person Who Definitely Read the Syllabus',
  ];

  // ===== ACHIEVEMENTS =====
  const ACHIEVEMENTS = [
    { id: 'first_correct', name: 'First Steps', desc: 'Answer your first question correctly', icon: '\u2B50', hidden: false },
    { id: 'streak_5', name: 'On Fire', desc: 'Get a 5-question streak', icon: '\uD83D\uDD25', hidden: false },
    { id: 'streak_10', name: 'Unstoppable', desc: 'Get a 10-question streak', icon: '\uD83D\uDCA5', hidden: false },
    { id: 'streak_20', name: 'Legendary', desc: 'Get a 20-question streak', icon: '\uD83C\uDF1F', hidden: true },
    { id: 'perfect_round', name: 'Flawless', desc: 'Get 100% in a round', icon: '\uD83D\uDC8E', hidden: false },
    { id: 'all_modes', name: 'Renaissance', desc: 'Play all 6 game modes', icon: '\uD83C\uDFA8', hidden: false },
    { id: 'speed_demon', name: 'Speed Demon', desc: 'Get 5 speed bonuses in Myth Buster', icon: '\u26A1', hidden: false },
    { id: 'boss_sweep', name: 'Boss Slayer', desc: 'Sweep a Boss Battle (all parts correct)', icon: '\uD83D\uDC32', hidden: false },
    { id: 'fifty_questions', name: 'Half Century', desc: 'Answer 50 questions', icon: '\uD83C\uDFAF', hidden: false },
    { id: 'hundred_questions', name: 'Centurion', desc: 'Answer 100 questions', icon: '\uD83C\uDFC6', hidden: false },
    { id: 'level_4', name: 'Fed Watcher', desc: 'Reach Level 4', icon: '\uD83C\uDFE6', hidden: false },
    { id: 'level_8', name: 'Macro Master', desc: 'Reach Level 8', icon: '\uD83D\uDC51', hidden: true },
    { id: 'three_star', name: 'Policy Ace', desc: 'Get 3 stars on 5 Policy Advisor questions', icon: '\u2605', hidden: false },
    { id: 'night_owl', name: 'Night Owl', desc: 'Study after 11 PM', icon: '\uD83E\uDD89', hidden: true },
    { id: 'early_bird', name: 'Early Bird', desc: 'Study before 7 AM', icon: '\uD83D\uDC26', hidden: true },
  ];

  const LEVELS = [
    { name: 'Econ 101 Survivor', xp: 0 },
    { name: 'GDP Apprentice', xp: 50 },
    { name: 'Policy Intern', xp: 150 },
    { name: 'Fed Watcher', xp: 350 },
    { name: 'Market Analyst', xp: 600 },
    { name: 'Treasury Advisor', xp: 1000 },
    { name: 'Nobel Nominee', xp: 1500 },
    { name: 'Macro Master', xp: 2500 },
  ];

  // ===== STATE =====
  let state = {
    xp: 0,
    streak: 0,
    bestStreak: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    roundsPlayed: 0,
    achievements: [],    // earned achievement IDs
    modesPlayed: [],     // track which modes have been played
    policyThreeStars: 0, // count of 3-star policy answers
    mythSpeedBonuses: 0, // count of speed bonuses earned
    bossSweeps: 0,       // count of boss sweeps
  };

  // Round state (not persisted)
  let round = {
    mode: null,
    topic: null,
    questions: [],
    currentIndex: 0,
    correct: 0,
    answered: 0,
    streak: 0,
    timer: null,
    timeLeft: LIGHTNING_TIME,
    phase: 'question', // 'question' | 'feedback' | 'done'
    questionStartTime: null,
    // Boss battle state
    bossPartIndex: 0,
    bossPartsCorrect: 0,
  };

  // Exam state (separate from round)
  let exam = {
    active: false,
    questions: [],   // shuffled questions with shuffledChoices/shuffledCorrect
    answers: [],     // user's selected answer per question (-1 = unanswered)
    currentIndex: 0,
    timer: null,
    timeLeft: EXAM_TIME,
  };

  // Session-level (not persisted, not round-level)
  let session = {
    startTime: Date.now(),
    questionsThisSession: 0,
    lastBreakReminder: 0,
    startXP: 0, // XP at session start (to compute session XP = state.xp - startXP)
  };

  // ===== DOM REFS =====
  const $ = id => document.getElementById(id);
  const screens = {
    profile: $('profile-screen'),
    menu: $('menu-screen'),
    topic: $('topic-screen'),
    game: $('game-screen'),
    myth: $('myth-screen'),
    curve: $('curve-screen'),
    calc: $('calc-screen'),
    policy: $('policy-screen'),
    boss: $('boss-screen'),
    summary: $('summary-screen'),
    mastery: $('mastery-screen'),
    stats: $('stats-screen'),
    achievements: $('achievements-screen'),
    settings: $('settings-screen'),
    leaderboard: $('leaderboard-screen'),
    exam: $('exam-screen'),
    examResults: $('exam-results-screen'),
  };

  // ===== PERSISTENCE =====
  function loadState() {
    const id = getActiveProfileId();
    const key = id ? STORAGE_KEY + '_' + id : STORAGE_KEY;
    try {
      const raw = localStorage.getItem(key);
      if (raw) state = { ...state, ...JSON.parse(raw) };
    } catch {}
  }

  function saveState() {
    const id = getActiveProfileId();
    const key = id ? STORAGE_KEY + '_' + id : STORAGE_KEY;
    localStorage.setItem(key, JSON.stringify(state));
    syncProfileXP();
  }

  // ===== PROFILE MANAGEMENT =====
  function loadProfiles() {
    try {
      const raw = localStorage.getItem(PROFILES_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  }

  function saveProfiles(profiles) {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  }

  function getActiveProfileId() {
    return localStorage.getItem(ACTIVE_PROFILE_KEY);
  }

  function setActiveProfile(id) {
    localStorage.setItem(ACTIVE_PROFILE_KEY, id);
    const profiles = loadProfiles();
    const p = profiles.find(p => p.id === id);
    if (p) $('player-name-display').textContent = p.name;
  }

  function createProfile(name) {
    const profiles = loadProfiles();
    const id = 'p_' + Date.now();
    profiles.push({ id, name, totalXP: 0, bestSessionXP: 0, created: Date.now() });
    saveProfiles(profiles);
    return id;
  }

  function syncProfileXP() {
    const id = getActiveProfileId();
    if (!id) return;
    const profiles = loadProfiles();
    const p = profiles.find(p => p.id === id);
    if (p) {
      p.totalXP = state.xp;
      const sessionXP = Math.max(0, state.xp - session.startXP);
      if (sessionXP > p.bestSessionXP) p.bestSessionXP = sessionXP;
      saveProfiles(profiles);
    }
  }

  function showProfileScreen() {
    const profiles = loadProfiles();
    const list = $('profile-list');
    list.innerHTML = '';

    if (profiles.length === 0) {
      $('profile-heading').textContent = 'Create Your Profile';
    } else {
      $('profile-heading').textContent = 'Who\'s Studying?';
      profiles.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'profile-btn';
        const title = LB_TITLES[Math.min(Math.floor(p.totalXP / 300), LB_TITLES.length - 1)];
        btn.innerHTML = `<span class="profile-btn-name">${p.name}</span><span class="profile-btn-title">${title}</span><span class="profile-btn-xp">${p.totalXP} XP</span>`;
        btn.addEventListener('click', () => loginProfile(p.id));
        list.appendChild(btn);
      });
    }

    $('profile-name-input').value = '';
    showScreen('profile');
  }

  function loginProfile(id) {
    setActiveProfile(id);
    // Load this profile's game state (stored per-profile)
    const profileStateKey = STORAGE_KEY + '_' + id;
    try {
      const raw = localStorage.getItem(profileStateKey);
      if (raw) state = { xp: 0, streak: 0, bestStreak: 0, totalCorrect: 0, totalAnswered: 0, roundsPlayed: 0, achievements: [], modesPlayed: [], policyThreeStars: 0, mythSpeedBonuses: 0, bossSweeps: 0, ...JSON.parse(raw) };
      else state = { xp: 0, streak: 0, bestStreak: 0, totalCorrect: 0, totalAnswered: 0, roundsPlayed: 0, achievements: [], modesPlayed: [], policyThreeStars: 0, mythSpeedBonuses: 0, bossSweeps: 0 };
    } catch {
      state = { xp: 0, streak: 0, bestStreak: 0, totalCorrect: 0, totalAnswered: 0, roundsPlayed: 0, achievements: [], modesPlayed: [], policyThreeStars: 0, mythSpeedBonuses: 0, bossSweeps: 0 };
    }
    // Reset session tracking
    session.startXP = state.xp;
    session.startTime = Date.now();
    session.questionsThisSession = 0;
    updateTopBar();
    showScreen('menu');
  }

  // ===== LEADERBOARD =====
  function showLeaderboard() {
    const profiles = loadProfiles();

    // All-time XP (descending)
    const byTotal = [...profiles].sort((a, b) => b.totalXP - a.totalXP);
    const allTimeList = $('lb-alltime');
    allTimeList.innerHTML = '';
    byTotal.forEach((p, i) => {
      const li = document.createElement('li');
      li.className = 'lb-entry' + (p.id === getActiveProfileId() ? ' lb-you' : '');
      const title = LB_TITLES[Math.min(i, LB_TITLES.length - 1)];
      const medal = i === 0 ? '\uD83E\uDD47' : i === 1 ? '\uD83E\uDD48' : i === 2 ? '\uD83E\uDD49' : '';
      li.innerHTML = `<span class="lb-rank">${medal || (i + 1)}</span><span class="lb-name">${p.name}</span><span class="lb-title">${title}</span><span class="lb-xp">${p.totalXP.toLocaleString()} XP</span>`;
      allTimeList.appendChild(li);
    });
    if (byTotal.length === 0) allTimeList.innerHTML = '<li class="lb-empty">No data yet. Go study!</li>';

    // Best session XP (descending)
    const bySession = [...profiles].sort((a, b) => b.bestSessionXP - a.bestSessionXP);
    const sessionList = $('lb-session');
    sessionList.innerHTML = '';
    bySession.forEach((p, i) => {
      const li = document.createElement('li');
      li.className = 'lb-entry' + (p.id === getActiveProfileId() ? ' lb-you' : '');
      const medal = i === 0 ? '\uD83E\uDD47' : i === 1 ? '\uD83E\uDD48' : i === 2 ? '\uD83E\uDD49' : '';
      li.innerHTML = `<span class="lb-rank">${medal || (i + 1)}</span><span class="lb-name">${p.name}</span><span class="lb-xp">${p.bestSessionXP.toLocaleString()} XP</span>`;
      sessionList.appendChild(li);
    });
    if (bySession.length === 0) sessionList.innerHTML = '<li class="lb-empty">No sessions yet. Get grinding!</li>';

    showScreen('leaderboard');
  }

  // ===== SCREEN MANAGEMENT =====
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
  }

  // ===== TOP BAR =====
  function updateTopBar() {
    const level = getLevel();
    $('level-badge').textContent = `Lv ${level.num}`;
    $('xp-text').textContent = `${state.xp} XP`;

    // XP bar progress to next level
    const nextLevel = LEVELS[level.num] || LEVELS[LEVELS.length - 1];
    const prevXP = LEVELS[level.num - 1].xp;
    const progress = (state.xp - prevXP) / (nextLevel.xp - prevXP);
    $('xp-bar-fill').style.width = `${Math.min(100, progress * 100)}%`;

    // Streak
    $('streak-count').textContent = round.streak || state.streak;
    const streakEl = $('streak-display');
    if ((round.streak || state.streak) >= STREAK_BONUS_THRESHOLD) {
      streakEl.classList.add('hot');
    } else {
      streakEl.classList.remove('hot');
    }
  }

  function getLevel() {
    let num = 1;
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (state.xp >= LEVELS[i].xp) {
        num = i + 1;
        break;
      }
    }
    return { num, name: LEVELS[num - 1].name };
  }

  // ===== TOAST =====
  function showToast(msg, duration = 2000) {
    const toast = $('toast');
    toast.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, duration);
  }

  // ===== TIMER =====
  function startTimer() {
    round.timeLeft = LIGHTNING_TIME;
    updateTimerDisplay();
    $('timer-display').classList.remove('hidden');

    round.timer = setInterval(() => {
      round.timeLeft--;
      updateTimerDisplay();

      if (round.timeLeft <= 0) {
        clearInterval(round.timer);
        endRound();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = $('timer-display');
    $('timer-text').textContent = round.timeLeft;

    el.classList.remove('warning', 'danger');
    if (round.timeLeft <= 10) el.classList.add('danger');
    else if (round.timeLeft <= 20) el.classList.add('warning');
  }

  function stopTimer() {
    if (round.timer) {
      clearInterval(round.timer);
      round.timer = null;
    }
    $('timer-display').classList.add('hidden');
  }

  // ===== TOPIC PICKER =====
  function showTopicPicker(mode) {
    round.mode = mode;

    // Determine format filter for this mode
    const formatMap = {
      mythbuster: 'tf', curveshifter: 'curve', calculator: 'calc',
      advisor: 'policy', boss: 'boss'
    };
    const fmt = formatMap[mode]; // undefined for lightning (standard MC)

    // Get the full pool for this mode (all topics)
    const modePool = fmt
      ? QUESTIONS.filter(q => q.format === fmt)
      : QUESTIONS.filter(q => !q.format);

    // If the total pool is small (<= questionsPerRound), skip topic picker and use all
    const qpr = settings.questionsPerRound || QUESTIONS_PER_ROUND;
    if (modePool.length <= qpr) {
      startRound(null);
      return;
    }

    const topicList = $('topic-list');
    topicList.innerHTML = '';

    const mastery = SRS.getTopicMastery(QUESTIONS);

    // "All Topics" button — show total count for this mode
    const allBtn = document.createElement('button');
    allBtn.className = 'topic-btn';
    allBtn.innerHTML = `<span>All Topics (Interleaved)</span><span class="topic-count">${modePool.length} Qs</span>`;
    allBtn.addEventListener('click', () => startRound(null));
    topicList.appendChild(allBtn);

    // Individual topics — only those with questions matching this mode's format
    const topicsWithQuestions = TOPICS.map(t => {
      const count = modePool.filter(q => q.topic === t.id).length;
      return { topic: t, count };
    }).filter(({ count }) => count > 0);

    topicsWithQuestions.forEach(({ topic, count }) => {
      const btn = document.createElement('button');
      btn.className = 'topic-btn';

      const m = mastery[topic.id];
      const masteryBadge = m && m.seen > 0
        ? `<span class="topic-mastery ${m.level}">${Math.round(m.accuracy * 100)}%</span>`
        : '<span class="topic-mastery red">New</span>';

      btn.innerHTML = `<span>${topic.name}</span><span class="topic-count">${count} Qs</span>${masteryBadge}`;
      btn.addEventListener('click', () => startRound(topic.id));
      topicList.appendChild(btn);
    });

    showScreen('topic');
  }

  // ===== START ROUND =====
  function startRound(topicId) {
    round.topic = topicId;
    round.currentIndex = 0;
    round.correct = 0;
    round.answered = 0;
    round.streak = 0;
    round.phase = 'question';
    round.questionStartTime = null;

    // Filter question pool
    let pool = topicId
      ? QUESTIONS.filter(q => q.topic === topicId)
      : QUESTIONS;

    // Filter by mode format
    if (round.mode === 'mythbuster') {
      pool = pool.filter(q => q.format === 'tf');
    } else if (round.mode === 'curveshifter') {
      pool = pool.filter(q => q.format === 'curve');
    } else if (round.mode === 'calculator') {
      pool = pool.filter(q => q.format === 'calc');
    } else if (round.mode === 'advisor') {
      pool = pool.filter(q => q.format === 'policy');
    } else if (round.mode === 'boss') {
      pool = pool.filter(q => q.format === 'boss');
    } else {
      // Lightning: only standard MC questions
      pool = pool.filter(q => !q.format);
    }

    // Track mode for achievements
    if (!state.modesPlayed.includes(round.mode)) {
      state.modesPlayed.push(round.mode);
      saveState();
    }

    // Use SRS to select questions
    const count = Math.min(settings.questionsPerRound || QUESTIONS_PER_ROUND, pool.length);
    round.questions = SRS.selectQuestions(pool, count);

    // Shuffle choices for each question (create copies) — skip for T/F and calc
    round.questions = round.questions.map(q => {
      if (q.format === 'tf') {
        return { ...q, shuffledChoices: q.choices, shuffledCorrect: q.correct };
      }
      if (q.format === 'calc') {
        return { ...q }; // no choices to shuffle
      }
      if (q.format === 'policy') {
        // Shuffle choices + scores together
        const indices = q.choices.map((_, i) => i);
        shuffle(indices);
        return {
          ...q,
          shuffledChoices: indices.map(i => q.choices[i]),
          shuffledScores: indices.map(i => q.scores[i]),
        };
      }
      if (q.format === 'boss') {
        return { ...q }; // boss parts are sequential, don't shuffle top-level
      }
      // MC and curve: shuffle choices
      const indices = q.choices.map((_, i) => i);
      shuffle(indices);
      return {
        ...q,
        shuffledChoices: indices.map(i => q.choices[i]),
        shuffledCorrect: indices.indexOf(q.correct),
      };
    });

    if (round.mode === 'mythbuster') {
      showScreen('myth');
      $('myth-feedback').classList.add('hidden');
      showMythQuestion();
    } else if (round.mode === 'curveshifter') {
      showScreen('curve');
      $('curve-feedback').classList.add('hidden');
      showCurveQuestion();
    } else if (round.mode === 'calculator') {
      showScreen('calc');
      $('calc-feedback').classList.add('hidden');
      showCalcQuestion();
    } else if (round.mode === 'advisor') {
      showScreen('policy');
      $('policy-feedback').classList.add('hidden');
      showPolicyQuestion();
    } else if (round.mode === 'boss') {
      showScreen('boss');
      $('boss-feedback').classList.add('hidden');
      round.bossPartIndex = 0;
      round.bossPartsCorrect = 0;
      showBossQuestion();
    } else {
      showScreen('game');
      $('feedback-card').classList.add('hidden');
      if (round.mode === 'lightning' && settings.timerEnabled) {
        startTimer();
      }
      showQuestion();
    }
  }

  // ===== SHOW QUESTION =====
  function showQuestion() {
    if (round.currentIndex >= round.questions.length) {
      endRound();
      return;
    }

    round.phase = 'question';
    const q = round.questions[round.currentIndex];
    const topicObj = TOPICS.find(t => t.id === q.topic);

    $('question-topic').textContent = topicObj ? topicObj.name : q.topic;
    $('question-text').textContent = q.text;
    $('feedback-card').classList.add('hidden');

    const choicesEl = $('choices');
    choicesEl.innerHTML = '';

    const keys = ['1', '2', '3', '4'];
    q.shuffledChoices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerHTML = `<span class="choice-key">${keys[i]}</span><span>${choice}</span>`;
      btn.addEventListener('click', () => handleAnswer(i));
      choicesEl.appendChild(btn);
    });
  }

  // ===== HANDLE ANSWER =====
  function handleAnswer(choiceIndex) {
    if (round.phase !== 'question') return;
    round.phase = 'feedback';

    const q = round.questions[round.currentIndex];
    const correct = choiceIndex === q.shuffledCorrect;

    // Update SRS
    SRS.recordAnswer(q.id, correct);

    // Update round stats
    round.answered++;
    if (correct) {
      round.correct++;
      round.streak++;
      state.streak++;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;

      // XP
      let xpGain = XP_PER_CORRECT;
      if (round.streak >= STREAK_BONUS_THRESHOLD && round.streak % STREAK_BONUS_THRESHOLD === 0) {
        xpGain += STREAK_BONUS_XP;
        showToast(`${round.streak} streak! +${STREAK_BONUS_XP} bonus XP`);
      }
      state.xp += xpGain;
      state.totalCorrect++;
    } else {
      round.streak = 0;
      state.streak = 0;
    }

    state.totalAnswered++;
    saveState();
    updateTopBar();

    // Highlight choices
    const buttons = $('choices').querySelectorAll('.choice-btn');
    buttons.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === q.shuffledCorrect) {
        btn.classList.add(correct ? 'correct' : 'reveal-correct');
      }
      if (i === choiceIndex && !correct) {
        btn.classList.add('incorrect');
      }
    });

    // Show feedback
    const feedbackCard = $('feedback-card');
    feedbackCard.classList.remove('hidden', 'correct', 'incorrect');
    feedbackCard.classList.add(correct ? 'correct' : 'incorrect');

    $('feedback-icon').textContent = correct ? '✓' : '✗';
    $('feedback-text').textContent = correct ? 'Correct!' : 'Not quite';
    $('explanation-text').textContent = q.explanation;

    checkAchievements();
    checkBreakReminder();
  }

  // ===== MYTH BUSTER =====
  function showMythQuestion() {
    if (round.currentIndex >= round.questions.length) {
      endRound();
      return;
    }

    round.phase = 'question';
    round.questionStartTime = Date.now();
    const q = round.questions[round.currentIndex];
    const topicObj = TOPICS.find(t => t.id === q.topic);

    $('myth-topic').textContent = topicObj ? topicObj.name : q.topic;
    $('myth-statement').textContent = q.text;
    $('myth-qnum').textContent = `${round.currentIndex + 1} / ${round.questions.length}`;
    $('myth-speed-bonus').classList.add('hidden');
    $('myth-feedback').classList.add('hidden');
    $('myth-card').classList.remove('hidden');

    // Reset button styles
    document.querySelectorAll('.myth-btn').forEach(btn => {
      btn.classList.remove('correct', 'incorrect', 'disabled');
    });
  }

  function handleMythAnswer(choiceIndex) {
    if (round.phase !== 'question') return;
    round.phase = 'feedback';

    const q = round.questions[round.currentIndex];
    const correct = choiceIndex === q.shuffledCorrect;
    const elapsed = Date.now() - round.questionStartTime;
    const speedBonus = correct && elapsed < MYTH_SPEED_THRESHOLD;

    SRS.recordAnswer(q.id, correct);

    round.answered++;
    if (correct) {
      round.correct++;
      round.streak++;
      state.streak++;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;

      let xpGain = XP_PER_CORRECT;
      if (speedBonus) {
        xpGain += MYTH_SPEED_BONUS;
        state.mythSpeedBonuses++;
        $('myth-speed-bonus').classList.remove('hidden');
      }
      if (round.streak >= STREAK_BONUS_THRESHOLD && round.streak % STREAK_BONUS_THRESHOLD === 0) {
        xpGain += STREAK_BONUS_XP;
        showToast(`${round.streak} streak! +${STREAK_BONUS_XP} bonus XP`);
      }
      state.xp += xpGain;
      state.totalCorrect++;
    } else {
      round.streak = 0;
      state.streak = 0;
    }

    state.totalAnswered++;
    saveState();
    updateTopBar();

    // Highlight buttons
    const buttons = document.querySelectorAll('.myth-btn');
    buttons.forEach(btn => {
      btn.classList.add('disabled');
      const btnIdx = parseInt(btn.dataset.answer);
      if (btnIdx === q.shuffledCorrect) {
        btn.classList.add(correct ? 'correct' : 'reveal-correct');
      }
      if (btnIdx === choiceIndex && !correct) {
        btn.classList.add('incorrect');
      }
    });

    // Show feedback
    const feedbackEl = $('myth-feedback');
    feedbackEl.classList.remove('hidden', 'correct', 'incorrect');
    feedbackEl.classList.add(correct ? 'correct' : 'incorrect');
    $('myth-feedback-icon').textContent = correct ? '✓' : '✗';
    $('myth-feedback-text').textContent = correct
      ? (speedBonus ? `Correct! +${MYTH_SPEED_BONUS} speed bonus` : 'Correct!')
      : 'Not quite';
    $('myth-explanation').textContent = q.explanation;

    checkAchievements();
    checkBreakReminder();
  }

  // ===== CURVE SHIFTER =====
  function drawDiagram(diagram, shiftResult) {
    const svg = $('curve-svg');
    const isISMP = diagram === 'ismp';

    // Base diagram
    const xLabel = 'Output (Y)';
    const yLabel = isISMP ? 'Interest Rate (r)' : 'Inflation (π)';

    let curves;
    if (isISMP) {
      curves = `
        <line x1="50" y1="20" x2="50" y2="270" stroke="#8899AA" stroke-width="2"/>
        <line x1="50" y1="270" x2="380" y2="270" stroke="#8899AA" stroke-width="2"/>
        <text x="210" y="295" fill="#8899AA" text-anchor="middle" font-size="13">${xLabel}</text>
        <text x="15" y="150" fill="#8899AA" text-anchor="middle" font-size="13" transform="rotate(-90 15 150)">${yLabel}</text>
        <line id="curve-is" x1="80" y1="40" x2="340" y2="240" stroke="#FDB515" stroke-width="3" stroke-linecap="round"/>
        <text x="345" y="245" fill="#FDB515" font-size="14" font-weight="bold">IS</text>
        <line id="curve-mp" x1="80" y1="150" x2="340" y2="150" stroke="#2ECC71" stroke-width="3" stroke-dasharray="8,4" stroke-linecap="round"/>
        <text x="345" y="155" fill="#2ECC71" font-size="14" font-weight="bold">MP</text>
      `;
    } else {
      curves = `
        <line x1="50" y1="20" x2="50" y2="270" stroke="#8899AA" stroke-width="2"/>
        <line x1="50" y1="270" x2="380" y2="270" stroke="#8899AA" stroke-width="2"/>
        <text x="210" y="295" fill="#8899AA" text-anchor="middle" font-size="13">${xLabel}</text>
        <text x="15" y="150" fill="#8899AA" text-anchor="middle" font-size="13" transform="rotate(-90 15 150)">${yLabel}</text>
        <line id="curve-ad" x1="80" y1="40" x2="340" y2="240" stroke="#FDB515" stroke-width="3" stroke-linecap="round"/>
        <text x="345" y="245" fill="#FDB515" font-size="14" font-weight="bold">AD</text>
        <line id="curve-ia" x1="80" y1="160" x2="340" y2="160" stroke="#2ECC71" stroke-width="3" stroke-dasharray="8,4" stroke-linecap="round"/>
        <text x="345" y="165" fill="#2ECC71" font-size="14" font-weight="bold">IA</text>
        <line id="curve-lr" x1="220" y1="30" x2="220" y2="260" stroke="#E74C3C" stroke-width="3" stroke-dasharray="4,4" stroke-linecap="round"/>
        <text x="225" y="25" fill="#E74C3C" font-size="14" font-weight="bold">LR</text>
      `;
    }

    svg.innerHTML = curves;

    // Animate shift if we have a result
    if (shiftResult) {
      setTimeout(() => animateShift(diagram, shiftResult), 300);
    }
  }

  function animateShift(diagram, shifts) {
    shifts.forEach(shift => {
      const curveId = diagram === 'ismp'
        ? (shift.curve === 'IS' ? 'curve-is' : 'curve-mp')
        : (shift.curve === 'AD' ? 'curve-ad' : shift.curve === 'IA' ? 'curve-ia' : 'curve-lr');

      const el = document.getElementById(curveId);
      if (!el) return;

      const isVertical = shift.curve === 'LR';
      const amount = 60;
      let tx = 0, ty = 0;

      if (shift.direction === 'right') tx = amount;
      else if (shift.direction === 'left') tx = -amount;
      else if (shift.direction === 'up') ty = -amount;
      else if (shift.direction === 'down') ty = amount;

      // Also move the label
      const label = el.nextElementSibling;

      el.style.transition = 'transform 0.6s ease';
      el.style.transform = `translate(${tx}px, ${ty}px)`;
      el.style.opacity = '1';

      if (label && label.tagName === 'text') {
        label.style.transition = 'transform 0.6s ease';
        label.style.transform = `translate(${tx}px, ${ty}px)`;
      }

      // Draw ghost of original
      const ghost = el.cloneNode(true);
      ghost.removeAttribute('id');
      ghost.style.opacity = '0.2';
      ghost.style.transform = 'none';
      el.parentNode.insertBefore(ghost, el);
    });
  }

  function showCurveQuestion() {
    if (round.currentIndex >= round.questions.length) {
      endRound();
      return;
    }

    round.phase = 'question';
    const q = round.questions[round.currentIndex];
    const topicObj = TOPICS.find(t => t.id === q.topic);

    $('curve-topic').textContent = topicObj ? topicObj.name : q.topic;
    $('curve-scenario').textContent = q.text;
    $('curve-qnum').textContent = `${round.currentIndex + 1} / ${round.questions.length}`;
    $('curve-feedback').classList.add('hidden');

    drawDiagram(q.diagram, null);

    const choicesEl = $('curve-choices');
    choicesEl.innerHTML = '';

    q.shuffledChoices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn curve-choice';
      btn.innerHTML = `<span class="choice-key">${i + 1}</span><span>${choice}</span>`;
      btn.addEventListener('click', () => handleCurveAnswer(i));
      choicesEl.appendChild(btn);
    });
  }

  function handleCurveAnswer(choiceIndex) {
    if (round.phase !== 'question') return;
    round.phase = 'feedback';

    const q = round.questions[round.currentIndex];
    const correct = choiceIndex === q.shuffledCorrect;

    SRS.recordAnswer(q.id, correct);

    round.answered++;
    if (correct) {
      round.correct++;
      round.streak++;
      state.streak++;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;
      let xpGain = XP_PER_CORRECT;
      if (round.streak >= STREAK_BONUS_THRESHOLD && round.streak % STREAK_BONUS_THRESHOLD === 0) {
        xpGain += STREAK_BONUS_XP;
        showToast(`${round.streak} streak! +${STREAK_BONUS_XP} bonus XP`);
      }
      state.xp += xpGain;
      state.totalCorrect++;
    } else {
      round.streak = 0;
      state.streak = 0;
    }

    state.totalAnswered++;
    saveState();
    updateTopBar();

    // Highlight choices
    const buttons = $('curve-choices').querySelectorAll('.curve-choice');
    buttons.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === q.shuffledCorrect) btn.classList.add(correct ? 'correct' : 'reveal-correct');
      if (i === choiceIndex && !correct) btn.classList.add('incorrect');
    });

    // Animate the correct shift
    if (q.shifts) drawDiagram(q.diagram, q.shifts);

    // Show feedback
    const feedbackEl = $('curve-feedback');
    feedbackEl.classList.remove('hidden', 'correct', 'incorrect');
    feedbackEl.classList.add(correct ? 'correct' : 'incorrect');
    $('curve-feedback-icon').textContent = correct ? '✓' : '✗';
    $('curve-feedback-text').textContent = correct ? 'Correct!' : 'Not quite';
    $('curve-explanation').textContent = q.explanation;

    checkAchievements();
    checkBreakReminder();
  }

  // ===== CALCULATOR CHALLENGE =====
  let calcBuffer = '0'; // current keypad value as string

  function calcUpdateDisplay() {
    $('calc-display-value').textContent = calcBuffer;
  }

  function calcHandleKey(key) {
    if (round.phase !== 'question') return;

    if (key === 'submit') {
      handleCalcAnswer();
      return;
    }
    if (key === 'clear') {
      calcBuffer = '0';
      calcUpdateDisplay();
      return;
    }
    if (key === 'backspace') {
      if (calcBuffer.length <= 1 || (calcBuffer.length === 2 && calcBuffer[0] === '-')) {
        calcBuffer = '0';
      } else {
        calcBuffer = calcBuffer.slice(0, -1);
      }
      calcUpdateDisplay();
      return;
    }
    if (key === '-') {
      if (calcBuffer.startsWith('-')) {
        calcBuffer = calcBuffer.slice(1) || '0';
      } else if (calcBuffer === '0') {
        calcBuffer = '-';
      } else {
        calcBuffer = '-' + calcBuffer;
      }
      calcUpdateDisplay();
      return;
    }
    if (key === '.') {
      if (calcBuffer.includes('.')) return; // only one decimal
      calcBuffer += '.';
      calcUpdateDisplay();
      return;
    }
    // Digit 0-9
    if (calcBuffer === '0') {
      calcBuffer = key;
    } else if (calcBuffer === '-') {
      calcBuffer = '-' + key;
    } else {
      if (calcBuffer.replace(/[-.]/, '').length >= 10) return; // max length
      calcBuffer += key;
    }
    calcUpdateDisplay();
  }

  function showCalcQuestion() {
    if (round.currentIndex >= round.questions.length) {
      endRound();
      return;
    }

    round.phase = 'question';
    const q = round.questions[round.currentIndex];
    const topicObj = TOPICS.find(t => t.id === q.topic);

    $('calc-topic').textContent = topicObj ? topicObj.name : q.topic;
    $('calc-problem').textContent = q.text;
    $('calc-qnum').textContent = `${round.currentIndex + 1} / ${round.questions.length}`;
    $('calc-unit').textContent = q.unit || '';
    $('calc-feedback').classList.add('hidden');

    // Reset keypad
    calcBuffer = '0';
    calcUpdateDisplay();
    // Enable all keys
    document.querySelectorAll('#calc-keypad .key-btn').forEach(b => b.disabled = false);
  }

  function handleCalcAnswer() {
    if (round.phase !== 'question') return;

    const rawValue = calcBuffer.replace(/[,%$]/g, '');
    let userAnswer = parseFloat(rawValue);
    if (isNaN(userAnswer)) {
      showToast('Enter a number');
      return;
    }

    round.phase = 'feedback';
    // Disable keypad
    document.querySelectorAll('#calc-keypad .key-btn').forEach(b => b.disabled = true);

    const q = round.questions[round.currentIndex];
    const tolerance = q.tolerance || 0.5;
    // Check both the raw answer and, for percentage units, the decimal equivalent
    let correct = Math.abs(userAnswer - q.answer) <= tolerance;
    if (!correct && q.unit && q.unit.includes('%') && q.answer > 1) {
      // Accept decimal form (e.g., 0.10 for 10%)
      correct = Math.abs(userAnswer * 100 - q.answer) <= tolerance;
    }

    SRS.recordAnswer(q.id, correct);

    round.answered++;
    if (correct) {
      round.correct++;
      round.streak++;
      state.streak++;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;
      let xpGain = CALC_XP;
      if (round.streak >= STREAK_BONUS_THRESHOLD && round.streak % STREAK_BONUS_THRESHOLD === 0) {
        xpGain += STREAK_BONUS_XP;
        showToast(`${round.streak} streak! +${STREAK_BONUS_XP} bonus XP`);
      }
      state.xp += xpGain;
      state.totalCorrect++;
    } else {
      round.streak = 0;
      state.streak = 0;
    }

    state.totalAnswered++;
    saveState();
    updateTopBar();

    // Show feedback
    const feedbackEl = $('calc-feedback');
    feedbackEl.classList.remove('hidden', 'correct', 'incorrect');
    feedbackEl.classList.add(correct ? 'correct' : 'incorrect');
    $('calc-feedback-icon').textContent = correct ? '✓' : '✗';
    $('calc-feedback-text').textContent = correct
      ? `Correct! The answer is ${q.answer}${q.unit ? ' ' + q.unit : ''}`
      : `Not quite — the answer is ${q.answer}${q.unit ? ' ' + q.unit : ''} (you entered ${userAnswer})`;

    // Show steps
    if (q.steps && q.steps.length > 0) {
      $('calc-steps').innerHTML = '<div class="calc-steps-title">Solution:</div>' +
        q.steps.map(s => `<div class="calc-step">${s}</div>`).join('');
    } else {
      $('calc-steps').innerHTML = '';
    }
    $('calc-explanation').textContent = q.explanation || '';

    checkAchievements();
    checkBreakReminder();
  }

  // ===== POLICY ADVISOR =====
  function showPolicyQuestion() {
    if (round.currentIndex >= round.questions.length) {
      endRound();
      return;
    }

    round.phase = 'question';
    const q = round.questions[round.currentIndex];
    const topicObj = TOPICS.find(t => t.id === q.topic);

    $('policy-role').textContent = topicObj ? topicObj.name : q.topic;
    $('policy-scenario').textContent = q.text;
    $('policy-qnum').textContent = `${round.currentIndex + 1} / ${round.questions.length}`;
    $('policy-feedback').classList.add('hidden');

    const choicesEl = $('policy-choices');
    choicesEl.innerHTML = '';

    const keys = ['1', '2', '3', '4'];
    q.shuffledChoices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn policy-choice';
      btn.innerHTML = `<span class="choice-key">${keys[i]}</span><span>${choice}</span>`;
      btn.addEventListener('click', () => handlePolicyAnswer(i));
      choicesEl.appendChild(btn);
    });
  }

  function handlePolicyAnswer(choiceIndex) {
    if (round.phase !== 'question') return;
    round.phase = 'feedback';

    const q = round.questions[round.currentIndex];
    const score = q.shuffledScores[choiceIndex];
    const bestIdx = q.shuffledScores.indexOf(3);
    const correct = score === 3;

    if (score === 3) state.policyThreeStars++;

    SRS.recordAnswer(q.id, correct);

    round.answered++;
    const xpGain = POLICY_XP[score] || 0;

    if (score >= 2) {
      round.correct++;
      round.streak++;
      state.streak++;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;
      if (round.streak >= STREAK_BONUS_THRESHOLD && round.streak % STREAK_BONUS_THRESHOLD === 0) {
        showToast(`${round.streak} streak! +${STREAK_BONUS_XP} bonus XP`);
        state.xp += STREAK_BONUS_XP;
      }
      state.totalCorrect++;
    } else {
      round.streak = 0;
      state.streak = 0;
    }

    state.xp += xpGain;
    state.totalAnswered++;
    saveState();
    updateTopBar();

    // Highlight choices
    const buttons = $('policy-choices').querySelectorAll('.policy-choice');
    buttons.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === bestIdx) btn.classList.add(correct ? 'correct' : 'reveal-correct');
      if (i === choiceIndex && !correct) {
        btn.classList.add(score >= 2 ? 'partial' : 'incorrect');
      }
    });

    // Show feedback with star rating
    const stars = '\u2605'.repeat(score) + '\u2606'.repeat(3 - score);
    const labels = ['Wrong', 'Fair', 'Good', 'Best!'];
    const feedbackEl = $('policy-feedback');
    feedbackEl.classList.remove('hidden', 'correct', 'incorrect', 'partial');
    feedbackEl.classList.add(score === 3 ? 'correct' : score >= 2 ? 'partial' : 'incorrect');
    $('policy-feedback-icon').textContent = stars;
    $('policy-score-text').textContent = `${labels[score]} (+${xpGain} XP)`;
    $('policy-explanation').textContent = q.explanation;

    checkAchievements();
    checkBreakReminder();
  }

  // ===== BOSS BATTLE =====
  function showBossQuestion() {
    if (round.currentIndex >= round.questions.length) {
      endRound();
      return;
    }

    const q = round.questions[round.currentIndex];
    const topicObj = TOPICS.find(t => t.id === q.topic);
    const part = q.parts[round.bossPartIndex];

    if (!part) {
      // All parts done for this boss, check sweep
      if (round.bossPartsCorrect === q.parts.length) {
        state.xp += BOSS_SWEEP_BONUS;
        state.bossSweeps++;
        showToast(`SWEEP! +${BOSS_SWEEP_BONUS} bonus XP!`, 3000);
        saveState();
        updateTopBar();
      }
      // Move to next boss question
      round.currentIndex++;
      round.bossPartIndex = 0;
      round.bossPartsCorrect = 0;
      showBossQuestion();
      return;
    }

    round.phase = 'question';

    $('boss-title').textContent = q.title;
    $('boss-topic').textContent = topicObj ? topicObj.name : q.topic;
    $('boss-part-num').textContent = `Part ${round.bossPartIndex + 1} of ${q.parts.length}`;
    $('boss-text').textContent = part.text;
    $('boss-feedback').classList.add('hidden');

    const choicesEl = $('boss-choices');
    choicesEl.innerHTML = '';

    // Shuffle this part's choices
    const indices = part.choices.map((_, i) => i);
    shuffle(indices);
    const shuffledChoices = indices.map(i => part.choices[i]);
    const shuffledCorrect = indices.indexOf(part.correct);

    // Store for answer checking
    round._bossShuffledCorrect = shuffledCorrect;

    const keys = ['1', '2', '3', '4'];
    shuffledChoices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn boss-choice';
      btn.innerHTML = `<span class="choice-key">${keys[i]}</span><span>${choice}</span>`;
      btn.addEventListener('click', () => handleBossAnswer(i));
      choicesEl.appendChild(btn);
    });
  }

  function handleBossAnswer(choiceIndex) {
    if (round.phase !== 'question') return;
    round.phase = 'feedback';

    const q = round.questions[round.currentIndex];
    const part = q.parts[round.bossPartIndex];
    const correct = choiceIndex === round._bossShuffledCorrect;

    SRS.recordAnswer(q.id + '_p' + round.bossPartIndex, correct);

    round.answered++;
    if (correct) {
      round.correct++;
      round.streak++;
      state.streak++;
      round.bossPartsCorrect++;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;
      state.xp += BOSS_PART_XP;
      state.totalCorrect++;
      if (round.streak >= STREAK_BONUS_THRESHOLD && round.streak % STREAK_BONUS_THRESHOLD === 0) {
        showToast(`${round.streak} streak! +${STREAK_BONUS_XP} bonus XP`);
        state.xp += STREAK_BONUS_XP;
      }
    } else {
      round.streak = 0;
      state.streak = 0;
    }

    state.totalAnswered++;
    saveState();
    updateTopBar();

    // Highlight choices
    const buttons = $('boss-choices').querySelectorAll('.boss-choice');
    buttons.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === round._bossShuffledCorrect) btn.classList.add(correct ? 'correct' : 'reveal-correct');
      if (i === choiceIndex && !correct) btn.classList.add('incorrect');
    });

    // Show feedback
    const feedbackEl = $('boss-feedback');
    feedbackEl.classList.remove('hidden', 'correct', 'incorrect');
    feedbackEl.classList.add(correct ? 'correct' : 'incorrect');
    $('boss-feedback-icon').textContent = correct ? '\u2713' : '\u2717';
    $('boss-feedback-text').textContent = correct
      ? `Correct! (+${BOSS_PART_XP} XP)`
      : 'Not quite';
    $('boss-explanation').textContent = part.explanation;

    checkAchievements();
    checkBreakReminder();
  }

  // ===== ADVANCE =====
  function advance() {
    if (round.phase !== 'feedback') return;
    if (round.mode === 'boss') {
      // Boss: advance to next part (showBossQuestion handles overflow to next question)
      round.bossPartIndex++;
      showBossQuestion();
      return;
    }
    round.currentIndex++;
    if (round.mode === 'mythbuster') {
      showMythQuestion();
    } else if (round.mode === 'curveshifter') {
      showCurveQuestion();
    } else if (round.mode === 'calculator') {
      showCalcQuestion();
    } else if (round.mode === 'advisor') {
      showPolicyQuestion();
    } else {
      showQuestion();
    }
  }

  // ===== END ROUND =====
  function endRound() {
    stopTimer();
    round.phase = 'done';
    state.roundsPlayed++;
    SRS.incrementSession();
    saveState();

    // Check for perfect round
    if (round.answered > 0 && round.correct === round.answered) {
      if (!state.achievements.includes('perfect_round')) {
        state.achievements.push('perfect_round');
        saveState();
      }
    }

    // Check for level up
    const level = getLevel();
    showToast(`${level.name}!`, 2500);
    checkAchievements();

    // Summary
    const accuracy = round.answered > 0
      ? Math.round((round.correct / round.answered) * 100)
      : 0;

    $('summary-stats').innerHTML = `
      <div class="summary-row">
        <span class="summary-label">Correct</span>
        <span class="summary-value">${round.correct} / ${round.answered}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Accuracy</span>
        <span class="summary-value">${accuracy}%</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Best Streak</span>
        <span class="summary-value">${round.streak > 0 ? round.streak : '—'}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">XP Earned</span>
        <span class="summary-value">+${round.correct * XP_PER_CORRECT} XP</span>
      </div>
    `;

    showScreen('summary');
    updateTopBar();
  }

  // ===== MASTERY MAP =====
  function showMastery() {
    const mastery = SRS.getTopicMastery(QUESTIONS);
    const grid = $('mastery-grid');
    grid.innerHTML = '';

    TOPICS.forEach(topic => {
      const m = mastery[topic.id];
      if (!m) return;

      const pct = m.seen > 0 ? Math.round(m.accuracy * 100) : 0;
      const level = m.level || 'red';

      const tile = document.createElement('div');
      tile.className = 'mastery-tile';
      tile.innerHTML = `
        <span class="mastery-tile-name">${topic.name}</span>
        <div class="mastery-bar">
          <div class="mastery-bar-fill ${level}" style="width: ${m.seen > 0 ? Math.max(5, m.mastery * 100) : 0}%"></div>
        </div>
        <span class="mastery-pct">${m.seen > 0 ? `${pct}% accuracy · ${m.seen} seen` : 'Not started'}</span>
      `;
      grid.appendChild(tile);
    });

    showScreen('mastery');
  }

  // ===== STATS =====
  function showStats() {
    const stats = SRS.getOverallStats();
    const level = getLevel();
    const accuracy = stats.totalSeen > 0
      ? Math.round(stats.accuracy * 100)
      : 0;

    $('stats-content').innerHTML = `
      <div class="summary-row">
        <span class="summary-label">Level</span>
        <span class="summary-value">${level.num} — ${level.name}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Total XP</span>
        <span class="summary-value">${state.xp}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Rounds Played</span>
        <span class="summary-value">${state.roundsPlayed}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Questions Answered</span>
        <span class="summary-value">${state.totalAnswered}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Overall Accuracy</span>
        <span class="summary-value">${accuracy}%</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Best Streak</span>
        <span class="summary-value">${state.bestStreak}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Unique Questions Seen</span>
        <span class="summary-value">${stats.uniqueSeen} / ${QUESTIONS.length}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Session</span>
        <span class="summary-value">#${stats.session}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Achievements</span>
        <span class="summary-value">${state.achievements.length} / ${ACHIEVEMENTS.length}</span>
      </div>
    `;

    showScreen('stats');
  }

  // ===== RESET =====
  function resetAll() {
    if (!confirm('Reset ALL progress? This cannot be undone.')) return;
    const id = getActiveProfileId();
    const key = id ? STORAGE_KEY + '_' + id : STORAGE_KEY;
    localStorage.removeItem(key);
    SRS.reset();
    state = { xp: 0, streak: 0, bestStreak: 0, totalCorrect: 0, totalAnswered: 0, roundsPlayed: 0, achievements: [], modesPlayed: [], policyThreeStars: 0, mythSpeedBonuses: 0, bossSweeps: 0 };
    // Save zeroed state but do NOT touch profile's totalXP or bestSessionXP —
    // those are lifetime leaderboard records that survive resets
    const profileKey = id ? STORAGE_KEY + '_' + id : STORAGE_KEY;
    localStorage.setItem(profileKey, JSON.stringify(state));
    session.startXP = 0;
    updateTopBar();
    showToast('Progress reset — leaderboard records preserved');
    showScreen('menu');
  }

  // ===== EXAM SIMULATOR =====
  function startExam() {
    // Pull only standard MC questions
    let pool = QUESTIONS.filter(q => !q.format);

    // Use SRS-weighted selection for 25 questions
    exam.questions = SRS.selectQuestions(pool, EXAM_QUESTIONS);

    // Shuffle choices
    exam.questions = exam.questions.map(q => {
      const indices = q.choices.map((_, i) => i);
      shuffle(indices);
      return {
        ...q,
        shuffledChoices: indices.map(i => q.choices[i]),
        shuffledCorrect: indices.indexOf(q.correct),
      };
    });

    exam.answers = new Array(EXAM_QUESTIONS).fill(-1);
    exam.currentIndex = 0;
    exam.active = true;
    exam.timeLeft = EXAM_TIME;

    // Build question dots
    buildExamDots();
    showExamQuestion();
    startExamTimer();
    showScreen('exam');
  }

  function startExamTimer() {
    updateExamTimerDisplay();
    exam.timer = setInterval(() => {
      exam.timeLeft--;
      updateExamTimerDisplay();
      if (exam.timeLeft <= 0) {
        clearInterval(exam.timer);
        submitExam();
      }
    }, 1000);
  }

  function updateExamTimerDisplay() {
    const m = Math.floor(exam.timeLeft / 60);
    const s = exam.timeLeft % 60;
    const el = $('exam-timer');
    el.textContent = `${m}:${s.toString().padStart(2, '0')}`;

    el.classList.remove('warning', 'danger');
    if (exam.timeLeft <= 300) el.classList.add('danger');       // last 5 min
    else if (exam.timeLeft <= 600) el.classList.add('warning'); // last 10 min
  }

  function buildExamDots() {
    const container = $('exam-question-dots');
    container.innerHTML = '';
    exam.questions.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'exam-dot';
      dot.textContent = i + 1;
      dot.addEventListener('click', () => {
        exam.currentIndex = i;
        showExamQuestion();
      });
      container.appendChild(dot);
    });
    updateExamDots();
  }

  function updateExamDots() {
    const dots = $('exam-question-dots').querySelectorAll('.exam-dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('current', 'answered');
      if (i === exam.currentIndex) dot.classList.add('current');
      if (exam.answers[i] >= 0) dot.classList.add('answered');
    });
  }

  function showExamQuestion() {
    const q = exam.questions[exam.currentIndex];
    const topicObj = TOPICS.find(t => t.id === q.topic);

    $('exam-topic').textContent = topicObj ? topicObj.name : q.topic;
    $('exam-text').textContent = q.text;
    $('exam-progress').textContent = `${exam.currentIndex + 1} / ${exam.questions.length}`;

    const choicesEl = $('exam-choices');
    choicesEl.innerHTML = '';

    const keys = ['A', 'B', 'C', 'D'];
    q.shuffledChoices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn exam-choice';
      if (exam.answers[exam.currentIndex] === i) btn.classList.add('selected');
      btn.innerHTML = `<span class="choice-key">${keys[i]}</span><span>${choice}</span>`;
      btn.addEventListener('click', () => selectExamAnswer(i));
      choicesEl.appendChild(btn);
    });

    // Nav button states
    $('exam-prev').disabled = exam.currentIndex === 0;
    $('exam-next').classList.toggle('hidden', exam.currentIndex === exam.questions.length - 1);
    $('exam-submit').classList.toggle('hidden', exam.currentIndex !== exam.questions.length - 1);

    updateExamDots();
  }

  function selectExamAnswer(choiceIndex) {
    exam.answers[exam.currentIndex] = choiceIndex;

    // Update button styles
    const buttons = $('exam-choices').querySelectorAll('.exam-choice');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('selected', i === choiceIndex);
    });

    updateExamDots();
  }

  function examPrev() {
    if (exam.currentIndex > 0) {
      exam.currentIndex--;
      showExamQuestion();
    }
  }

  function examNext() {
    if (exam.currentIndex < exam.questions.length - 1) {
      exam.currentIndex++;
      showExamQuestion();
    }
  }

  function submitExam() {
    const unanswered = exam.answers.filter(a => a < 0).length;
    if (unanswered > 0 && exam.timeLeft > 0) {
      if (!confirm(`You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`)) return;
    }

    clearInterval(exam.timer);
    exam.active = false;

    // Score the exam
    let correct = 0;
    const topicScores = {};

    exam.questions.forEach((q, i) => {
      const isCorrect = exam.answers[i] === q.shuffledCorrect;
      if (isCorrect) correct++;

      SRS.recordAnswer(q.id, isCorrect);

      if (!topicScores[q.topic]) topicScores[q.topic] = { correct: 0, total: 0 };
      topicScores[q.topic].total++;
      if (isCorrect) topicScores[q.topic].correct++;
    });

    const pct = Math.round((correct / exam.questions.length) * 100);
    const timeUsed = EXAM_TIME - exam.timeLeft;
    const minUsed = Math.floor(timeUsed / 60);

    // XP for exam
    state.xp += correct * XP_PER_CORRECT;
    state.totalCorrect += correct;
    state.totalAnswered += exam.questions.length;
    state.roundsPlayed++;
    SRS.incrementSession();
    saveState();
    updateTopBar();
    checkAchievements();

    // Build score card
    let grade;
    if (pct >= 90) grade = 'A';
    else if (pct >= 80) grade = 'B';
    else if (pct >= 70) grade = 'C';
    else if (pct >= 60) grade = 'D';
    else grade = 'F';

    $('exam-score-card').innerHTML = `
      <div class="exam-grade">${grade}</div>
      <div class="exam-score">${correct} / ${exam.questions.length} correct (${pct}%)</div>
      <div class="exam-time-used">Time used: ${minUsed} minutes</div>
    `;

    // Build topic breakdown
    const breakdownEl = $('exam-topic-breakdown');
    breakdownEl.innerHTML = '';
    for (const [topicId, scores] of Object.entries(topicScores)) {
      const topicObj = TOPICS.find(t => t.id === topicId);
      const topicPct = Math.round((scores.correct / scores.total) * 100);
      const bar = document.createElement('div');
      bar.className = 'exam-topic-row';
      bar.innerHTML = `
        <span class="exam-topic-name">${topicObj ? topicObj.name : topicId}</span>
        <span class="exam-topic-score">${scores.correct}/${scores.total}</span>
        <div class="exam-topic-bar">
          <div class="exam-topic-bar-fill ${topicPct >= 80 ? 'green' : topicPct >= 50 ? 'yellow' : 'red'}" style="width: ${topicPct}%"></div>
        </div>
      `;
      breakdownEl.appendChild(bar);
    }

    // Build review list
    const reviewEl = $('exam-review-list');
    reviewEl.innerHTML = '';
    exam.questions.forEach((q, i) => {
      const isCorrect = exam.answers[i] === q.shuffledCorrect;
      const topicObj = TOPICS.find(t => t.id === q.topic);
      const item = document.createElement('div');
      item.className = 'exam-review-item ' + (isCorrect ? 'correct' : 'incorrect');
      const userAnswer = exam.answers[i] >= 0 ? q.shuffledChoices[exam.answers[i]] : '(no answer)';
      const correctAnswer = q.shuffledChoices[q.shuffledCorrect];
      item.innerHTML = `
        <div class="exam-review-header">
          <span class="exam-review-num">${isCorrect ? '\u2713' : '\u2717'} Q${i + 1}</span>
          <span class="exam-review-topic">${topicObj ? topicObj.name : q.topic}</span>
        </div>
        <div class="exam-review-question">${q.text}</div>
        ${!isCorrect ? `<div class="exam-review-your">Your answer: ${userAnswer}</div>` : ''}
        <div class="exam-review-correct">Correct: ${correctAnswer}</div>
        <div class="exam-review-explanation">${q.explanation}</div>
      `;
      item.addEventListener('click', () => {
        item.classList.toggle('expanded');
      });
      reviewEl.appendChild(item);
    });

    showScreen('examResults');
  }

  function quitExam() {
    if (exam.active) {
      if (!confirm('Quit the exam? Your progress will be lost.')) return;
      clearInterval(exam.timer);
      exam.active = false;
    }
    showScreen('menu');
  }

  // ===== ACHIEVEMENTS =====
  function checkAchievements() {
    const earned = [];
    function award(id) {
      if (!state.achievements.includes(id)) {
        state.achievements.push(id);
        earned.push(id);
      }
    }

    if (state.totalCorrect >= 1) award('first_correct');
    if (state.bestStreak >= 5) award('streak_5');
    if (state.bestStreak >= 10) award('streak_10');
    if (state.bestStreak >= 20) award('streak_20');
    if (state.totalAnswered >= 50) award('fifty_questions');
    if (state.totalAnswered >= 100) award('hundred_questions');
    if (getLevel().num >= 4) award('level_4');
    if (getLevel().num >= 8) award('level_8');
    if (state.modesPlayed.length >= 6) award('all_modes');
    if (state.mythSpeedBonuses >= 5) award('speed_demon');
    if (state.bossSweeps >= 1) award('boss_sweep');
    if (state.policyThreeStars >= 5) award('three_star');

    const hour = new Date().getHours();
    if (hour >= 23 || hour < 4) award('night_owl');
    if (hour >= 4 && hour < 7) award('early_bird');

    // Show toast for each newly earned achievement
    earned.forEach((id, i) => {
      const ach = ACHIEVEMENTS.find(a => a.id === id);
      if (ach) {
        setTimeout(() => showToast(`${ach.icon} ${ach.name}!`, 3000), i * 1500);
      }
    });

    if (earned.length > 0) saveState();
    return earned;
  }

  function showAchievements() {
    const grid = $('achievements-grid');
    grid.innerHTML = '';

    ACHIEVEMENTS.forEach(ach => {
      const earned = state.achievements.includes(ach.id);
      const tile = document.createElement('div');
      tile.className = 'achievement-tile' + (earned ? ' earned' : '') + (ach.hidden && !earned ? ' hidden-ach' : '');
      tile.innerHTML = ach.hidden && !earned
        ? '<span class="achievement-icon">?</span><span class="achievement-name">???</span><span class="achievement-desc">Hidden achievement</span>'
        : `<span class="achievement-icon">${ach.icon}</span><span class="achievement-name">${ach.name}</span><span class="achievement-desc">${ach.desc}</span>`;
      grid.appendChild(tile);
    });

    showScreen('achievements');
  }

  // ===== BREAK REMINDERS =====
  function checkBreakReminder() {
    session.questionsThisSession++;
    const elapsed = (Date.now() - session.startTime) / 60000; // minutes
    const sinceLastReminder = session.questionsThisSession - session.lastBreakReminder;

    if (sinceLastReminder >= BREAK_REMINDER_QUESTIONS || (elapsed > BREAK_REMINDER_MINUTES && session.lastBreakReminder === 0)) {
      session.lastBreakReminder = session.questionsThisSession;
      showBreakReminder(Math.round(elapsed));
    }
  }

  function showBreakReminder(minutes) {
    const msg = $('break-reminder');
    $('break-minutes').textContent = minutes;
    $('break-questions').textContent = session.questionsThisSession;
    msg.classList.remove('hidden');
  }

  function dismissBreak() {
    $('break-reminder').classList.add('hidden');
  }

  // ===== SETTINGS =====
  const SETTINGS_KEY = 'macromaster_settings';
  let settings = {
    timerEnabled: true,
    questionsPerRound: 10,
  };

  function loadSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) settings = { ...settings, ...JSON.parse(raw) };
    } catch {}
  }

  function saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  function showSettings() {
    $('setting-timer').checked = settings.timerEnabled;
    $('setting-qcount').value = settings.questionsPerRound;
    showScreen('settings');
  }

  function applySettings() {
    settings.timerEnabled = $('setting-timer').checked;
    settings.questionsPerRound = parseInt($('setting-qcount').value) || 10;
    saveSettings();
    showToast('Settings saved');
    showScreen('menu');
  }

  // ===== UTILS =====
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ===== KEYBOARD =====
  function handleKeydown(e) {
    // Exam Simulator: A-D for choices, arrow keys for nav
    if (exam.active) {
      if (e.key >= '1' && e.key <= '4') {
        selectExamAnswer(parseInt(e.key) - 1);
        return;
      }
      if (e.key === 'a' || e.key === 'A') { selectExamAnswer(0); return; }
      if (e.key === 'b' || e.key === 'B') { selectExamAnswer(1); return; }
      if (e.key === 'c' || e.key === 'C') { selectExamAnswer(2); return; }
      if (e.key === 'd' || e.key === 'D') { selectExamAnswer(3); return; }
      if (e.key === 'ArrowRight' || e.key === 'Enter') { examNext(); return; }
      if (e.key === 'ArrowLeft') { examPrev(); return; }
      if (e.key === 'Escape') { quitExam(); return; }
      return;
    }

    // Myth Buster: T/1 for True, F/2 for False
    if (round.mode === 'mythbuster' && round.phase === 'question') {
      if (e.key === 't' || e.key === 'T' || e.key === '1') {
        handleMythAnswer(0);
        return;
      }
      if (e.key === 'f' || e.key === 'F' || e.key === '2') {
        handleMythAnswer(1);
        return;
      }
    }

    // Curve Shifter: number keys for shift choices
    if (round.mode === 'curveshifter' && round.phase === 'question' && e.key >= '1' && e.key <= '6') {
      const idx = parseInt(e.key) - 1;
      const buttons = $('curve-choices').querySelectorAll('.curve-choice');
      if (idx < buttons.length) {
        handleCurveAnswer(idx);
      }
      return;
    }

    // Calculator: route keyboard to keypad
    if (round.mode === 'calculator' && round.phase === 'question') {
      e.preventDefault();
      if (e.key === 'Enter') { calcHandleKey('submit'); return; }
      if (e.key === 'Backspace' || e.key === 'Delete') { calcHandleKey('backspace'); return; }
      if (e.key === 'Escape') { /* fall through to Escape handler below */ }
      else if (e.key === 'c' || e.key === 'C') { calcHandleKey('clear'); return; }
      else if (e.key === '-') { calcHandleKey('-'); return; }
      else if (e.key === '.') { calcHandleKey('.'); return; }
      else if (e.key >= '0' && e.key <= '9') { calcHandleKey(e.key); return; }
      return;
    }

    // Policy Advisor: number keys
    if (round.mode === 'advisor' && round.phase === 'question' && e.key >= '1' && e.key <= '4') {
      const idx = parseInt(e.key) - 1;
      const buttons = $('policy-choices').querySelectorAll('.policy-choice');
      if (idx < buttons.length) handlePolicyAnswer(idx);
      return;
    }

    // Boss Battle: number keys
    if (round.mode === 'boss' && round.phase === 'question' && e.key >= '1' && e.key <= '4') {
      const idx = parseInt(e.key) - 1;
      const buttons = $('boss-choices').querySelectorAll('.boss-choice');
      if (idx < buttons.length) handleBossAnswer(idx);
      return;
    }

    // Number keys 1-4 for choices (Lightning Round)
    if (round.phase === 'question' && e.key >= '1' && e.key <= '4') {
      const idx = parseInt(e.key) - 1;
      const buttons = $('choices').querySelectorAll('.choice-btn');
      if (idx < buttons.length) {
        handleAnswer(idx);
      }
      return;
    }

    // Enter/Space to advance
    if (round.phase === 'feedback' && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      advance();
      return;
    }

    // Escape to menu
    if (e.key === 'Escape') {
      stopTimer();
      showScreen('menu');
      updateTopBar();
      return;
    }
  }

  // ===== INIT =====
  function init() {
    loadSettings();

    // Check for active profile — if none, show profile picker
    const activeId = getActiveProfileId();
    if (activeId) {
      loadState();
      session.startXP = state.xp;
      const profiles = loadProfiles();
      const p = profiles.find(p => p.id === activeId);
      if (p) {
        $('player-name-display').textContent = p.name;
        updateTopBar();
        showScreen('menu');
      } else {
        // Profile was deleted somehow, show picker
        showProfileScreen();
      }
    } else {
      showProfileScreen();
    }

    // Profile screen buttons
    $('profile-create-btn').addEventListener('click', () => {
      const name = $('profile-name-input').value.trim();
      if (!name) { showToast('Enter a name'); return; }
      const id = createProfile(name);
      loginProfile(id);
    });
    $('profile-name-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') $('profile-create-btn').click();
    });
    $('switch-profile-btn').addEventListener('click', () => {
      // Save current session best before switching
      syncProfileXP();
      showProfileScreen();
    });

    // Mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('locked')) {
          showToast('Coming soon!');
          return;
        }
        const mode = btn.dataset.mode;
        showTopicPicker(mode);
      });
    });

    // Menu footer buttons
    $('mastery-btn').addEventListener('click', showMastery);
    $('achievements-btn').addEventListener('click', showAchievements);
    $('stats-btn').addEventListener('click', showStats);
    $('leaderboard-btn').addEventListener('click', showLeaderboard);
    $('settings-btn').addEventListener('click', showSettings);
    $('reset-btn').addEventListener('click', resetAll);

    // Back buttons
    $('topic-back').addEventListener('click', () => showScreen('menu'));
    $('mastery-back').addEventListener('click', () => showScreen('menu'));
    $('achievements-back').addEventListener('click', () => showScreen('menu'));
    $('stats-back').addEventListener('click', () => showScreen('menu'));
    $('settings-back').addEventListener('click', () => showScreen('menu'));
    $('leaderboard-back').addEventListener('click', () => showScreen('menu'));
    $('settings-save').addEventListener('click', applySettings);
    $('break-dismiss').addEventListener('click', dismissBreak);
    $('game-quit').addEventListener('click', () => {
      stopTimer();
      showScreen('menu');
    });

    // Myth Buster buttons
    document.querySelectorAll('.myth-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleMythAnswer(parseInt(btn.dataset.answer));
      });
    });
    $('myth-quit').addEventListener('click', () => {
      stopTimer();
      showScreen('menu');
    });

    // Curve Shifter quit
    $('curve-quit').addEventListener('click', () => {
      stopTimer();
      showScreen('menu');
    });

    // Calculator keypad
    document.querySelectorAll('#calc-keypad .key-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        calcHandleKey(btn.dataset.key);
      });
    });
    $('calc-quit').addEventListener('click', () => {
      stopTimer();
      showScreen('menu');
    });

    // Policy Advisor quit
    $('policy-quit').addEventListener('click', () => {
      showScreen('menu');
    });

    // Boss Battle quit
    $('boss-quit').addEventListener('click', () => {
      showScreen('menu');
    });

    // Exam Simulator
    $('exam-start-btn').addEventListener('click', startExam);
    $('exam-prev').addEventListener('click', examPrev);
    $('exam-next').addEventListener('click', examNext);
    $('exam-submit').addEventListener('click', submitExam);
    $('exam-quit').addEventListener('click', quitExam);
    $('exam-retake').addEventListener('click', startExam);
    $('exam-results-menu').addEventListener('click', () => showScreen('menu'));

    // Summary buttons
    $('summary-again').addEventListener('click', () => showTopicPicker(round.mode));
    $('summary-menu').addEventListener('click', () => showScreen('menu'));

    // Continue buttons (mobile-friendly advance)
    document.querySelectorAll('.continue-btn').forEach(btn => {
      btn.addEventListener('click', advance);
    });

    // Keyboard
    document.addEventListener('keydown', handleKeydown);
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { state, getLevel, advance };
})();
