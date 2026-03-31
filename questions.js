// ===== Macro Master Question Bank =====
// Each question has: id, topic, text, choices[], correct (0-indexed), explanation, source
// Topics match the 18-topic study plan

const TOPICS = [
  { id: 'ismp',        name: 'IS-MP Model',                tier: 1 },
  { id: 'exchange',    name: 'Exchange Rates & IRP',        tier: 1 },
  { id: 'tariff',      name: 'Tariff Analysis & Trade',     tier: 1 },
  { id: 'labor',       name: 'Labor Markets',               tier: 1 },
  { id: 'debt',        name: 'Debt Sustainability',         tier: 1 },
  { id: 'adia',        name: 'AD-IA-LR Model',              tier: 1 },
  { id: 'inflation',   name: 'Inflation & CPI',             tier: 2 },
  { id: 'environment', name: 'Environment & Carbon Policy', tier: 2 },
  { id: 'growth',      name: 'Growth & TFP',                tier: 2 },
  { id: 'gdp',         name: 'GDP Accounting',              tier: 2 },
  { id: 'qeqt',        name: 'QE, QT & Monetary Tools',    tier: 2 },
  { id: 'skillbias',   name: 'Skill-Biased Change & Wages', tier: 2 },
  { id: 'multiplier',  name: 'Fiscal Multipliers',          tier: 2 },
  { id: 'savings',     name: 'Savings-Investment',          tier: 2 },
  { id: 'articles',    name: 'Article-Based Questions',     tier: 2 },
  { id: 'qtm',         name: 'Quantity Theory of Money',    tier: 2 },
  { id: 'money',       name: 'M1 Money Supply',             tier: 3 },
  { id: 'gender',      name: 'Gender Wage Gap',             tier: 3 },
];

const QUESTIONS = [
  // ===== IS-MP MODEL (Tier 1) =====
  {
    id: 'ismp-01',
    topic: 'ismp',
    text: 'In the IS-MP model for a closed economy, a dovish central bank that lowers the real interest rate will:',
    choices: [
      'Shift the IS curve to the right',
      'Shift the MP curve down, increasing output',
      'Shift the MP curve up, decreasing output',
      'Have no effect on output in the short run'
    ],
    correct: 1,
    explanation: 'A dovish CB lowers r, which is represented by shifting MP down (or right). At a lower r, investment and consumption rise, increasing output along the IS curve.',
    source: 'PS5, IS-MP framework'
  },
  {
    id: 'ismp-02',
    topic: 'ismp',
    text: 'In an open economy with a FLEXIBLE exchange rate, fiscal expansion (IS shifts right) is:',
    choices: [
      'More effective than in a closed economy because exports also increase',
      'Less effective than in a closed economy because the currency appreciates, reducing net exports',
      'Equally effective as in a closed economy',
      'Completely ineffective because the central bank offsets it'
    ],
    correct: 1,
    explanation: 'Under flexible ER: fiscal expansion → higher r → currency appreciates → net exports fall → partially offsets the IS shift. So fiscal policy is less effective than in a closed economy.',
    source: 'PS7, Final 2022/2024'
  },
  {
    id: 'ismp-03',
    topic: 'ismp',
    text: 'Under a FIXED exchange rate, monetary policy is:',
    choices: [
      'More effective than under a flexible exchange rate',
      'Equally effective as under a flexible exchange rate',
      'Redundant — the CB must set r to maintain the exchange rate peg',
      'Effective only if combined with fiscal policy'
    ],
    correct: 2,
    explanation: 'Under a fixed ER, the MP curve must coincide with the IRP line. The CB cannot independently set r — it must match r* + θ to maintain the peg. Monetary policy is redundant.',
    source: 'PS7 (Saudi Arabia), Finals 2022-2025'
  },
  {
    id: 'ismp-04',
    topic: 'ismp',
    text: 'A country with a flexible exchange rate experiences an increase in its risk premium (θ). What happens?',
    choices: [
      'Currency appreciates, IS shifts left, output falls',
      'Currency depreciates, IS shifts right, output rises',
      'No effect — risk premium only matters under fixed ER',
      'Currency depreciates, IS shifts left, output falls'
    ],
    correct: 1,
    explanation: 'Higher θ → IRP shifts up → currency depreciates → exports become cheaper → net exports rise → IS shifts right → output increases. This is the "silver lining" of a risk premium increase under flexible ER.',
    source: 'PS6 (Kenya), Final 2022 (Chile)'
  },
  {
    id: 'ismp-05',
    topic: 'ismp',
    text: 'A country with a FIXED exchange rate experiences an increase in the world interest rate r*. The central bank must:',
    choices: [
      'Lower domestic r to stimulate the economy',
      'Raise domestic r to maintain the peg, causing a recession',
      'Do nothing — fixed ER insulates from foreign shocks',
      'Devalue the currency'
    ],
    correct: 1,
    explanation: 'Under fixed ER: r must equal r* + θ (IRP condition). If r* rises, CB must raise r to maintain peg → MP shifts up → output falls → recession.',
    source: 'PS7 (Saudi Arabia), Final 2022 (Qatar)'
  },
  {
    id: 'ismp-06',
    topic: 'ismp',
    text: 'Rank fiscal policy effectiveness by exchange rate regime (most to least effective):',
    choices: [
      'Fixed ER > Closed economy > Flexible ER',
      'Flexible ER > Closed economy > Fixed ER',
      'Closed economy > Fixed ER > Flexible ER',
      'All regimes are equally effective'
    ],
    correct: 0,
    explanation: 'Fixed ER: fiscal expansion + CB must lower r to maintain peg = double stimulus. Closed: standard multiplier. Flexible: currency appreciation partially offsets fiscal expansion. So Fixed > Closed > Flexible.',
    source: 'PS7, recurring exam topic'
  },

  // ===== EXCHANGE RATES & IRP (Tier 1) =====
  {
    id: 'exchange-01',
    topic: 'exchange',
    text: 'The Interest Rate Parity (IRP) condition states that the expected change in the exchange rate (Δε) equals:',
    choices: [
      'r - r* + θ',
      'r - r* - θ',
      'r* - r + θ',
      'r* - r - θ'
    ],
    correct: 1,
    explanation: 'IRP: Δε = r - r* - θ. If domestic r is higher than foreign r* + risk premium θ, the currency is expected to appreciate (Δε > 0 means appreciation in this convention).',
    source: 'PS6-7, IRP framework'
  },
  {
    id: 'exchange-02',
    topic: 'exchange',
    text: 'According to Purchasing Power Parity (PPP), the real exchange rate equals:',
    choices: [
      'Nominal ER × (P_domestic / P_foreign)',
      'Nominal ER × (P_foreign / P_domestic)',
      'Nominal ER + P_domestic - P_foreign',
      'P_domestic / P_foreign'
    ],
    correct: 1,
    explanation: 'Real ER = ε × (P_foreign / P_domestic). If PPP holds, real ER = 1. A real ER below 1 means the foreign currency is undervalued.',
    source: 'PS6, Big Mac Index reading'
  },
  {
    id: 'exchange-03',
    topic: 'exchange',
    text: 'The Big Mac Index shows the Japanese yen buys a Big Mac for ~$3 vs $6.12 in the US. This suggests the yen is:',
    choices: [
      'Overvalued by about 50%',
      'Correctly valued at PPP',
      'Deeply undervalued relative to PPP',
      'Overvalued because Japan has lower wages'
    ],
    correct: 2,
    explanation: 'If a Big Mac costs half as much in Japan as in the US, the yen is deeply undervalued relative to PPP (by ~50%). The Economist\'s Big Mac index flagged this as an "Asian warning."',
    source: 'Big Mac Index reading'
  },

  // ===== TARIFF ANALYSIS (Tier 1) =====
  {
    id: 'tariff-01',
    topic: 'tariff',
    text: 'A small country imposes a tariff. The deadweight loss (DWL) comes from:',
    choices: [
      'The tariff revenue collected by the government',
      'Two triangles: lost consumer surplus not captured by producers or government',
      'The increase in domestic producer surplus',
      'The decrease in the world price of the good'
    ],
    correct: 1,
    explanation: 'For a small country (price taker), a tariff creates two DWL triangles: (1) production inefficiency — high-cost domestic production replaces cheaper imports, and (2) consumption loss — consumers buy less at the higher price. The tariff cannot affect the world price.',
    source: 'Finals 2022-2025, PS8'
  },
  {
    id: 'tariff-02',
    topic: 'tariff',
    text: 'A LARGE country imposes a tariff. Unlike a small country, the large country:',
    choices: [
      'Always gains from the tariff',
      'May gain if the terms-of-trade improvement exceeds the DWL',
      'Never gains because DWL is always larger',
      'Has no deadweight loss'
    ],
    correct: 1,
    explanation: 'A large country\'s tariff can push down the world price (terms-of-trade gain). If this gain > DWL, the country can have a net welfare improvement. This is the "optimal tariff" argument.',
    source: 'PS8 (steel tariff), Final 2022 (India), Final 2024 (Congo cobalt)'
  },
  {
    id: 'tariff-03',
    topic: 'tariff',
    text: 'NY Fed research on 2025 US tariffs found that approximately what share of tariff costs fell on US importers (not foreign exporters)?',
    choices: [
      'About 50%',
      'About 70%',
      'About 90%',
      'Nearly 100%'
    ],
    correct: 2,
    explanation: 'The NY Fed found ~90% of tariff incidence fell on US importers, not foreign exporters. The average tariff rate rose from 2.6% to 13%. Only by late 2025 did foreign exporters absorb slightly more (~14%).',
    source: 'Who Is Paying for 2025 Tariffs reading'
  },
  {
    id: 'tariff-04',
    topic: 'tariff',
    text: 'When the US imposes tariffs, the US dollar tends to:',
    choices: [
      'Depreciate, making imports even more expensive',
      'Strengthen, partially offsetting the trade deficit reduction',
      'Stay unchanged because tariffs don\'t affect exchange rates',
      'Depreciate because foreign investors lose confidence'
    ],
    correct: 1,
    explanation: 'Tariffs reduce imports → less demand for foreign currency → dollar strengthens. This appreciation partially offsets the tariff\'s intended effect on the trade deficit.',
    source: 'Tariffs will harm America reading'
  },

  // ===== LABOR MARKETS (Tier 1) =====
  {
    id: 'labor-01',
    topic: 'labor',
    text: 'The equilibrium unemployment rate formula is U/LF = s/(s+f), where s is the separation rate and f is the job-finding rate. If s = 0.02 and f = 0.18, the equilibrium unemployment rate is:',
    choices: [
      '5%',
      '10%',
      '11.1%',
      '20%'
    ],
    correct: 1,
    explanation: 'U/LF = s/(s+f) = 0.02/(0.02+0.18) = 0.02/0.20 = 0.10 = 10%.',
    source: 'PS4'
  },
  {
    id: 'labor-02',
    topic: 'labor',
    text: 'In a MONOPSONY labor market, a minimum wage set between the monopsony wage and the competitive wage will:',
    choices: [
      'Decrease employment (same as competitive market)',
      'Increase both wages AND employment',
      'Have no effect on employment',
      'Cause unemployment because wages are above equilibrium'
    ],
    correct: 1,
    explanation: 'Monopsony: firm has market power, pays below competitive wage and hires fewer workers. A minimum wage in the right range forces the wage up toward competitive level and can INCREASE employment — the opposite of the competitive model prediction.',
    source: 'PS4, Final 2022 (Germany), Minimum wage reading'
  },
  {
    id: 'labor-03',
    topic: 'labor',
    text: 'Card & Krueger\'s famous 1994 study of New Jersey fast food restaurants found that a minimum wage increase:',
    choices: [
      'Significantly reduced employment as standard theory predicts',
      'Had no significant negative effect on employment',
      'Increased employment because of higher consumer spending',
      'Was impossible to measure due to data limitations'
    ],
    correct: 1,
    explanation: 'Card & Krueger compared NJ (raised MW) to PA (didn\'t) and found no significant negative employment effect, challenging the standard competitive model. This is consistent with monopsony power in low-wage labor markets.',
    source: 'Minimum wage reading'
  },
  {
    id: 'labor-04',
    topic: 'labor',
    text: 'Hsieh et al. (2019) estimated that the improved allocation of talent (as barriers fell for women and Black men) accounted for what share of US GDP per capita growth from 1960-2010?',
    choices: [
      'About 10%',
      'About 20-25%',
      'About 40%',
      'About 60%'
    ],
    correct: 2,
    explanation: 'Hsieh et al. found ~40% of GDP per capita growth from 1960-2010 came from better talent allocation as discrimination barriers fell. In 1960, 94% of doctors and lawyers were white men; by 2010, ~60%.',
    source: 'Allocation of Talent reading, Final 2022'
  },

  // ===== DEBT SUSTAINABILITY (Tier 1) =====
  {
    id: 'debt-01',
    topic: 'debt',
    text: 'The debt sustainability condition requires that for the debt-to-GDP ratio to stabilize, the government must run a primary surplus when:',
    choices: [
      'r > g (real interest rate exceeds GDP growth rate)',
      'r < g (GDP growth rate exceeds real interest rate)',
      'Inflation is positive',
      'The deficit is below 3% of GDP'
    ],
    correct: 0,
    explanation: 'When r > g, existing debt grows faster than the economy. The government needs a primary surplus (revenue > non-interest spending) to offset this. When r < g, the debt ratio naturally shrinks even with moderate deficits.',
    source: 'Finals 2022-2025, PS8'
  },
  {
    id: 'debt-02',
    topic: 'debt',
    text: 'Argentina has a fixed exchange rate, large dollar-denominated debt, and faces a negative growth shock. This makes debt LESS sustainable because:',
    choices: [
      'The fixed ER prevents currency appreciation',
      'The fixed ER prevents the CB from lowering rates, AND negative growth raises g, widening r-g',
      'Lower g widens the r-g gap, AND the fixed ER prevents expansionary monetary policy',
      'Dollar-denominated debt is always unsustainable'
    ],
    correct: 2,
    explanation: 'Lower g → r-g widens → debt grows faster relative to GDP. Under fixed ER, the CB can\'t lower r to stimulate growth (monetary policy is redundant). Both channels worsen sustainability.',
    source: 'Final 2022 (Argentina)'
  },

  // ===== AD-IA-LR MODEL (Tier 1) =====
  {
    id: 'adia-01',
    topic: 'adia',
    text: 'In the AD-IA-LR model, after a positive demand shock (AD shifts right), the economy in the LONG RUN returns to:',
    choices: [
      'Original output AND original inflation',
      'Higher output AND higher inflation',
      'Original output (potential) BUT higher inflation',
      'Higher output BUT original inflation'
    ],
    correct: 2,
    explanation: 'Short run: AD shifts right → output rises above potential, inflation rises. Medium run: higher inflation shifts IA up → output falls back. Long run: output returns to potential (LR line) but at permanently higher inflation.',
    source: 'PS6, Finals 2022-2025'
  },
  {
    id: 'adia-02',
    topic: 'adia',
    text: 'COVID caused both a negative demand shock (AD left) AND a negative supply shock (potential output fell, LR shifted left). In the AD-IA-LR model, the SHORT-RUN effect on inflation is:',
    choices: [
      'Inflation definitely rises',
      'Inflation definitely falls',
      'Ambiguous — demand shock lowers inflation but supply shock raises it',
      'No change in inflation'
    ],
    correct: 2,
    explanation: 'Negative demand shock → lower inflation. Negative supply shock (LR shifts left) → output gap becomes positive relative to new potential → IA shifts up → higher inflation. Net effect on inflation is ambiguous.',
    source: 'Final 2023, Final 2024'
  },
  {
    id: 'adia-03',
    topic: 'adia',
    text: 'A permanent tax cut in the AD-IA-LR model will, in the long run, result in:',
    choices: [
      'Higher output, same inflation, same interest rate',
      'Same output (potential), higher inflation, higher real interest rate',
      'Higher output, lower inflation, lower interest rate',
      'Same output, same inflation, same interest rate'
    ],
    correct: 1,
    explanation: 'A permanent tax cut shifts IS right → AD right. Short run: higher output + inflation. Long run: output returns to potential, but inflation is permanently higher. Higher inflation → CB sets higher r along the MP curve.',
    source: 'Final 2022'
  },

  // ===== INFLATION & CPI (Tier 2) =====
  {
    id: 'inflation-01',
    topic: 'inflation',
    text: 'Unexpected inflation benefits borrowers and hurts lenders because:',
    choices: [
      'Nominal interest rates rise immediately',
      'The real value of fixed nominal debt decreases',
      'Borrowers can renegotiate loan terms',
      'Lenders must pay higher taxes on interest income'
    ],
    correct: 1,
    explanation: 'With fixed nominal debt, unexpected inflation erodes the real value of what borrowers owe. Lenders receive repayment in dollars that buy less. This is a wealth transfer from lenders (creditors) to borrowers (debtors).',
    source: 'PS1, Final 2023'
  },
  {
    id: 'inflation-02',
    topic: 'inflation',
    text: 'The Fisher equation states that the real interest rate (r) equals:',
    choices: [
      'Nominal rate (i) + inflation (π)',
      'Nominal rate (i) − inflation (π)',
      'Inflation (π) − nominal rate (i)',
      'Nominal rate (i) × (1 + π)'
    ],
    correct: 1,
    explanation: 'Fisher equation: r = i − π. The real interest rate is the nominal rate minus inflation. This is used throughout IS-MP and debt sustainability analysis.',
    source: 'Final 2023, core framework'
  },
  {
    id: 'inflation-03',
    topic: 'inflation',
    text: 'Turkey under Erdogan pursued unorthodox monetary policy by LOWERING interest rates to fight inflation. The result was:',
    choices: [
      'Inflation fell as Erdogan predicted',
      'Inflation stayed stable',
      'Inflation soared to ~80%, devastating purchasing power',
      'Deflation, as the economy contracted'
    ],
    correct: 2,
    explanation: 'Erdogan\'s low-rate policy caused inflation to spike to ~80%. High inflation shortened business horizons, distorted price signals, and was deeply regressive — more than 1/3 of Turks couldn\'t meet basic needs.',
    source: 'Lessons from Turkey reading'
  },

  // ===== QTM (Tier 2) =====
  {
    id: 'qtm-01',
    topic: 'qtm',
    text: 'The Quantity Theory of Money (MV = PY) implies that the inflation rate approximately equals:',
    choices: [
      'Money growth + velocity growth − output growth',
      'Money growth − velocity growth + output growth',
      'Money growth − velocity growth − output growth',
      'Money growth + velocity growth + output growth'
    ],
    correct: 0,
    explanation: 'From MV = PY in growth rates: g(M) + g(V) = π + g(Y). Solving: π = g(M) + g(V) − g(Y). If velocity is constant (g(V)=0), then π = g(M) − g(Y).',
    source: 'Finals 2023-2025'
  },
  {
    id: 'qtm-02',
    topic: 'qtm',
    text: 'Money supply grows 10%, velocity is constant, real output grows 3%. Using QTM, inflation is approximately:',
    choices: [
      '3%',
      '7%',
      '10%',
      '13%'
    ],
    correct: 1,
    explanation: 'π = g(M) + g(V) − g(Y) = 10% + 0% − 3% = 7%.',
    source: 'Final 2022'
  },

  // ===== GROWTH & TFP (Tier 2) =====
  {
    id: 'growth-01',
    topic: 'growth',
    text: 'In the Cobb-Douglas production function Y = AK^α L^(1-α), per capita output growth can be decomposed as:',
    choices: [
      'g_y = g_A + α × g_k (TFP growth + capital deepening)',
      'g_y = g_A + g_k + g_L',
      'g_y = α × g_A + (1-α) × g_k',
      'g_y = g_A × g_k'
    ],
    correct: 0,
    explanation: 'Per capita growth accounting: g_y = g_A + α × g_k, where g_A is TFP growth and g_k is per capita capital growth. TFP (A) captures technology, efficiency, and talent allocation.',
    source: 'PS3'
  },
  {
    id: 'growth-02',
    topic: 'growth',
    text: 'Capital misallocation (e.g., lending to politically connected firms rather than productive ones) reduces growth primarily through:',
    choices: [
      'Lower capital accumulation (K)',
      'Lower labor supply (L)',
      'Lower Total Factor Productivity (TFP / A)',
      'Higher depreciation'
    ],
    correct: 2,
    explanation: 'Misallocation doesn\'t reduce the amount of capital — it reduces how productively capital is used. This shows up as lower TFP (A), the efficiency term in the production function.',
    source: 'PS3, Final 2023'
  },

  // ===== FISCAL MULTIPLIERS (Tier 2) =====
  {
    id: 'multiplier-01',
    topic: 'multiplier',
    text: 'The simple Keynesian fiscal multiplier is 1/(1-MPC). If MPC = 0.75, the multiplier is:',
    choices: [
      '2',
      '3',
      '4',
      '5'
    ],
    correct: 2,
    explanation: '1/(1-0.75) = 1/0.25 = 4. Each dollar of government spending generates $4 of output through the multiplier process.',
    source: 'Final 2023'
  },
  {
    id: 'multiplier-02',
    topic: 'multiplier',
    text: 'The CARES Act stimulus checks study (Coibion et al.) found that households:',
    choices: [
      'Spent nearly all of the $1,200 checks',
      'Spent about 42%, saved 27%, and used 31% to pay debt',
      'Saved nearly all of the checks',
      'Spent 80% within the first month'
    ],
    correct: 1,
    explanation: 'Only 42% of the $1,200 CARES Act checks were spent, 27% saved, 31% used to repay debt. Poorer households had a higher MPC (spent more). 30% spent the entire check; 40% spent nothing.',
    source: 'Stimulus cheques reading, PS5'
  },
  {
    id: 'multiplier-03',
    topic: 'multiplier',
    text: 'Blanchard & Leigh found that during the post-2008 crisis, fiscal multipliers were:',
    choices: [
      'Close to zero, validating austerity policies',
      'About 0.5, as policymakers had assumed',
      'Substantially above 1, meaning austerity was more contractionary than expected',
      'Negative, meaning spending cuts boosted growth'
    ],
    correct: 2,
    explanation: 'Blanchard & Leigh found multipliers were "substantially above 1" during the crisis, much higher than the 0.5 assumed by forecasters. This meant austerity programs caused deeper recessions than predicted.',
    source: 'Multiplier maths reading'
  },

  // ===== GDP ACCOUNTING (Tier 2) =====
  {
    id: 'gdp-01',
    topic: 'gdp',
    text: 'A car is produced in Q4 2024 but sold in Q1 2025. When does it count in GDP?',
    choices: [
      'Q1 2025, when the sale occurs',
      'Q4 2024 as inventory investment; then in Q1 2025, inventory falls and consumption rises (net zero change in Q1)',
      'Split equally across both quarters',
      'Q4 2024 as consumption'
    ],
    correct: 1,
    explanation: 'GDP measures production, not sales. In Q4 2024, the car enters GDP as inventory investment (I). In Q1 2025, the sale is consumption (+C) but inventory falls (−I), so Q1 GDP nets to zero from this car.',
    source: 'Finals 2022-2023'
  },

  // ===== MONEY SUPPLY (Tier 3) =====
  {
    id: 'money-01',
    topic: 'money',
    text: 'Which of the following DESTROYS M1 money supply?',
    choices: [
      'The Fed buys Treasury bonds from a bank',
      'You transfer money from checking to savings',
      'You use cash to pay off your credit card bill at the bank',
      'A bank makes a new loan'
    ],
    correct: 2,
    explanation: 'Paying off a credit card at the bank: cash (part of M1) goes to the bank and is removed from circulation. The credit card balance was never part of M1 (it\'s a liability, not money). Net: M1 falls. Burning cash also destroys M1.',
    source: 'Final 2022'
  },

  // ===== ENVIRONMENT & CARBON (Tier 2) =====
  {
    id: 'environment-01',
    topic: 'environment',
    text: 'A Carbon Border Adjustment Mechanism (CBAM) is designed to:',
    choices: [
      'Subsidize domestic clean energy production',
      'Tax imports based on their carbon content, preventing carbon leakage',
      'Cap total carbon emissions within a country',
      'Replace domestic carbon taxes entirely'
    ],
    correct: 1,
    explanation: 'CBAM taxes imports based on carbon content, ensuring foreign producers face similar carbon costs as domestic ones. This prevents "carbon leakage" — companies moving production to countries without carbon pricing.',
    source: 'Finals 2024-2025'
  },

  // ===== GENDER WAGE GAP (Tier 3) =====
  {
    id: 'gender-01',
    topic: 'gender',
    text: 'Research on the gender wage gap finds that the largest contributor in high-income countries today is:',
    choices: [
      'Differences in education levels',
      'Explicit pay discrimination for the same job',
      'Differences in hours worked and career interruptions (especially around parenthood)',
      'Occupational segregation into lower-paying fields'
    ],
    correct: 2,
    explanation: 'Modern research (including Claudia Goldin\'s Nobel-winning work) shows the biggest factor is the "motherhood penalty" — differences in hours, flexibility, and career interruptions around childbearing, not outright discrimination or education gaps.',
    source: 'Finals 2022-2023'
  },

  // ===== SAVINGS-INVESTMENT (Tier 2) =====
  {
    id: 'savings-01',
    topic: 'savings',
    text: 'An aging population tends to push the equilibrium real interest rate down because:',
    choices: [
      'Older people invest more aggressively',
      'Retirees save more for precautionary reasons, increasing savings supply',
      'Slower labor force growth reduces investment demand more than it reduces savings',
      'Central banks lower rates to help retirees'
    ],
    correct: 2,
    explanation: 'Aging → slower labor force growth → less need for capital investment (demand for loanable funds shifts left more than supply). This pushes the equilibrium real interest rate down.',
    source: 'Final 2022, PS1'
  },

  // ===== QE/QT (Tier 2) =====
  {
    id: 'qeqt-01',
    topic: 'qeqt',
    text: 'When the Fed conducts Quantitative Tightening (QT), it:',
    choices: [
      'Buys Treasury bonds to inject reserves into the banking system',
      'Sells Treasury bonds (or lets them mature), draining reserves from the banking system',
      'Raises the reserve requirement ratio',
      'Lowers the interest on excess reserves (IOER)'
    ],
    correct: 1,
    explanation: 'QT is the reverse of QE. The Fed lets bonds mature or sells them, draining reserves. This tightens financial conditions. The Fed also raises IORB and can raise reserve requirements as additional tightening tools.',
    source: 'PS2, Final 2022'
  },

  // ===== FINANCIAL CRISIS (Articles) =====
  {
    id: 'articles-01',
    topic: 'articles',
    text: 'The 2008 financial crisis was triggered primarily by:',
    choices: [
      'A stock market crash driven by tech overvaluation',
      'Sovereign debt defaults in Europe',
      'The collapse of subprime mortgage-backed securities and excessive leverage in the financial system',
      'A sudden spike in oil prices'
    ],
    correct: 2,
    explanation: 'The crisis originated from subprime mortgages repackaged into CDOs, enabled by ratings agency failures and excessive leverage. When housing prices fell, the entire chain collapsed, culminating in Lehman Brothers\' failure.',
    source: 'Crash course reading'
  },
  {
    id: 'articles-02',
    topic: 'articles',
    text: 'The Greek debt crisis revealed that Greece had hidden its true deficit, which reached what level as a share of GDP?',
    choices: [
      '5.2%',
      '8.7%',
      '15.6%',
      '22.3%'
    ],
    correct: 2,
    explanation: 'Greece\'s deficit reached 15.6% of GDP in 2011, far above the Eurozone\'s Stability and Growth Pact limit of 3%. Previous governments had hidden the true deficit levels.',
    source: 'Greek Debt Crisis reading'
  },

  // ===== READING-BASED QUESTIONS: STABLECOINS & DIGITAL MONEY =====
  {
    id: 'articles-03',
    topic: 'money',
    text: 'The GENIUS Act (2025) regulates stablecoins by requiring issuers to:',
    choices: [
      'Hold reserves only in Bitcoin and other crypto',
      'Maintain 1:1 reserves in safe, liquid assets like Treasury bills',
      'Register as commercial banks with the Fed',
      'Limit total stablecoin issuance to $100 billion'
    ],
    correct: 1,
    explanation: 'The GENIUS Act requires stablecoin issuers to hold 1:1 reserves in safe liquid assets (like T-bills), undergo regular audits, and meet AML/KYC requirements. Critics argue this is still insufficient as it creates a form of shadow banking.',
    source: 'Stablecoins (Tirole) reading'
  },
  {
    id: 'articles-04',
    topic: 'money',
    text: 'Jean Tirole argues stablecoins function as a form of "shadow banking" because:',
    choices: [
      'They are used primarily for tax evasion',
      'They perform bank-like maturity transformation without bank-like regulation',
      'They are backed by gold reserves',
      'They only operate in developing countries'
    ],
    correct: 1,
    explanation: 'Tirole argues stablecoins replicate narrow banking (taking deposits, investing in safe assets) but without FDIC insurance, Fed discount window access, or proper prudential regulation. This makes them vulnerable to runs.',
    source: 'Stablecoins (Tirole) reading'
  },
  {
    id: 'articles-05',
    topic: 'money',
    text: 'TerraUSD (UST) collapsed in 2022 because its peg was maintained by:',
    choices: [
      'A 1:1 reserve of US dollars in a bank account',
      'An algorithmic mechanism backed by its sister token Luna, creating a death spiral',
      'Collateral in Treasury bonds that lost value',
      'A government guarantee from South Korea'
    ],
    correct: 1,
    explanation: 'TerraUSD was an "algorithmic" stablecoin whose peg depended on arbitrage with Luna. When confidence broke, both tokens collapsed in a death spiral, destroying ~$40 billion in value — illustrating the fragility of unbacked pegs.',
    source: 'Stablecoins (Tirole) reading'
  },
  {
    id: 'articles-06',
    topic: 'money',
    text: 'When a private entity issues stablecoins backed by Treasury bills, the "seigniorage" (profit from money creation) accrues to:',
    choices: [
      'The US government exclusively',
      'The stablecoin holder (via interest)',
      'The private issuer, not the government — privatizing a traditional public revenue source',
      'No one — stablecoins earn zero interest by definition'
    ],
    correct: 2,
    explanation: 'Seigniorage is the profit from creating money (interest on reserves minus cost of issuance). With stablecoins, this flows to Tether/Circle rather than the government. Tirole argues this privatizes a public good.',
    source: 'Stablecoins (Tirole) reading'
  },

  // ===== READING-BASED: CHINA DEFLATION & INNOVATION =====
  {
    id: 'articles-07',
    topic: 'inflation',
    text: 'China experienced consumer price DEFLATION in late 2024-2025 primarily driven by:',
    choices: [
      'A sudden collapse in energy prices',
      'Property market slowdown, industrial overcapacity, and weak consumer demand',
      'Government-imposed price controls on all goods',
      'A sharp appreciation of the yuan'
    ],
    correct: 1,
    explanation: 'China\'s CPI fell -0.3% with PPI negative for 3 straight years. The property bust destroyed household wealth (70% in real estate), while massive industrial subsidies created overcapacity that depressed prices.',
    source: 'China consumer prices reading'
  },
  {
    id: 'articles-08',
    topic: 'growth',
    text: 'China\'s "innovation paradox" refers to the fact that despite leading in 57 of 64 critical technologies, China\'s:',
    choices: [
      'GDP growth has accelerated beyond expectations',
      'Total Factor Productivity (TFP) growth has slowed or turned negative',
      'Labor force continues to grow rapidly',
      'Trade surplus has disappeared'
    ],
    correct: 1,
    explanation: 'Despite impressive technological output (patents, papers, tech leadership), China\'s TFP has declined. This suggests subsidies may be directing resources to state-favored sectors rather than where they\'re most productive — a classic misallocation problem.',
    source: 'China innovation paradox reading'
  },
  {
    id: 'articles-09',
    topic: 'growth',
    text: 'China has deployed over 7,500 industrial subsidies since 2009. Economists worry this:',
    choices: [
      'Boosts TFP by picking winners',
      'Creates misallocation — resources flow to politically favored sectors rather than most productive uses',
      'Has no measurable effect on productivity',
      'Only affects the agricultural sector'
    ],
    correct: 1,
    explanation: 'Massive subsidies distort market signals, directing capital to state-preferred sectors. This capital misallocation reduces TFP even as individual technologies advance — explaining the paradox of tech progress with declining productivity.',
    source: 'China innovation paradox reading'
  },

  // ===== READING-BASED: US FISCAL POLICY & DEBT =====
  {
    id: 'debt-03',
    topic: 'debt',
    text: 'The CBO projected in 2025 that US federal debt would reach what share of GDP by 2036 under current policies?',
    choices: [
      '85% of GDP',
      '100% of GDP',
      '120% of GDP',
      '150% of GDP'
    ],
    correct: 2,
    explanation: 'CBO projected debt rising from 101% of GDP to 108% by 2030 and 120% by 2036. Trump\'s "One Big Beautiful Bill" would add ~$4.7 trillion in tax cuts, partially offset by ~$3 trillion in tariff revenue.',
    source: 'Trump $1.4tn deficit reading'
  },
  {
    id: 'debt-04',
    topic: 'debt',
    text: 'Net interest payments on US federal debt in FY2025 were projected at approximately:',
    choices: [
      '$350 billion (2% of GDP)',
      '$500 billion (2.5% of GDP)',
      '$950 billion (3.2% of GDP)',
      '$1.4 trillion (5% of GDP)'
    ],
    correct: 2,
    explanation: 'Net interest hit ~$950 billion in FY2025 (~3.2% of GDP), exceeding the defense budget. This illustrates the debt sustainability concern: when r > g, interest payments crowd out other spending.',
    source: 'Trump $1.4tn deficit reading'
  },

  // ===== READING-BASED: AI & AUTOMATION =====
  {
    id: 'skillbias-01',
    topic: 'skillbias',
    text: 'Daron Acemoglu (MIT) estimated that AI will be able to automate what share of workplace tasks within 10 years?',
    choices: [
      'About 4.6% of tasks',
      'About 25% of tasks',
      'About 50% of tasks',
      'About 75% of tasks'
    ],
    correct: 0,
    explanation: 'Acemoglu estimated only 4.6% of tasks are cost-effective to automate with AI in 10 years, yielding TFP gains of just 0.53% — far below hype. Benefits would be skewed to top earners and capital owners.',
    source: 'Acemoglu AI Hype reading'
  },
  {
    id: 'skillbias-02',
    topic: 'skillbias',
    text: 'The "new view" on automation (from Japanese and Finnish evidence) suggests that robots in factories may:',
    choices: [
      'Always eliminate jobs on net',
      'Actually INCREASE employment at the firm level by boosting productivity and demand',
      'Only replace managers, not line workers',
      'Have no measurable effect on employment'
    ],
    correct: 1,
    explanation: 'Contrary to fears, evidence from Japan and Finland shows automation can increase firm-level employment. Robots boost productivity → lower costs → higher demand → firms expand and hire. The "new view" challenges the displacement narrative.',
    source: 'Economists revising views on robots reading'
  },
  {
    id: 'skillbias-03',
    topic: 'skillbias',
    text: 'Acemoglu argues that the biggest risk from AI is not mass unemployment but rather:',
    choices: [
      'Skynet-style artificial general intelligence',
      'Income and wealth inequality — benefits skewed to capital owners and top earners',
      'Environmental damage from data centers',
      'Government censorship of AI outputs'
    ],
    correct: 1,
    explanation: 'Acemoglu\'s concern is distributional: AI gains flow disproportionately to capital owners, tech companies, and high-skilled workers, exacerbating inequality even if total GDP grows.',
    source: 'Acemoglu AI Hype reading'
  },

  // ===== READING-BASED: LABOR MARKET =====
  {
    id: 'labor-05',
    topic: 'labor',
    text: 'The Sahm Rule recession indicator triggers when the 3-month moving average of unemployment rises by how much from its 12-month low?',
    choices: [
      '0.25 percentage points',
      '0.50 percentage points',
      '0.75 percentage points',
      '1.00 percentage points'
    ],
    correct: 1,
    explanation: 'The Sahm Rule triggers when the 3-month average unemployment rate rises ≥0.50pp above its low from the previous 12 months. When triggered in 2024, it was a false alarm due to labor force expansion, not layoffs.',
    source: 'Pain at edge of labor market reading'
  },
  {
    id: 'labor-06',
    topic: 'labor',
    text: 'The term "no-hire, no-fire economy" describes a labor market where:',
    choices: [
      'Government bans all layoffs',
      'Firms hoard existing workers but avoid new hiring, concentrating pain on marginal workers',
      'Automation has eliminated all hiring decisions',
      'Unions have frozen all employment changes'
    ],
    correct: 1,
    explanation: 'In 2024-2025, firms retained existing staff but drastically cut new hiring. This meant headline unemployment looked okay, but those at the margins (recent grads, low-tenure workers) faced severe difficulty finding jobs.',
    source: 'Pain at edge of labor market reading'
  },
  {
    id: 'labor-07',
    topic: 'labor',
    text: 'Claudia Goldin won the 2023 Nobel Prize in Economics for her research on:',
    choices: [
      'Optimal taxation theory',
      'International trade and comparative advantage',
      'Gender in the labor market, especially the "motherhood penalty"',
      'Behavioral economics and nudge theory'
    ],
    correct: 2,
    explanation: 'Goldin\'s research revolutionized understanding of gender inequality in the labor market. Her key insight: the modern gender wage gap is driven primarily by the "motherhood penalty" — career interruptions and demands for temporal flexibility around parenthood.',
    source: 'Why Claudia Goldin won the Nobel reading'
  },
  {
    id: 'labor-08',
    topic: 'labor',
    text: 'European labor markets differ from the US in that approximately 1 in 4 Europeans have been with their employer for:',
    choices: [
      'More than 5 years',
      'More than 10 years',
      'More than 20 years',
      'Their entire career'
    ],
    correct: 2,
    explanation: 'One in four Europeans has been with the same employer 20+ years, compared to just 1 in 10 Americans. This rigidity stems from high firing costs, tenure-related benefits, and collective bargaining tied to firm tenure.',
    source: 'Why European workers need to switch jobs reading'
  },
  {
    id: 'labor-09',
    topic: 'labor',
    text: 'Research by Schoefer and others suggests European labor market rigidity harms growth because:',
    choices: [
      'Workers are paid too much',
      'Low job-switching reduces skill matching, innovation, and wage growth',
      'European workers are less educated than American workers',
      'Labor taxes are too low'
    ],
    correct: 1,
    explanation: 'Job switching helps match workers to their best-fit roles, spreads knowledge across firms, and drives innovation. European rigidity (high firing costs, non-portable pensions) suppresses this dynamism. Data shows higher job-switching rates correlate with higher lifetime wage growth.',
    source: 'Why European workers need to switch jobs reading'
  },

  // ===== READING-BASED: MONETARY POLICY & CENTRAL BANKS =====
  {
    id: 'qeqt-02',
    topic: 'qeqt',
    text: 'The Bank of Japan raised its policy rate to 0.75% in 2025, notable because:',
    choices: [
      'It was the first rate hike in Japanese history',
      'It was the highest rate in over 30 years, marking Japan\'s exit from decades of ultralow rates',
      'It matched the US federal funds rate',
      'It triggered immediate deflation'
    ],
    correct: 1,
    explanation: 'Japan had maintained near-zero or negative rates for decades (inventing ZIRP, NIRP, QE, and yield curve control). The 0.75% rate was a 30-year high, driven by finally achieving sustained inflation above 2%.',
    source: 'BOJ Raised Rates reading'
  },
  {
    id: 'qeqt-03',
    topic: 'qeqt',
    text: 'The "yen carry trade" involves:',
    choices: [
      'Buying yen when the exchange rate is favorable',
      'Borrowing in low-yield yen and investing in higher-yield foreign assets',
      'The BOJ buying US Treasuries',
      'Japanese firms exporting at favorable exchange rates'
    ],
    correct: 1,
    explanation: 'Investors borrow in yen (low interest rates) and invest in higher-yielding assets (like US Treasuries). When the BOJ raises rates, this trade unwinds — investors sell foreign assets and buy yen, potentially causing market disruption.',
    source: 'BOJ Raised Rates reading, Weak yen reading'
  },
  {
    id: 'qeqt-04',
    topic: 'qeqt',
    text: 'The Fed\'s balance sheet peaked at approximately $9 trillion in 2022 due to QE. By 2025, Quantitative Tightening had reduced it to about:',
    choices: [
      '$4 trillion',
      '$5.5 trillion',
      '$6.6 trillion',
      '$8 trillion'
    ],
    correct: 2,
    explanation: 'The Fed\'s balance sheet fell from $9T peak to ~$6.6T through QT (letting bonds mature without replacement). The concern is draining too many reserves — the September 2019 repo market spike happened when QT went too far.',
    source: 'Fed $6.6T Portfolio Runoff reading'
  },
  {
    id: 'qeqt-05',
    topic: 'qeqt',
    text: 'The September 2019 repo market crisis was caused by:',
    choices: [
      'A stock market crash',
      'The Fed draining too many reserves via QT, leaving banks short of liquidity',
      'A foreign government selling all its Treasury holdings',
      'Hyperinflation fears'
    ],
    correct: 1,
    explanation: 'In September 2019, repo rates spiked to 10% because QT had drained reserves below the level banks needed. The Fed had to intervene with emergency lending. This precedent made the Fed cautious about QT pace in 2024-2025.',
    source: 'Fed $6.6T Portfolio Runoff reading'
  },
  {
    id: 'articles-08b',
    topic: 'articles',
    text: 'Political pressure on central banks to lower interest rates is inflationary because:',
    choices: [
      'Politicians always prefer higher taxes',
      'It undermines CB credibility → inflation expectations de-anchor → self-fulfilling inflation',
      'Lower rates always cause hyperinflation',
      'It forces the CB to print money directly'
    ],
    correct: 1,
    explanation: 'CB credibility anchors inflation expectations. If markets believe the CB will cave to political pressure, expected inflation rises → workers demand higher wages → firms raise prices → actual inflation rises. The Taylor Principle (raise rates by more than inflation rises) requires credible independence.',
    source: 'Trump interest-rate crusade reading'
  },
  {
    id: 'articles-09b',
    topic: 'articles',
    text: 'The Taylor Principle requires that when inflation rises by 1 percentage point, the central bank should raise the nominal interest rate by:',
    choices: [
      'Exactly 1 percentage point (matching inflation)',
      'More than 1 percentage point (so the real rate rises)',
      'Less than 1 percentage point (to avoid recession)',
      '0 percentage points (rates should stay fixed)'
    ],
    correct: 1,
    explanation: 'The Taylor Principle says the CB must raise the nominal rate by MORE than the increase in inflation so the real rate (r = i - π) actually rises. This tightens conditions and fights inflation. Raising by less than 1pp means real rates fall, accommodating inflation.',
    source: 'Trump interest-rate crusade reading'
  },

  // ===== READING-BASED: TRADE & TARIFFS =====
  {
    id: 'tariff-05',
    topic: 'tariff',
    text: 'Despite aggressive US tariffs in 2024-2025, the US trade deficit:',
    choices: [
      'Shrank dramatically as intended',
      'Reached a record $70.3 billion monthly / ~$901.5 billion annually, barely changing',
      'Turned into a trade surplus',
      'Shrank only with China but grew with other countries'
    ],
    correct: 1,
    explanation: 'The US trade deficit hit record highs despite tariffs — $70.3B monthly and $4.334T in annual imports. Tariffs raised prices but didn\'t significantly reduce import volumes, partly because the strong dollar offset tariff effects.',
    source: 'US Trade Deficit $70.3B reading'
  },
  {
    id: 'tariff-06',
    topic: 'tariff',
    text: 'US manufacturing employment in 2024-2025, despite tariff protection, had:',
    choices: [
      'Grown by 500,000+ jobs',
      'Remained roughly constant',
      'Lost 200,000+ jobs, as downstream industries were hurt by higher input costs',
      'Grown only in the steel and aluminum sectors'
    ],
    correct: 2,
    explanation: 'Tariffs raised input costs for US manufacturers who use imported materials (steel, aluminum, components). These downstream firms lost competitiveness and cut jobs. The net effect was 200,000+ manufacturing jobs lost, not gained.',
    source: 'US Manufacturing in Retreat reading'
  },

  // ===== READING-BASED: EXCHANGE RATES =====
  {
    id: 'exchange-04',
    topic: 'exchange',
    text: 'The Japanese yen traded at ~155 per dollar in 2025 while PPP fair value was ~125. This gap was primarily explained by:',
    choices: [
      'Japan\'s high inflation rate',
      'The large yield differential between US and Japanese interest rates',
      'Japan\'s trade surplus',
      'Capital controls imposed by the BOJ'
    ],
    correct: 1,
    explanation: 'With US rates at ~5% and Japanese rates near 0-0.75%, the carry trade pushed yen far below PPP fair value. Investors borrowed in low-yield yen and invested in high-yield dollar assets, depressing the yen.',
    source: 'Weak Japanese yen reading'
  },
  {
    id: 'exchange-05',
    topic: 'exchange',
    text: 'Japan invented several unconventional monetary policy tools. Which of the following was NOT a BOJ innovation?',
    choices: [
      'Zero Interest Rate Policy (ZIRP)',
      'Negative Interest Rate Policy (NIRP)',
      'Yield Curve Control (YCC)',
      'Inflation targeting at 2%'
    ],
    correct: 3,
    explanation: 'Japan invented ZIRP (1999), QE (2001), NIRP (2016), and YCC (2016). Inflation targeting at 2% was originally developed by New Zealand (1990) and adopted by many central banks before Japan adopted it in 2013.',
    source: 'Weak Japanese yen reading'
  },

  // ===== READING-BASED: INFLATION EXPECTATIONS =====
  {
    id: 'inflation-04',
    topic: 'inflation',
    text: 'Research by Yotzov, Bloom et al. found that firms form inflation expectations primarily from:',
    choices: [
      'Their own real-time cost data and customer behavior',
      'Media coverage and backward-looking official CPI releases',
      'Central bank forward guidance',
      'Academic economic forecasts'
    ],
    correct: 1,
    explanation: 'Despite having real-time data on their own costs, firms are heavily swayed by media coverage of inflation and official CPI releases. A 1pp unexpected rise in CPI produced a 0.7pp rise in firm inflation expectations.',
    source: 'Why companies get inflation wrong reading'
  },
  {
    id: 'inflation-05',
    topic: 'inflation',
    text: 'A Cleveland Fed survey found that less than what percentage of chief executives could correctly state the Fed\'s 2% inflation target?',
    choices: [
      '10%',
      '20%',
      '50%',
      '80%'
    ],
    correct: 1,
    explanation: 'Less than 20% of chief executives could name the Fed\'s 2% inflation target. Two-thirds wouldn\'t even guess. This "systematic inattention" to monetary policy means firms rely on media rather than official data, making expectations volatile.',
    source: 'Why companies get inflation wrong reading'
  },
  {
    id: 'inflation-06',
    topic: 'inflation',
    text: 'Media coverage of inflation introduces an asymmetric bias because:',
    choices: [
      'Media always underreports inflation',
      'Rising inflation gets more coverage than falling inflation ("if it bleeds, it leads")',
      'Media only reports CPI, ignoring PPI',
      'Journalists are systematically trained in economics'
    ],
    correct: 1,
    explanation: 'Media covers rising prices more aggressively than falling prices. Between 2019-2022, UK inflation rose 6x and media coverage rose 6x. But when inflation fell, media coverage dropped faster — creating an upward bias in firm expectations.',
    source: 'Why companies get inflation wrong reading'
  },
  {
    id: 'inflation-07',
    topic: 'inflation',
    text: 'The "last mile" problem of disinflation (getting from ~3% to 2% inflation) is harder than expected partly because:',
    choices: [
      'Central banks lose all tools below 3%',
      'Firm inflation expectations remain elevated due to media bias, keeping prices sticky',
      'Consumers prefer higher inflation',
      'Government spending always accelerates at low inflation'
    ],
    correct: 1,
    explanation: 'Even as inflation falls, media-driven expectations keep firms pricing above target. Higher inflation readings pull expectations up more than lower readings pull them down (asymmetric response), making the last mile of disinflation persistently difficult.',
    source: 'Why companies get inflation wrong reading'
  },

  // ===== READING-BASED: HYPERINFLATION =====
  {
    id: 'inflation-08',
    topic: 'inflation',
    text: 'Venezuela and Zimbabwe both experienced hyperinflation. A common policy mistake in both countries was:',
    choices: [
      'Keeping interest rates too high',
      'Imposing price controls, which caused shortages, followed by printing money to cover deficits',
      'Allowing too much foreign investment',
      'Joining a currency union'
    ],
    correct: 1,
    explanation: 'Both countries imposed price controls (causing shortages and black markets) and funded fiscal deficits by printing money. This validates the Quantity Theory: excessive money growth → inflation → price controls → shortages → more money printing → hyperinflation spiral.',
    source: 'Spot the difference (Venezuela/Zimbabwe) reading'
  },
  {
    id: 'qtm-03',
    topic: 'qtm',
    text: 'Venezuela\'s experience validates the Quantity Theory of Money because:',
    choices: [
      'Velocity was perfectly stable',
      'Massive money printing to fund government deficits led directly to hyperinflation',
      'Venezuela had low money growth but high inflation',
      'The bolivar appreciated despite money printing'
    ],
    correct: 1,
    explanation: 'Venezuela printed money to cover massive fiscal deficits (from oil price collapse and mismanagement). MV = PY: with rapid growth in M and stagnant Y, prices (P) had to rise dramatically — textbook QTM in action.',
    source: 'Spot the difference (Venezuela/Zimbabwe) reading'
  },

  // ===== READING-BASED: YIELD CURVE & FINANCIAL MARKETS =====
  {
    id: 'articles-10',
    topic: 'articles',
    text: 'An inverted yield curve (short-term rates higher than long-term rates) signals:',
    choices: [
      'The economy is overheating and needs higher rates',
      'Markets expect future rate CUTS, typically associated with expected recession',
      'Banks are making record profits',
      'Inflation will rise sharply'
    ],
    correct: 1,
    explanation: 'When short rates exceed long rates, it means markets expect the Fed will need to cut rates in the future — usually because of economic weakness. The 2023-2024 inversion lasted a record ~400 sessions.',
    source: 'Wall Street Recession Indicator reading'
  },
  {
    id: 'articles-11',
    topic: 'articles',
    text: 'The Reverse Repo Facility (RRP) balance fell from ~$2.5 trillion (2022) to near zero by 2025. This matters because:',
    choices: [
      'It means inflation is rising',
      'It indicates the "buffer" absorbing QT is nearly exhausted, making further reserve drainage riskier',
      'It proves QE was a failure',
      'It means banks have too much cash'
    ],
    correct: 1,
    explanation: 'Money market funds parked excess cash in the RRP. As QT drained reserves, funds shifted from RRP to T-bills. With RRP near zero, further QT directly drains bank reserves — risking a 2019-style repo crisis.',
    source: 'Fed $6.6T Portfolio Runoff reading'
  },

  // ===== READING-BASED: LABOR MARKETS (ADDITIONAL) =====
  {
    id: 'labor-10',
    topic: 'labor',
    text: 'In a "no-hire, no-fire" labor market, which group is hurt most?',
    choices: [
      'Existing employees with long tenure',
      'Senior executives',
      'Marginal workers: recent graduates, minorities, and those with employment gaps',
      'Retired workers collecting pensions'
    ],
    correct: 2,
    explanation: 'When firms retain existing staff but freeze hiring, the pain concentrates on those trying to ENTER the workforce — recent graduates, career changers, and workers with less experience or employment gaps.',
    source: 'Pain at edge of labor market reading'
  },
  {
    id: 'labor-11',
    topic: 'labor',
    text: 'German workers who could earn 10% higher wages by switching jobs expected to receive only what raise on average if they moved?',
    choices: [
      '1%',
      '5%',
      '8%',
      '10%'
    ],
    correct: 0,
    explanation: 'Research by Simon Jäger (Princeton) found German workers dramatically underestimated their outside options — expecting only 1% raises from job switches when they could actually earn 10% more. This information gap suppresses labor mobility.',
    source: 'Why European workers need to switch jobs reading'
  },

  // ===== READING-BASED: CPI MEASUREMENT =====
  {
    id: 'inflation-09',
    topic: 'inflation',
    text: 'The CPI can be distorted by government shutdowns because:',
    choices: [
      'Government workers stop spending',
      'Missing data collection periods cause biased imputation, especially for housing',
      'The government stops printing money',
      'Tax revenue falls, causing deflation'
    ],
    correct: 1,
    explanation: 'During the 2025 government shutdown, BLS couldn\'t collect October rent data. When resumed, imputed values were biased (missing data created a gap in housing inflation measurement). Since shelter is ~36% of CPI, this significantly distorted the headline number.',
    source: 'Inflation Eased to 2.7% reading'
  },
  {
    id: 'inflation-10',
    topic: 'inflation',
    text: 'Core CPI excludes food and energy prices because:',
    choices: [
      'Food and energy aren\'t important to consumers',
      'Food and energy prices are too volatile — they obscure the underlying inflation trend',
      'The government subsidizes food and energy',
      'These categories are measured by a different agency'
    ],
    correct: 1,
    explanation: 'Food and energy prices are driven by supply shocks (weather, geopolitics) that create noise. Core CPI strips these out to reveal the underlying demand-driven inflation trend that monetary policy can actually influence.',
    source: 'Inflation Eased to 2.7% reading'
  },

  // ===== ADDITIONAL EXAM-STYLE QUESTIONS =====
  {
    id: 'ismp-07',
    topic: 'ismp',
    text: 'In an open economy with a FLEXIBLE exchange rate, monetary expansion (MP shifts down) is:',
    choices: [
      'Less effective than in a closed economy',
      'More effective than in a closed economy because the currency depreciates, boosting net exports',
      'Equally effective as in a closed economy',
      'Completely ineffective'
    ],
    correct: 1,
    explanation: 'Under flexible ER: MP down → lower r → currency depreciates → NX rise → IS shifts right → additional output boost. So monetary policy is MORE effective than in a closed economy (opposite of fiscal policy).',
    source: 'PS7, Finals 2022-2025'
  },
  {
    id: 'ismp-08',
    topic: 'ismp',
    text: 'Under a FIXED exchange rate, fiscal expansion is MORE effective than in a closed economy because:',
    choices: [
      'The CB can independently lower rates',
      'The CB MUST lower r to maintain the peg (when IS shifts right → upward pressure on ε → CB lowers r), adding monetary stimulus on top of fiscal stimulus',
      'The exchange rate appreciates, boosting imports',
      'Government spending has a higher multiplier under fixed ER'
    ],
    correct: 1,
    explanation: 'Fiscal expansion → IS right → upward pressure on exchange rate. To maintain the peg, the CB must lower r (buy foreign currency/sell domestic) → MP shifts down. This doubles the stimulus: fiscal + involuntary monetary expansion.',
    source: 'PS7, Finals 2022-2025'
  },
  {
    id: 'exchange-06',
    topic: 'exchange',
    text: 'If the US has a higher risk premium (θ) than other countries, the IRP condition implies the dollar should:',
    choices: [
      'Appreciate to compensate foreign investors',
      'Be at a level where expected appreciation compensates for the risk, meaning the dollar is currently UNDERVALUED relative to its expected future value',
      'Be unaffected — risk premiums don\'t enter IRP',
      'Depreciate indefinitely'
    ],
    correct: 1,
    explanation: 'IRP: investors require r* + θ to hold risky-country assets. If θ is high, the currency must be cheap enough (undervalued) today so that expected future appreciation compensates for the risk.',
    source: 'PS6, IRP framework'
  },
  {
    id: 'tariff-07',
    topic: 'tariff',
    text: 'A small country imposing a tariff will experience all of the following EXCEPT:',
    choices: [
      'Higher domestic price of the tariffed good',
      'A reduction in the world price of the good',
      'Increased domestic production of the tariffed good',
      'Deadweight loss from production and consumption inefficiency'
    ],
    correct: 1,
    explanation: 'A small country is a price taker — its tariff cannot affect the world price. Only a large country (significant share of world demand) can push down the world price. All other options occur under a small-country tariff.',
    source: 'PS8, Finals 2022-2025'
  },
  {
    id: 'adia-04',
    topic: 'adia',
    text: 'A negative supply shock (e.g., oil price spike) in the AD-IA-LR model shifts:',
    choices: [
      'AD to the left',
      'LR (potential output) to the left, causing stagflation',
      'IA down',
      'AD to the right'
    ],
    correct: 1,
    explanation: 'A negative supply shock reduces potential output (LR shifts left). With the same AD, output gap becomes positive → IA shifts up → inflation rises even as output falls. This combination — falling output + rising inflation — is stagflation.',
    source: 'Finals 2022-2025, PS6'
  },
  {
    id: 'adia-05',
    topic: 'adia',
    text: 'If the central bank wants to return inflation to target after a positive demand shock, it should:',
    choices: [
      'Do nothing and wait for IA to adjust',
      'Shift MP up (raise rates) to move AD left, accepting lower output in the short run',
      'Shift MP down to boost output further',
      'Impose price controls'
    ],
    correct: 1,
    explanation: 'After a positive demand shock, inflation is above target. The CB raises r (MP up) → AD shifts left → output falls below potential → IA shifts down → inflation returns to target. This is the "sacrifice ratio" — output loss required to reduce inflation.',
    source: 'Finals 2022-2025'
  },
  {
    id: 'debt-05',
    topic: 'debt',
    text: 'The primary balance is defined as:',
    choices: [
      'Total government revenue minus total government spending',
      'Government revenue minus government spending EXCLUDING interest payments on debt',
      'Interest payments minus government revenue',
      'GDP minus total government debt'
    ],
    correct: 1,
    explanation: 'The primary balance = revenue - non-interest spending. It\'s the budget balance ignoring debt service costs. Debt sustainability requires: primary surplus ≥ (r-g) × debt ratio. A primary surplus means the government earns more than it spends on programs.',
    source: 'Finals 2022-2025, PS8'
  },
  {
    id: 'multiplier-04',
    topic: 'multiplier',
    text: 'The fiscal multiplier is LARGER when:',
    choices: [
      'The economy is at full employment',
      'The economy is in recession with slack (output below potential)',
      'Interest rates are very high',
      'The exchange rate is flexible'
    ],
    correct: 1,
    explanation: 'During recessions: (1) more slack means spending creates real output, not just inflation, (2) monetary policy is often at the zero lower bound (no crowding out), (3) higher MPC among credit-constrained households. Blanchard & Leigh confirmed multipliers were "substantially above 1" during the 2008 crisis.',
    source: 'Multiplier maths reading, PS5'
  },
  {
    id: 'gdp-02',
    topic: 'gdp',
    text: 'Which of the following transactions is NOT counted in GDP?',
    choices: [
      'A new house is built and sold',
      'You buy a used car from a private seller',
      'A lawyer provides legal services',
      'The government builds a new highway'
    ],
    correct: 1,
    explanation: 'GDP measures the production of NEW goods and services. A used car was already counted in GDP when originally produced. The sale is just a transfer of an existing asset. The dealer\'s margin (if any) would count as a service, but the car itself does not.',
    source: 'Finals 2022-2023'
  },
  {
    id: 'gdp-03',
    topic: 'gdp',
    text: 'GDP = C + I + G + NX. If a US consumer buys a $1,000 iPhone assembled in China using US-designed chips, the purchase:',
    choices: [
      'Adds $1,000 to US GDP through consumption',
      'Adds $1,000 to C but subtracts $1,000 from NX (imports), so US GDP impact depends on domestic value-added',
      'Only adds to China\'s GDP',
      'Is counted twice — once in C and once in NX'
    ],
    correct: 1,
    explanation: 'The purchase adds $1,000 to C but the import subtracts $1,000 from NX. The net US GDP contribution equals only the US value-added (design, marketing, retail). China\'s GDP gets the assembly value-added.',
    source: 'Finals 2022-2023'
  },
  {
    id: 'savings-02',
    topic: 'savings',
    text: 'In the savings-investment (loanable funds) framework, a government budget deficit:',
    choices: [
      'Increases national savings',
      'Decreases national savings (government dissaving), pushing up the equilibrium real interest rate',
      'Has no effect on the real interest rate',
      'Increases investment'
    ],
    correct: 1,
    explanation: 'Government deficit = negative public saving. National saving (S = private + public) falls. In the loanable funds market, this shifts savings supply left → equilibrium real interest rate rises → private investment is "crowded out."',
    source: 'PS1, Finals 2022-2023'
  },
  {
    id: 'growth-03',
    topic: 'growth',
    text: 'The Rule of 70 states that the number of years for a variable to double equals approximately:',
    choices: [
      '70 / growth rate (in percent)',
      '70 × growth rate',
      '100 / growth rate',
      'Growth rate / 70'
    ],
    correct: 0,
    explanation: 'Doubling time ≈ 70 / growth rate (%). So 2% growth → doubles in ~35 years; 7% growth → doubles in ~10 years. This makes small differences in growth rates hugely consequential over decades.',
    source: 'PS3'
  },
  {
    id: 'growth-04',
    topic: 'growth',
    text: 'In the Solow model, sustained long-run growth in output per worker comes from:',
    choices: [
      'Capital accumulation alone',
      'Population growth',
      'Technological progress (TFP growth)',
      'Higher savings rates'
    ],
    correct: 2,
    explanation: 'Capital accumulation faces diminishing returns — each additional unit of capital adds less output. Only TFP growth (technology, institutions, efficiency) can sustain long-run per capita growth. Higher savings raise the LEVEL but not the growth rate.',
    source: 'PS3'
  },
  {
    id: 'environment-02',
    topic: 'environment',
    text: 'The economic argument for a carbon tax over command-and-control regulation is:',
    choices: [
      'Carbon taxes raise more revenue',
      'Carbon taxes achieve emissions reductions at lowest total cost by letting the market find the cheapest abatement',
      'Command-and-control is always cheaper',
      'Carbon taxes eliminate all emissions immediately'
    ],
    correct: 1,
    explanation: 'A carbon tax sets a price on emissions and lets firms decide how to reduce them. Firms with low abatement costs cut more; firms with high costs cut less but pay the tax. This market mechanism minimizes total cost compared to uniform mandates.',
    source: 'Finals 2024-2025'
  },
  {
    id: 'gender-02',
    topic: 'gender',
    text: 'Goldin\'s research showed that the gender wage gap within occupations is largest in fields that:',
    choices: [
      'Require the most education',
      'Have the highest physical demands',
      'Disproportionately reward long, inflexible hours (law, finance, consulting)',
      'Are dominated by government employment'
    ],
    correct: 2,
    explanation: 'The gap is largest in fields like finance and law where working 80 hours earns more than double what 40 hours earns (convex returns to hours). Pharmacy, with more linear returns and flexible scheduling, has a much smaller gender gap.',
    source: 'Why Claudia Goldin won the Nobel reading'
  },

  // ===== ADDITIONAL ARTICLES / CROSS-TOPIC =====
  {
    id: 'articles-12',
    topic: 'articles',
    text: 'During the 2024-2025 US labor market, the Sahm Rule was triggered but turned out to be a "false alarm" because:',
    choices: [
      'The data was revised away',
      'Unemployment rose due to labor force EXPANSION (more people looking), not mass layoffs',
      'The rule was changed mid-year',
      'Inflation fell at the same time'
    ],
    correct: 1,
    explanation: 'The Sahm Rule assumes rising unemployment means recession (falling demand). In 2024, unemployment rose because more people entered the labor force (supply expansion), not because of layoffs. The rule\'s signal was misleading.',
    source: 'Pain at edge of labor market reading'
  },
  {
    id: 'articles-13',
    topic: 'articles',
    text: 'Erdogan\'s Turkey provides a case study for why central bank independence matters. His policy of CUTTING rates during high inflation caused:',
    choices: [
      'Inflation to fall from 15% to 5%',
      'The lira to appreciate as foreign capital flooded in',
      'Inflation to spike to ~80% and the lira to collapse, devastating living standards',
      'GDP to grow 10% as cheap money stimulated investment'
    ],
    correct: 2,
    explanation: 'Erdogan fired CB governors who wanted to raise rates and imposed rate cuts. Inflation soared to ~80%, the lira collapsed, and over 1/3 of Turks couldn\'t meet basic needs. A textbook violation of the Taylor Principle.',
    source: 'Lessons from Turkey reading, Trump interest-rate crusade reading'
  },
  {
    id: 'articles-14',
    topic: 'articles',
    text: 'The September 2025 US jobs report showed 119,000 new jobs and 4.4% unemployment, but this data was unreliable because:',
    choices: [
      'The BLS changed its methodology',
      'The government shutdown delayed data collection, leading to lower response rates and missing months',
      'Jobs were only in the government sector',
      'Immigration data was excluded'
    ],
    correct: 1,
    explanation: 'The government shutdown caused BLS to miss October data collection entirely and reduced response rates in surrounding months. Economists warned against reading too much into any single report during this period.',
    source: 'Delayed Data/Strong Hiring reading'
  },
  {
    id: 'qeqt-06',
    topic: 'qeqt',
    text: 'Japan\'s Yield Curve Control (YCC) worked by:',
    choices: [
      'Setting a target range for the 10-year government bond yield and buying/selling bonds to maintain it',
      'Fixing all interest rates at zero',
      'Banning bond trading',
      'Requiring banks to buy government bonds'
    ],
    correct: 0,
    explanation: 'YCC (introduced 2016) targeted the 10-year JGB yield at ~0%, with the BOJ buying unlimited bonds to enforce the cap. This controlled long-term rates directly rather than relying on short-term rate transmission. Japan abandoned YCC in 2024.',
    source: 'Weak Japanese yen reading'
  },
  {
    id: 'exchange-07',
    topic: 'exchange',
    text: 'When the BOJ raises rates, the yen carry trade unwinds. This tends to:',
    choices: [
      'Weaken the yen further',
      'Strengthen the yen as investors sell foreign assets and buy yen to repay loans',
      'Have no effect on exchange rates',
      'Only affect the bond market'
    ],
    correct: 1,
    explanation: 'Carry trade unwind: investors who borrowed yen to buy foreign assets must sell those assets and buy yen to repay. This surge in yen demand strengthens the yen. August 2024 saw a sharp unwind episode that briefly disrupted global markets.',
    source: 'BOJ Raised Rates reading, Weak Japanese yen reading'
  },
  {
    id: 'debt-06',
    topic: 'debt',
    text: 'Why is a country\'s debt-to-GDP ratio more meaningful than absolute debt level?',
    choices: [
      'It adjusts for inflation',
      'It measures the debt burden relative to the economy\'s ability to service it (tax base)',
      'It\'s easier to calculate',
      'It eliminates the effect of exchange rates'
    ],
    correct: 1,
    explanation: 'A $1 trillion debt is manageable for a $25 trillion economy (4% debt/GDP) but unsustainable for a $500 billion economy (200% debt/GDP). The ratio captures repayment capacity. The key dynamic: debt/GDP falls when g > r (economy outgrows interest costs).',
    source: 'Finals 2022-2025, PS8'
  },
  {
    id: 'multiplier-05',
    topic: 'multiplier',
    text: 'Transfer payments (like stimulus checks) have a LOWER multiplier than direct government purchases because:',
    choices: [
      'Transfer payments are not counted in GDP',
      'Recipients save or repay debt with part of the transfer, so MPC < 1 for the first round',
      'Transfer payments cause inflation but no real output',
      'Only wealthy people receive transfers'
    ],
    correct: 1,
    explanation: 'Government purchases (G) directly become GDP in the first round (multiplier ≥ 1). Transfers must first be spent by recipients, but some is saved or used for debt repayment (MPC < 1). CARES Act: only 42% of stimulus checks were spent.',
    source: 'Stimulus cheques reading, PS5'
  },
  {
    id: 'ismp-09',
    topic: 'ismp',
    text: 'What shifts the IS curve to the RIGHT in the IS-MP model?',
    choices: [
      'The central bank raises the interest rate',
      'An increase in government spending, a tax cut, an increase in consumer confidence, or an increase in net exports',
      'An increase in the money supply',
      'A decrease in the price level'
    ],
    correct: 1,
    explanation: 'IS shifts right with any increase in aggregate demand at a given interest rate: higher G, lower T, higher consumer/business confidence, higher NX (e.g., foreign boom or currency depreciation). The CB moves along the IS curve via the MP rate, not shifting it.',
    source: 'PS5-7, core framework'
  },
  {
    id: 'adia-06',
    topic: 'adia',
    text: 'In the AD-IA-LR model, the IA (Inflation Adjustment) line shifts UP when:',
    choices: [
      'Output is below potential (negative output gap)',
      'Output is above potential (positive output gap), putting upward pressure on wages and prices',
      'The central bank lowers interest rates',
      'Government spending falls'
    ],
    correct: 1,
    explanation: 'When output > potential (positive gap), labor and goods markets are tight → wages rise → firms raise prices → inflation increases → IA shifts up. When output < potential, the reverse happens. This is the "self-correcting" mechanism.',
    source: 'PS6, Finals 2022-2025'
  },
  {
    id: 'articles-15',
    topic: 'articles',
    text: 'Policy solutions to improve European labor market dynamism include all EXCEPT:',
    choices: [
      'Making pensions and benefits portable across employers',
      'Extending unemployment benefits to voluntary job switchers',
      'Increasing firing costs to protect existing workers',
      'Limiting furlough schemes to actual crises'
    ],
    correct: 2,
    explanation: 'Higher firing costs are PART OF THE PROBLEM — they discourage both hiring and firing, reducing labor mobility. Solutions include portable benefits, unemployment insurance for quitters, and limiting labor hoarding subsidies (furlough) to genuine crises.',
    source: 'Why European workers need to switch jobs reading'
  },
  {
    id: 'money-02',
    topic: 'money',
    text: 'Which of the following CREATES M1 money supply?',
    choices: [
      'You deposit cash into your checking account',
      'A commercial bank makes a new loan (crediting the borrower\'s checking account)',
      'You transfer money from checking to savings',
      'The government raises taxes'
    ],
    correct: 1,
    explanation: 'When a bank makes a loan, it creates a new deposit in the borrower\'s account — literally creating money. Depositing cash just changes the composition of M1 (less currency, more deposits). Transfers to savings remove from M1.',
    source: 'Final 2022, PS2'
  },
  {
    id: 'qtm-04',
    topic: 'qtm',
    text: 'Zimbabwe ended its hyperinflation in 2009 by:',
    choices: [
      'Raising interest rates to 100%',
      'Abandoning the Zimbabwe dollar and adopting the US dollar and South African rand',
      'Imposing strict price controls',
      'Defaulting on all government debt'
    ],
    correct: 1,
    explanation: 'Zimbabwe abandoned its own currency (which had been printed into worthlessness) and adopted foreign currencies. This removed the government\'s ability to print money, immediately ending the hyperinflation spiral. A dramatic validation of QTM.',
    source: 'Spot the difference (Venezuela/Zimbabwe) reading'
  },
  {
    id: 'tariff-08',
    topic: 'tariff',
    text: 'When a large country imposes a tariff, the "terms of trade" effect refers to:',
    choices: [
      'The improvement in the country\'s trade balance',
      'The reduction in the world price of the imported good, as the large buyer reduces demand',
      'The appreciation of the domestic currency',
      'The increase in domestic production of the tariffed good'
    ],
    correct: 1,
    explanation: 'A large country\'s tariff reduces its import demand enough to push down the world price. The country then buys its remaining imports at a lower price — a terms-of-trade gain. If this gain exceeds the DWL triangles, the country can (controversially) benefit.',
    source: 'PS8, Finals 2022-2025'
  },
  {
    id: 'growth-05',
    topic: 'growth',
    text: 'Acemoglu estimated AI would produce TFP gains of approximately what over the next decade?',
    choices: [
      '0.53%, far below the hype',
      '5%, matching historical tech revolutions',
      '15%, making it the biggest tech revolution ever',
      '25%, fundamentally transforming the economy'
    ],
    correct: 0,
    explanation: 'Acemoglu estimated only 0.53% TFP gain from AI over 10 years — a fraction of the gains from electricity or the internet. His analysis found only 4.6% of tasks are cost-effective to automate, limiting AI\'s macroeconomic impact.',
    source: 'Acemoglu AI Hype reading'
  },
  {
    id: 'inflation-11',
    topic: 'inflation',
    text: 'Self-fulfilling inflation expectations work through the following mechanism:',
    choices: [
      'Consumers buy less → prices fall → deflation',
      'Firms expect inflation → raise prices → workers demand higher wages → costs rise → firms raise prices again',
      'Government prints money in response to expectations',
      'Central bank always validates expectations with rate cuts'
    ],
    correct: 1,
    explanation: 'When firms expect inflation, they preemptively raise prices. Workers see higher prices and demand wage increases. Higher wages raise costs, leading firms to raise prices further. This wage-price spiral makes expectations self-fulfilling — which is why central bank credibility matters so much.',
    source: 'Why companies get inflation wrong reading, Trump interest-rate crusade reading'
  },
  {
    id: 'savings-03',
    topic: 'savings',
    text: 'The "global savings glut" hypothesis (Ben Bernanke) argues that low real interest rates in the 2000s-2020s were caused by:',
    choices: [
      'Central banks keeping rates artificially low',
      'Excessive saving in Asia and oil-exporting countries flooding global capital markets',
      'A shortage of investment opportunities worldwide',
      'Both B and C — excess saving AND weak investment demand pushed rates down'
    ],
    correct: 3,
    explanation: 'Bernanke argued Asian/oil savings flooded global markets (rightward shift in savings supply), while secular stagnation (aging populations, slower tech) reduced investment demand (leftward shift). Both forces pushed equilibrium real rates down.',
    source: 'PS1, savings-investment framework'
  },
  {
    id: 'skillbias-04',
    topic: 'skillbias',
    text: 'Skill-biased technological change (SBTC) predicts that new technologies:',
    choices: [
      'Equally benefit all workers',
      'Increase demand for high-skilled workers relative to low-skilled workers, widening wage inequality',
      'Only eliminate middle-skill jobs',
      'Always reduce total employment'
    ],
    correct: 1,
    explanation: 'SBTC argues technology is complementary to high-skill labor (boosts their productivity) but substitutes for low-skill labor (replaces routine tasks). This increases the skill premium (wage ratio of college to non-college workers), widening inequality.',
    source: 'PS4, Finals 2022-2023'
  },

  // MC — Study Plan Gap-fills
  {
    id: 'mc-m1-burn',
    topic: 'banking',
    text: 'What happens to M1 if someone burns a $100 bill?',
    choices: [
      'M1 decreases by $100',
      'M1 is unchanged — cash just moves between holders',
      'M1 increases because the Fed replaces it',
      'M1 is unchanged because deposits are unaffected'
    ],
    correct: 0,
    explanation: 'Burning cash destroys physical currency in circulation, which is a component of M1. M1 = cash in circulation + demand deposits. Cash is gone, deposits unchanged, so M1 falls by $100.',
    source: 'Study Plan / Topic 18'
  },
  {
    id: 'mc-m1-payoff-cc',
    topic: 'banking',
    text: 'You pay off your $500 credit card bill from your checking account. What happens to M1?',
    choices: [
      'M1 decreases by $500 — your deposits fall',
      'M1 is unchanged because the credit card company deposits the $500',
      'M1 increases because debt is eliminated',
      'M1 is unchanged because credit cards are not part of M1'
    ],
    correct: 0,
    explanation: 'Paying off a credit card bill reduces your demand deposits (checking account balance falls by $500). The credit card balance was never part of M1 — it was credit, not money. Your deposits shrink, so M1 decreases.',
    source: 'Study Plan / Topic 18'
  },
  {
    id: 'mc-new-ai-premium',
    topic: 'skillbias',
    text: 'New AI that replaces college-typical tasks (writing, analysis, coding) would have what effect on the college wage premium?',
    choices: [
      'The premium FALLS — AI substitutes for college skills, reducing demand for college workers relative to non-college workers',
      'The premium RISES — AI always complements college workers',
      'No effect — technology only affects non-college workers',
      'The premium RISES because college workers can use AI better'
    ],
    correct: 0,
    explanation: 'Historical skill-biased tech (spreadsheets, databases) COMPLEMENTED college workers. But new AI that directly replaces college-typical tasks (writing, analysis) SUBSTITUTES for college labor, reducing demand and lowering the college premium. This is different from traditional SBTC.',
    source: 'Study Plan / Topic 15'
  },
  {
    id: 'mc-inverted-yield',
    topic: 'qeqt',
    text: 'An inverted yield curve (short-term rates > long-term rates) signals that:',
    choices: [
      'Markets expect the Fed to CUT rates in the future, i.e. they expect a recession',
      'The economy is booming and rates will rise further',
      'Long-term inflation expectations have risen above short-term expectations',
      'The Fed has lost control of the yield curve'
    ],
    correct: 0,
    explanation: 'A normal yield curve slopes upward (higher long-term rates). When it inverts, markets are pricing in future rate cuts — which the Fed typically does during recessions. Additionally, banks borrow short and lend long, so an inverted curve squeezes bank profits, reducing lending and reinforcing the recession signal.',
    source: 'Study Plan / Topic 12'
  },
  {
    id: 'mc-iorb-floor',
    topic: 'qeqt',
    text: 'In the ample reserves framework (post-2008), IORB (Interest on Reserve Balances) acts as:',
    choices: [
      'A FLOOR on the federal funds rate — banks won\'t lend below what they earn from the Fed',
      'A CEILING on the federal funds rate',
      'The exact target for the federal funds rate',
      'An irrelevant tool since QE ended'
    ],
    correct: 0,
    explanation: 'IORB is the rate the Fed pays banks on reserves held at the Fed. No rational bank would lend to another bank at a rate below what the Fed pays risk-free. So IORB acts as a FLOOR (lower bound) on the federal funds rate. The discount rate acts as the ceiling.',
    source: 'Study Plan / Topic 12'
  },
  {
    id: 'mc-gender-wage-gap',
    topic: 'skillbias',
    text: 'According to the research discussed in class, the majority of the gender wage gap is explained by:',
    choices: [
      'Women working in roles with fewer hours and lower pay per hour (flexibility penalty)',
      'Women choosing different college majors than men',
      'Direct discrimination in hiring and promotion',
      'Differences in negotiation strategies'
    ],
    correct: 0,
    explanation: 'The research (Goldin et al.) shows the majority of the gender wage gap is explained by women working in roles with fewer hours and lower pay per hour — a "flexibility penalty." Within the same occupation, workers who work longer/less-flexible hours earn disproportionately more. This is not primarily about occupation choice, education differences, or bonus structures.',
    source: 'Study Plan / Topic 15'
  },

  // ===== MYTH BUSTER — TRUE/FALSE EXAM TRAPS =====
  {
    id: 'myth-01',
    topic: 'ismp',
    format: 'tf',
    text: 'Under flexible exchange rates, fiscal policy is MORE effective than monetary policy.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Under flexible ER, monetary policy is MORE effective (currency depreciation amplifies the effect), while fiscal policy is LESS effective (currency appreciation offsets the IS shift). This is the Mundell-Fleming result.',
    source: 'PS7, Finals 2022-2025'
  },
  {
    id: 'myth-02',
    topic: 'ismp',
    format: 'tf',
    text: 'Under a fixed exchange rate, a central bank can independently set the domestic interest rate.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Under a fixed ER, the CB must set r = r* + θ (IRP condition) to maintain the peg. Monetary policy is redundant — the CB sacrifices interest rate independence to maintain the exchange rate.',
    source: 'PS7, Finals 2022-2025'
  },
  {
    id: 'myth-03',
    topic: 'tariff',
    format: 'tf',
    text: 'A small country can always benefit from imposing an optimal tariff.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Only a LARGE country can benefit from a tariff (via terms-of-trade gains). A small country is a price taker — its tariff cannot affect the world price, so there are always net DWL losses.',
    source: 'PS8, Finals 2022-2025'
  },
  {
    id: 'myth-04',
    topic: 'labor',
    format: 'tf',
    text: 'A minimum wage always reduces employment, regardless of market structure.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. In a monopsony labor market, a minimum wage set between the monopsony and competitive wage can INCREASE both wages AND employment. Card & Krueger (1994) found no negative employment effects in NJ fast food.',
    source: 'PS4, Minimum wage reading'
  },
  {
    id: 'myth-05',
    topic: 'inflation',
    format: 'tf',
    text: 'If the central bank raises the nominal interest rate by exactly the amount inflation increased, the real interest rate remains unchanged.',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'TRUE. r = i - π. If both i and π rise by the same amount, r is unchanged. This is precisely why the Taylor Principle says the CB must raise i by MORE than the rise in π — to actually increase the real rate and fight inflation.',
    source: 'Fisher equation, Taylor Principle'
  },
  {
    id: 'myth-06',
    topic: 'adia',
    format: 'tf',
    text: 'In the AD-IA-LR model, a positive demand shock permanently raises BOTH output and inflation in the long run.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Output returns to potential (LR line) in the long run — only inflation is permanently higher. The self-correcting mechanism: output above potential → IA shifts up → output falls back → equilibrium at original Y but higher π.',
    source: 'PS6, Finals 2022-2025'
  },
  {
    id: 'myth-07',
    topic: 'debt',
    format: 'tf',
    text: 'When r < g (interest rate below GDP growth), a country can run moderate primary deficits indefinitely without the debt-to-GDP ratio exploding.',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'TRUE. When r < g, the economy outgrows the interest cost of debt. The debt-to-GDP ratio shrinks naturally even with moderate deficits. This is why post-WWII debt/GDP fell without austerity — growth exceeded interest rates.',
    source: 'PS8, Finals 2022-2025'
  },
  {
    id: 'myth-08',
    topic: 'exchange',
    format: 'tf',
    text: 'An increase in a country\'s risk premium (θ) always hurts its economy.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Under flexible ER, higher θ → currency depreciates → NX rise → IS shifts right → output increases. The "silver lining" of a risk premium shock. Under fixed ER, however, it does hurt (CB must raise r to maintain peg).',
    source: 'PS6 (Kenya), Final 2022 (Chile)'
  },
  {
    id: 'myth-09',
    topic: 'multiplier',
    format: 'tf',
    text: 'A $1,200 stimulus check adds exactly $1,200 × multiplier to GDP.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Transfer payments don\'t directly enter GDP — recipients must spend them first. CARES Act data showed only 42% was spent (MPC ≈ 0.42), 27% saved, 31% used for debt repayment. The multiplier applies only to the spent portion.',
    source: 'Stimulus cheques reading'
  },
  {
    id: 'myth-10',
    topic: 'growth',
    format: 'tf',
    text: 'A higher savings rate permanently increases the long-run growth rate of output per worker in the Solow model.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Higher savings raises the LEVEL of output per worker (transition to a higher steady state) but NOT the long-run growth rate. Only TFP growth can sustain permanent growth due to diminishing returns to capital.',
    source: 'PS3'
  },
  {
    id: 'myth-11',
    topic: 'qtm',
    format: 'tf',
    text: 'According to the Quantity Theory of Money, if money supply grows at 8% and real output grows at 3%, inflation will be approximately 5% (assuming stable velocity).',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'TRUE. π = g(M) + g(V) - g(Y) = 8% + 0% - 3% = 5%. This is the core QTM prediction — excess money growth beyond real output growth translates into inflation.',
    source: 'Finals 2022-2025'
  },
  {
    id: 'myth-12',
    topic: 'money',
    format: 'tf',
    text: 'Depositing cash into a checking account increases M1 money supply.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Cash in circulation and checking deposits are both part of M1. Depositing cash simply changes the composition (less currency, more deposits) but the total M1 remains the same.',
    source: 'Final 2022'
  },
  {
    id: 'myth-13',
    topic: 'gdp',
    format: 'tf',
    text: 'If GDP rises by 5% and inflation is 3%, real GDP growth is approximately 2%.',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'TRUE. Real GDP growth ≈ Nominal GDP growth - inflation = 5% - 3% = 2%. This is the GDP deflator adjustment.',
    source: 'Finals 2022-2023'
  },
  {
    id: 'myth-14',
    topic: 'tariff',
    format: 'tf',
    text: 'US tariffs in 2024-2025 successfully reduced the US trade deficit.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. The US trade deficit hit record highs ($70.3B monthly) despite aggressive tariffs. The strong dollar (partly caused by tariffs themselves) offset the effect, and manufacturers who relied on imported inputs were harmed.',
    source: 'US Trade Deficit $70.3B reading, US Manufacturing in Retreat reading'
  },
  {
    id: 'myth-15',
    topic: 'qeqt',
    format: 'tf',
    text: 'Quantitative Easing (QE) works by directly printing money and giving it to consumers.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. QE works by the Fed buying bonds from banks, increasing bank reserves. This lowers long-term interest rates and encourages lending, but money doesn\'t go directly to consumers. It works through the financial system, not fiscal channels.',
    source: 'PS2, Fed Portfolio reading'
  },
  {
    id: 'myth-16',
    topic: 'inflation',
    format: 'tf',
    text: 'Unexpected inflation benefits borrowers at the expense of lenders.',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'TRUE. Unexpected inflation erodes the real value of fixed nominal debt. Borrowers repay with "cheaper dollars." This is a wealth transfer from lenders (creditors) to borrowers (debtors).',
    source: 'PS1, Final 2023'
  },
  {
    id: 'myth-17',
    topic: 'articles',
    format: 'tf',
    text: 'Acemoglu estimates AI will automate roughly 50% of workplace tasks within 10 years.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Acemoglu estimated only 4.6% of tasks are cost-effective to automate with AI in 10 years, yielding a modest 0.53% TFP gain — far below the hype from tech optimists.',
    source: 'Acemoglu AI Hype reading'
  },
  {
    id: 'myth-18',
    topic: 'articles',
    format: 'tf',
    text: 'Research suggests firms form inflation expectations mainly from their own real-time business data, not from media reports.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Despite having real-time data, firms are heavily swayed by media coverage and official CPI releases. Less than 20% of CEOs even know the Fed\'s 2% target. Media\'s negativity bias makes the "last mile" of disinflation harder.',
    source: 'Why companies get inflation wrong reading'
  },
  {
    id: 'myth-19',
    topic: 'labor',
    format: 'tf',
    text: 'The Sahm Rule triggering always means a recession has begun.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. The Sahm Rule triggered in 2024 as a false alarm. Unemployment rose because of labor force expansion (more people searching), not mass layoffs. The rule assumes rising unemployment = falling demand, which wasn\'t the case.',
    source: 'Pain at edge of labor market reading'
  },
  {
    id: 'myth-20',
    topic: 'skillbias',
    format: 'tf',
    text: 'Evidence from Japan and Finland shows that factory robots always reduce employment at the firms that adopt them.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. The "new view" shows robots can INCREASE firm-level employment — automation boosts productivity → lower costs → higher demand → firms expand and hire more workers. The displacement effect can be outweighed by the productivity effect.',
    source: 'Economists revising views on robots reading'
  },
  {
    id: 'myth-21',
    topic: 'exchange',
    format: 'tf',
    text: 'If the Big Mac costs $3 in Japan and $6 in the US, the yen is overvalued relative to PPP.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. If a Big Mac costs half as much in Japan, the yen buys more goods domestically than the exchange rate implies — meaning the yen is UNDERVALUED (by ~50%). PPP says currencies should equalize purchasing power.',
    source: 'Big Mac Index reading'
  },
  {
    id: 'myth-22',
    topic: 'environment',
    format: 'tf',
    text: 'A Carbon Border Adjustment Mechanism (CBAM) is a subsidy for domestic clean energy companies.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. CBAM is a tax on IMPORTS based on their carbon content. It prevents "carbon leakage" — firms moving production to countries without carbon pricing to avoid costs. It\'s a trade measure, not a subsidy.',
    source: 'Finals 2024-2025'
  },
  {
    id: 'myth-23',
    topic: 'savings',
    format: 'tf',
    text: 'A government budget deficit reduces national savings and tends to push up real interest rates.',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'TRUE. Deficit = negative public saving → national saving (private + public) falls → in the loanable funds market, saving supply shifts left → equilibrium real interest rate rises → private investment is "crowded out."',
    source: 'PS1, Finals 2022-2023'
  },
  {
    id: 'myth-24',
    topic: 'gender',
    format: 'tf',
    text: 'The modern gender wage gap is primarily explained by women having less education than men.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Women now earn more bachelor\'s and master\'s degrees than men. Goldin\'s Nobel-winning research shows the gap is driven primarily by the "motherhood penalty" — career interruptions and the premium for long, inflexible hours in fields like finance and law.',
    source: 'Why Claudia Goldin won the Nobel reading'
  },
  {
    id: 'myth-25',
    topic: 'inflation',
    format: 'tf',
    text: 'Venezuela and Zimbabwe both ended hyperinflation by raising interest rates aggressively.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Zimbabwe ended hyperinflation by abandoning its currency entirely (dollarization). Venezuela tried various measures but the root cause — massive money printing to fund deficits — persisted. Rate hikes alone can\'t fix hyperinflation caused by fiscal dominance.',
    source: 'Spot the difference reading'
  },

  // ===== TRUE/FALSE — Study Plan Gap-fills =====
  {
    id: 'tf-m1-withdrawal',
    topic: 'banking',
    format: 'tf',
    text: 'Withdrawing cash from your bank account decreases M1.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Withdrawing cash swaps one component of M1 (demand deposits) for another (cash in circulation). The total M1 is UNCHANGED. M1 = cash in circulation + demand deposits.',
    source: 'Study Plan / Topic 18'
  },
  {
    id: 'tf-m1-loan',
    topic: 'banking',
    format: 'tf',
    text: 'When a bank creates a new loan, M1 increases.',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'TRUE. When a bank makes a loan, it credits the borrower\'s checking account (demand deposits rise). This creates new money — M1 increases. This is how commercial banks create money.',
    source: 'Study Plan / Topic 18'
  },
  {
    id: 'tf-qe-m1',
    topic: 'qeqt',
    format: 'tf',
    text: 'Quantitative easing (the Fed buying MBS) directly increases M1.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. QE creates bank RESERVES (monetary base), not deposits. Reserves are held at the Fed and are NOT part of M1. The M1 effect is only indirect — if banks use the reserves to make more loans, then M1 might increase. But QE itself does not directly add to M1.',
    source: 'Study Plan / Topic 18'
  },
  {
    id: 'tf-discouraged-recovery',
    topic: 'labor',
    format: 'tf',
    text: 'When the economy improves after a recession, the reported unemployment rate always falls immediately.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. When the economy recovers, discouraged workers (who had stopped searching) re-enter the labor force and are now counted as unemployed. This can cause the reported unemployment rate to temporarily RISE even as the economy improves. Counterintuitive but an important exam trap.',
    source: 'Study Plan / Topic 7'
  },
  {
    id: 'tf-wage-indexation',
    topic: 'inflation',
    format: 'tf',
    text: 'Wage indexation (automatically linking wages to inflation) solves the inflation problem.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Wage indexation protects workers\' real income, but it does NOT solve inflation. Higher wages → higher production costs → firms raise prices → more inflation. This is a WAGE-PRICE SPIRAL. Indexation actually makes inflation harder to break because every price increase automatically feeds into higher wages.',
    source: 'Study Plan / Topic 8'
  },
  {
    id: 'tf-recession-definition',
    topic: 'gdp',
    format: 'tf',
    text: 'A recession is officially defined as two consecutive quarters of negative GDP growth.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. A recession is officially the period AFTER a PEAK and BEFORE a TROUGH in economic activity, as determined by the NBER Business Cycle Dating Committee. The "two consecutive quarters" rule is a media shorthand, not the formal definition. The NBER considers multiple indicators including employment, income, and production.',
    source: 'Study Plan / Topic 7'
  },
  {
    id: 'tf-minwage-premium',
    topic: 'labor',
    format: 'tf',
    text: 'Higher minimum wages can explain the rising college wage premium.',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'FALSE. Higher minimum wages raise wages at the BOTTOM of the distribution, which COMPRESSES the gap between college and non-college workers. This NARROWS the college wage premium, not widens it. The rising premium is explained by skill-biased technological change and globalization, not minimum wage policy.',
    source: 'Study Plan / Topic 15'
  },

  // ===== CURVE SHIFTER — IS-MP =====
  {
    id: 'curve-ismp-01',
    topic: 'ismp',
    format: 'curve',
    diagram: 'ismp',
    text: 'The government enacts a large infrastructure spending package. Which curve shifts and in which direction?',
    choices: ['IS shifts right', 'IS shifts left', 'MP shifts up', 'MP shifts down'],
    correct: 0,
    explanation: 'Government spending (G↑) is a component of aggregate demand. Higher G shifts the IS curve to the right, raising output at every interest rate.',
    shifts: [{ curve: 'IS', direction: 'right' }],
    source: 'PS2'
  },
  {
    id: 'curve-ismp-02',
    topic: 'ismp',
    format: 'curve',
    diagram: 'ismp',
    text: 'The central bank raises its policy interest rate to combat inflation. Which curve shifts and in which direction?',
    choices: ['IS shifts right', 'IS shifts left', 'MP shifts up', 'MP shifts down'],
    correct: 2,
    explanation: 'When the central bank raises its policy rate, the MP curve shifts up. At every level of output the real interest rate is now higher, which reduces investment and aggregate demand.',
    shifts: [{ curve: 'MP', direction: 'up' }],
    source: 'PS2'
  },
  {
    id: 'curve-ismp-03',
    topic: 'ismp',
    format: 'curve',
    diagram: 'ismp',
    text: 'A consumer confidence survey plunges and households cut back on spending. Which curve shifts and in which direction?',
    choices: ['IS shifts right', 'IS shifts left', 'MP shifts up', 'MP shifts down'],
    correct: 1,
    explanation: 'A fall in consumer confidence reduces consumption (C↓), a component of aggregate demand. The IS curve shifts left, lowering equilibrium output.',
    shifts: [{ curve: 'IS', direction: 'left' }],
    source: 'PS2'
  },
  {
    id: 'curve-ismp-04',
    topic: 'ismp',
    format: 'curve',
    diagram: 'ismp',
    text: 'Congress passes a broad-based tax cut for households. Which curve shifts and in which direction?',
    choices: ['IS shifts right', 'IS shifts left', 'MP shifts up', 'MP shifts down'],
    correct: 0,
    explanation: 'A tax cut raises disposable income, boosting consumption (C↑). This positive demand shock shifts the IS curve to the right.',
    shifts: [{ curve: 'IS', direction: 'right' }],
    source: 'PS2'
  },
  {
    id: 'curve-ismp-05',
    topic: 'ismp',
    format: 'curve',
    diagram: 'ismp',
    text: 'The economy enters a recession and the central bank cuts its policy rate to stimulate growth. Which curve shifts and in which direction?',
    choices: ['IS shifts right', 'IS shifts left', 'MP shifts up', 'MP shifts down'],
    correct: 3,
    explanation: 'Cutting the policy rate shifts the MP curve down. The lower interest rate at every output level encourages investment and spending, boosting output.',
    shifts: [{ curve: 'MP', direction: 'down' }],
    source: 'PS2'
  },
  {
    id: 'curve-ismp-06',
    topic: 'ismp',
    format: 'curve',
    diagram: 'ismp',
    text: 'A major foreign economy booms, sharply increasing demand for the home country\'s exports. Which curve shifts and in which direction?',
    choices: ['IS shifts right', 'IS shifts left', 'MP shifts up', 'MP shifts down'],
    correct: 0,
    explanation: 'Higher foreign demand raises net exports (NX↑), a component of aggregate demand. The IS curve shifts to the right.',
    shifts: [{ curve: 'IS', direction: 'right' }],
    source: 'PS3'
  },
  {
    id: 'curve-ismp-07',
    topic: 'ismp',
    format: 'curve',
    diagram: 'ismp',
    text: 'Under a flexible exchange rate, the country risk premium rises sharply. Which curve shifts and in which direction?',
    choices: ['IS shifts right', 'IS shifts left', 'MP shifts up', 'MP shifts down'],
    correct: 0,
    explanation: 'A higher risk premium (x↑) causes the domestic currency to depreciate via IRP (investors demand more return). The weaker currency boosts net exports, shifting IS right. This is the flexible-ER result where depreciation dominates.',
    shifts: [{ curve: 'IS', direction: 'right' }],
    source: 'PS3'
  },
  {
    id: 'curve-ismp-08',
    topic: 'ismp',
    format: 'curve',
    diagram: 'ismp',
    text: 'Under a fixed exchange rate, the world interest rate r* rises. Which curve shifts and in which direction?',
    choices: ['IS shifts right', 'IS shifts left', 'MP shifts up', 'MP shifts down'],
    correct: 2,
    explanation: 'Under a fixed exchange rate, the central bank must match the world rate to maintain the peg (otherwise capital flows would break the peg). So when r* rises, the domestic policy rate rises too, shifting the MP curve up.',
    shifts: [{ curve: 'MP', direction: 'up' }],
    source: 'PS3, Finals 2023-2024'
  },

  // ===== CURVE SHIFTER — AD-IA-LR =====
  {
    id: 'curve-adia-01',
    topic: 'adia',
    format: 'curve',
    diagram: 'adia',
    text: 'The government enacts a large fiscal expansion (positive demand shock). Which curve shifts and in which direction?',
    choices: ['AD shifts right', 'AD shifts left', 'IA shifts up', 'IA shifts down', 'LR shifts right', 'LR shifts left'],
    correct: 0,
    explanation: 'A fiscal expansion is a positive demand shock. It shifts the AD curve to the right, raising both output and inflation in the short run.',
    shifts: [{ curve: 'AD', direction: 'right' }],
    source: 'PS4'
  },
  {
    id: 'curve-adia-02',
    topic: 'adia',
    format: 'curve',
    diagram: 'adia',
    text: 'An oil price spike hits the economy (negative supply shock). Which curve shifts and in which direction?',
    choices: ['AD shifts right', 'AD shifts left', 'IA shifts up', 'IA shifts down', 'LR shifts right', 'LR shifts left'],
    correct: 5,
    explanation: 'A negative supply shock like an oil price spike reduces potential output. The long-run (LR) line shifts to the left, meaning the economy\'s capacity has shrunk.',
    shifts: [{ curve: 'LR', direction: 'left' }],
    source: 'PS4, Finals 2024-2025'
  },
  {
    id: 'curve-adia-03',
    topic: 'adia',
    format: 'curve',
    diagram: 'adia',
    text: 'The economy has been operating above potential output for a sustained period. Which curve shifts and in which direction?',
    choices: ['AD shifts right', 'AD shifts left', 'IA shifts up', 'IA shifts down', 'LR shifts right', 'LR shifts left'],
    correct: 2,
    explanation: 'When output exceeds potential (Y > Ȳ), inflation expectations and wage pressures rise. The IA (Inflation Adjustment) line shifts up, reflecting higher built-in inflation.',
    shifts: [{ curve: 'IA', direction: 'up' }],
    source: 'PS4'
  },
  {
    id: 'curve-adia-04',
    topic: 'adia',
    format: 'curve',
    diagram: 'adia',
    text: 'A wave of technological progress raises the economy\'s potential output. Which curve shifts and in which direction?',
    choices: ['AD shifts right', 'AD shifts left', 'IA shifts up', 'IA shifts down', 'LR shifts right', 'LR shifts left'],
    correct: 4,
    explanation: 'Technological progress increases the economy\'s productive capacity (Ȳ↑). The long-run (LR) line shifts to the right.',
    shifts: [{ curve: 'LR', direction: 'right' }],
    source: 'PS4'
  },
  {
    id: 'curve-adia-05',
    topic: 'adia',
    format: 'curve',
    diagram: 'adia',
    text: 'The central bank tightens monetary policy aggressively to fight rising inflation. Which curve shifts and in which direction?',
    choices: ['AD shifts right', 'AD shifts left', 'IA shifts up', 'IA shifts down', 'LR shifts right', 'LR shifts left'],
    correct: 1,
    explanation: 'Monetary tightening raises interest rates, reducing investment and consumption. This is a negative demand shock that shifts the AD curve to the left, lowering output and eventually inflation.',
    shifts: [{ curve: 'AD', direction: 'left' }],
    source: 'PS4, Finals 2023-2024'
  },
  {
    id: 'curve-adia-06',
    topic: 'adia',
    format: 'curve',
    diagram: 'adia',
    text: 'The economy is in a recession with output well below potential. Which curve adjusts over time?',
    choices: ['AD shifts right', 'AD shifts left', 'IA shifts up', 'IA shifts down', 'LR shifts right', 'LR shifts left'],
    correct: 3,
    explanation: 'When output is below potential (Y < Ȳ), there is slack in the economy. Wage and price pressures ease, so the IA line gradually shifts down, allowing the economy to self-correct toward potential.',
    shifts: [{ curve: 'IA', direction: 'down' }],
    source: 'PS4'
  },
  {
    id: 'curve-adia-07',
    topic: 'adia',
    format: 'curve',
    diagram: 'adia',
    text: 'Congress enacts a permanent tax cut, boosting consumer and business spending. Which curve shifts and in which direction?',
    choices: ['AD shifts right', 'AD shifts left', 'IA shifts up', 'IA shifts down', 'LR shifts right', 'LR shifts left'],
    correct: 0,
    explanation: 'A permanent tax cut increases disposable income and expected after-tax returns, boosting consumption and investment. This positive demand shock shifts the AD curve to the right.',
    shifts: [{ curve: 'AD', direction: 'right' }],
    source: 'PS4, Finals 2022-2023'
  },

  // ===== CALCULATOR CHALLENGES =====
  {
    id: 'calc-01',
    topic: 'multiplier',
    format: 'calc',
    text: 'If the marginal propensity to consume (MPC) is 0.8, what is the fiscal spending multiplier?',
    answer: 5,
    tolerance: 0.5,
    unit: '',
    steps: [
      'Multiplier = 1 / (1 − MPC)',
      '= 1 / (1 − 0.8)',
      '= 1 / 0.2',
      '= 5'
    ],
    explanation: 'The simple Keynesian multiplier is 1/(1−MPC). With MPC = 0.8, each dollar of government spending generates $5 of total output.',
    source: 'PS1'
  },
  {
    id: 'calc-02',
    topic: 'labor',
    format: 'calc',
    text: 'The job separation rate is s = 0.03 and the job finding rate is f = 0.27. What is the natural rate of unemployment (u*) in percent?',
    answer: 10,
    tolerance: 0.5,
    unit: '%',
    steps: [
      'u* = s / (s + f)',
      '= 0.03 / (0.03 + 0.27)',
      '= 0.03 / 0.30',
      '= 0.10 = 10%'
    ],
    explanation: 'In the steady-state labor market model, u* = s/(s+f). Workers separate at rate s and find jobs at rate f, giving a natural unemployment rate of 10%.',
    source: 'PS1'
  },
  {
    id: 'calc-03',
    topic: 'qtm',
    format: 'calc',
    text: 'Money supply (M) grows at 12%, real output (Y) grows at 4%, and velocity (V) is constant. What is the inflation rate (π)?',
    answer: 8,
    tolerance: 0.5,
    unit: '%',
    steps: [
      'Quantity Theory: MV = PY',
      'In growth rates: gM + gV = π + gY',
      '12% + 0% = π + 4%',
      'π = 12% − 4% = 8%'
    ],
    explanation: 'By the Quantity Theory of Money, with constant velocity, inflation equals money growth minus real output growth: 12% − 4% = 8%.',
    source: 'PS1'
  },
  {
    id: 'calc-04',
    topic: 'inflation',
    format: 'calc',
    text: 'The nominal interest rate is 6% and the inflation rate is 2.5%. What is the real interest rate?',
    answer: 3.5,
    tolerance: 0.5,
    unit: '%',
    steps: [
      'Fisher equation: r = i − π',
      'r = 6% − 2.5%',
      'r = 3.5%'
    ],
    explanation: 'The Fisher equation says the real interest rate equals the nominal rate minus inflation: 6% − 2.5% = 3.5%.',
    source: 'PS2'
  },
  {
    id: 'calc-05',
    topic: 'debt',
    format: 'calc',
    text: 'A country has a debt-to-GDP ratio of 80%. The real interest rate is 5% and the GDP growth rate is 3%. What primary surplus (as % of GDP) is needed to stabilize the debt ratio?',
    answer: 1.6,
    tolerance: 0.5,
    unit: '% of GDP',
    steps: [
      'Required primary surplus = (r − g) × (Debt/GDP)',
      '= (0.05 − 0.03) × 0.80',
      '= 0.02 × 0.80',
      '= 0.016 = 1.6% of GDP'
    ],
    explanation: 'To stabilize the debt ratio, the primary surplus must cover the gap between interest costs and the growth dividend: (r−g) × debt/GDP = 2% × 80% = 1.6% of GDP.',
    source: 'PS3, Finals 2023-2024'
  },
  {
    id: 'calc-06',
    topic: 'gdp',
    format: 'calc',
    text: 'Nominal GDP is $25 trillion and real GDP is $22 trillion. What is the GDP deflator?',
    answer: 113.6,
    tolerance: 1,
    unit: '',
    steps: [
      'GDP Deflator = (Nominal GDP / Real GDP) × 100',
      '= (25 / 22) × 100',
      '= 1.1364 × 100',
      '≈ 113.6'
    ],
    explanation: 'The GDP deflator measures the overall price level as nominal GDP divided by real GDP, times 100. It shows prices are about 13.6% above the base year.',
    source: 'PS1'
  },
  {
    id: 'calc-07',
    topic: 'exchange',
    format: 'calc',
    text: 'The nominal exchange rate is ε = 110 yen/$, the foreign price level is P* = 120, and the domestic price level is P = 100. What is the real exchange rate (RER)?',
    answer: 132,
    tolerance: 1,
    unit: '',
    steps: [
      'RER = ε × (P / P*)',
      'Wait — RER = ε × (P_domestic / P_foreign)',
      '= 110 × (100 / 120)',
      'Hmm, let me use the standard: RER = ε × P* / P',
      '= 110 × 120 / 100',
      '= 132'
    ],
    explanation: 'The real exchange rate adjusts the nominal rate for relative price levels. RER = ε × P*/P = 110 × 120/100 = 132. A higher RER means domestic goods are relatively cheaper (more competitive).',
    source: 'PS3'
  },
  {
    id: 'calc-08',
    topic: 'growth',
    format: 'calc',
    text: 'Output growth (gY) is 5%, capital growth (gK) is 6%, labor growth (gL) is 1%, and capital\'s share α = 0.3. What is TFP (total factor productivity) growth?',
    answer: 2.2,
    tolerance: 0.3,
    unit: '%',
    steps: [
      'Growth accounting: gY = gA + α·gK + (1−α)·gL',
      'gA = gY − α·gK − (1−α)·gL',
      '= 5% − 0.3(6%) − 0.7(1%)',
      '= 5% − 1.8% − 0.7%',
      '= 2.5%',
      'Note: Using the Solow residual approach, gA ≈ 2.2–2.5% depending on rounding.'
    ],
    explanation: 'Growth accounting decomposes output growth into contributions from capital, labor, and TFP. TFP growth is the Solow residual: gA = gY − α·gK − (1−α)·gL.',
    source: 'PS5'
  },
  {
    id: 'calc-09',
    topic: 'multiplier',
    format: 'calc',
    text: 'If the MPC is 0.75, what is the tax multiplier?',
    answer: -3,
    tolerance: 0.5,
    unit: '',
    steps: [
      'Tax multiplier = −MPC / (1 − MPC)',
      '= −0.75 / (1 − 0.75)',
      '= −0.75 / 0.25',
      '= −3'
    ],
    explanation: 'The tax multiplier is −MPC/(1−MPC). It is negative because tax increases reduce disposable income. With MPC = 0.75, a $1 tax increase reduces output by $3.',
    source: 'PS1'
  },
  {
    id: 'calc-10',
    topic: 'growth',
    format: 'calc',
    text: 'A country\'s GDP grows at 3.5% per year. Using the Rule of 70, approximately how many years will it take for GDP to double?',
    answer: 20,
    tolerance: 1,
    unit: 'years',
    steps: [
      'Rule of 70: Doubling time ≈ 70 / growth rate',
      '= 70 / 3.5',
      '= 20 years'
    ],
    explanation: 'The Rule of 70 approximates doubling time as 70 divided by the growth rate in percent: 70/3.5 = 20 years.',
    source: 'PS5'
  },
  {
    id: 'calc-11',
    topic: 'multiplier',
    format: 'calc',
    text: 'A $600 billion stimulus check is sent to households who have an MPC of 0.6. What is the first-round spending impact?',
    answer: 360,
    tolerance: 5,
    unit: '$B',
    steps: [
      'First-round spending = Transfer × MPC',
      '= $600B × 0.6',
      '= $360B'
    ],
    explanation: 'The first-round spending effect equals the transfer amount times the MPC. Households spend 60% of the $600B, producing $360B in first-round spending.',
    source: 'PS1'
  },
  {
    id: 'calc-12',
    topic: 'savings',
    format: 'calc',
    text: 'In the loanable funds market, savings = 200 + 50r and investment = 500 − 100r, where r is the real interest rate in percent. What is the equilibrium real interest rate?',
    answer: 2,
    tolerance: 0.5,
    unit: '%',
    steps: [
      'Set savings = investment:',
      '200 + 50r = 500 − 100r',
      '150r = 300',
      'r = 2%'
    ],
    explanation: 'Equilibrium occurs where savings equals investment. Solving 200 + 50r = 500 − 100r gives 150r = 300, so r = 2%.',
    source: 'PS1'
  },

  // ===== CALCULATOR — Study Plan Gap-fills =====
  {
    id: 'calc-cpi-reverse',
    topic: 'gdp',
    format: 'calc',
    text: 'CPI basket inflation is 3%. Cars have weight 0.9 and their price rose 5%. Pens have weight 0.1. By what percent did pen prices change? (Enter a negative number if they fell.)',
    answer: -15,
    tolerance: 1,
    unit: '%',
    steps: [
      'CPI inflation = w_cars × π_cars + w_pens × π_pens',
      '0.03 = 0.9(0.05) + 0.1(x)',
      '0.03 = 0.045 + 0.1x',
      '0.1x = 0.03 − 0.045 = −0.015',
      'x = −0.15 = −15%'
    ],
    explanation: 'Using the CPI formula in reverse: total inflation (3%) = weighted sum of component inflations. Solving for pens: 0.1x = 0.03 − 0.045 = −0.015, so x = −15%. Pen prices FELL 15% even as overall inflation was 3%, because cars (90% of the basket) pulled everything up.',
    source: 'Study Plan / Topic 9'
  },
  {
    id: 'calc-tariff-imports',
    topic: 'tariff',
    format: 'calc',
    text: 'Small open economy. World price = $60, tariff = $20. Demand: Q_D = 200 − P. Supply: Q_S = P. How many units are imported after the tariff?',
    answer: 40,
    tolerance: 1,
    unit: 'units',
    steps: [
      'Domestic price after tariff: P_dom = 60 + 20 = 80',
      'Quantity demanded: Q_D = 200 − 80 = 120',
      'Quantity supplied: Q_S = 80',
      'Imports = Q_D − Q_S = 120 − 80 = 40'
    ],
    explanation: 'The tariff raises the domestic price from $60 to $80. At $80, domestic demand is 120 and domestic supply is 80. Imports = 120 − 80 = 40 units (down from 80 under free trade).',
    source: 'Study Plan / Topic 5'
  },
  {
    id: 'calc-tariff-revenue',
    topic: 'tariff',
    format: 'calc',
    text: 'Small open economy. World price = $60, tariff = $20. Demand: Q_D = 200 − P. Supply: Q_S = P. What is the government\'s tariff revenue?',
    answer: 800,
    tolerance: 10,
    unit: '$',
    steps: [
      'P_dom = 60 + 20 = 80',
      'Imports = Q_D − Q_S = 120 − 80 = 40',
      'Gov revenue = imports × tariff = 40 × 20 = $800'
    ],
    explanation: 'Government collects the tariff ($20) on each imported unit (40 units). Revenue = 40 × $20 = $800.',
    source: 'Study Plan / Topic 5'
  },
  {
    id: 'calc-cpi-forward',
    topic: 'gdp',
    format: 'calc',
    text: 'CPI basket: beer weight = 0.7 (price $5 → $6), soju weight = 0.3 (price $7 → $9). What is the inflation rate? (Answer in percent)',
    answer: 23.2,
    tolerance: 0.5,
    unit: '%',
    steps: [
      'Old basket: 0.7(5) + 0.3(7) = 3.50 + 2.10 = $5.60',
      'New basket: 0.7(6) + 0.3(9) = 4.20 + 2.70 = $6.90',
      'Inflation = (6.90 − 5.60) / 5.60 = 1.30 / 5.60 = 23.2%'
    ],
    explanation: 'CPI inflation = (new basket cost − old basket cost) / old basket cost. The old basket costs $5.60 and the new basket costs $6.90, giving 23.2% inflation.',
    source: 'Study Plan / Topic 9'
  },
  {
    id: 'calc-qtm-money-growth',
    topic: 'qtm',
    format: 'calc',
    text: 'Target inflation: 4%. Velocity is constant. Real GDP grows 3%. What money supply growth rate is required?',
    answer: 7,
    tolerance: 0.5,
    unit: '%',
    steps: [
      'QTM: π = g(M) + g(V) − g(Y)',
      'g(V) = 0 (velocity constant)',
      '4% = g(M) + 0% − 3%',
      'g(M) = 4% + 3% = 7%'
    ],
    explanation: 'From the Quantity Theory: π = g(M) − g(Y) when velocity is constant. To achieve 4% inflation with 3% real GDP growth, the central bank must grow the money supply at 7% per year.',
    source: 'Study Plan / Topic 8'
  },
  {
    id: 'calc-lfpr',
    topic: 'labor',
    format: 'calc',
    text: 'Population: 20M. Retired: 1M. Discouraged workers: 500K. Family care: 750K. Employed: 14M. Unemployed (searching): 3.75M. What is the labor force participation rate? (Answer in percent)',
    answer: 88.75,
    tolerance: 0.5,
    unit: '%',
    steps: [
      'Labor Force = Employed + Unemployed searching',
      '= 14M + 3.75M = 17.75M',
      'LFPR = Labor Force / Working-age pop = 17.75 / 20',
      '= 88.75%'
    ],
    explanation: 'LFPR counts only those employed OR actively searching for work. Retired, discouraged workers, and family caregivers are NOT in the labor force. LFPR = 17.75M / 20M = 88.75%.',
    source: 'Study Plan / Topic 7'
  },

  // ===== POLICY ADVISOR QUESTIONS =====
  {
    id: 'policy-01',
    topic: 'ismp',
    format: 'policy',
    text: 'You are the Fed Chair. Inflation is rising above target and output is above potential. What is the best policy response?',
    choices: [
      'Raise the federal funds rate to cool the economy',
      'Signal future tightening through forward guidance',
      'Hold rates steady and monitor incoming data',
      'Cut rates to support continued growth'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'With inflation above target and output above potential, the textbook IS-MP response is to raise rates (MP shifts up), reducing output toward potential and lowering inflation. Signaling future tightening is directionally correct but slower. Holding steady allows overheating to continue. Cutting rates would worsen both problems.',
    source: 'PS2 / Final'
  },
  {
    id: 'policy-02',
    topic: 'tariff',
    format: 'policy',
    text: 'You are the US Trade Representative. A key domestic industry is losing jobs to cheap imports from a SMALL country. What is the best policy response?',
    choices: [
      'Invest in worker retraining and adjustment assistance programs',
      'Negotiate voluntary export restraints with the exporting country',
      'Impose a tariff on imports from that country',
      'Ban all imports from that country'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Retraining addresses the labor displacement without creating deadweight loss. Voluntary export restraints limit trade distortion somewhat. A tariff on a small country creates DWL (the country is a price-taker, so the tariff just raises domestic prices). Banning imports is the most distortionary option and invites retaliation.',
    source: 'PS3 / Final'
  },
  {
    id: 'policy-03',
    topic: 'exchange',
    format: 'policy',
    text: 'You are the finance minister of a small country with a fixed exchange rate. The world interest rate r* just rose sharply. What is the best policy response?',
    choices: [
      'Raise domestic interest rates to maintain the peg',
      'Announce temporary capital controls to stem outflows',
      'Devalue the currency to a new, lower peg',
      'Lower domestic interest rates to stimulate the economy'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Under a fixed exchange rate, interest rate parity requires r = r* + risk premium. When r* rises, you must raise domestic rates to prevent capital outflows and maintain the peg. Capital controls are a second-best stopgap. Devaluation abandons the peg. Lowering rates would trigger massive capital flight and a currency crisis.',
    source: 'PS4 / Final'
  },
  {
    id: 'policy-04',
    topic: 'debt',
    format: 'policy',
    text: 'You are the finance minister. Debt-to-GDP is 120%, r > g, and markets are losing confidence. What is the best policy response?',
    choices: [
      'Announce a credible fiscal consolidation plan to achieve a primary surplus',
      'Negotiate an orderly debt restructuring with creditors',
      'Print money to inflate away the debt',
      'Increase government spending to grow out of the debt'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'With r > g, the debt-to-GDP ratio rises unless the government runs a primary surplus. A credible consolidation plan directly addresses the debt dynamics equation. Restructuring is painful but acknowledges reality. Printing money risks hyperinflation and destroys credibility. Increasing spending when r > g makes the debt spiral worse.',
    source: 'PS5 / Final'
  },
  {
    id: 'policy-05',
    topic: 'adia',
    format: 'policy',
    text: 'You are the Fed Chair during COVID. Both AD has shifted left AND the long-run supply (LR) has shifted left. The direction of inflation is ambiguous. What is the best policy response?',
    choices: [
      'Cut rates aggressively and provide strong forward guidance to address the demand shortfall',
      'Coordinate with Congress on a large fiscal stimulus package',
      'Wait for more data before taking any action',
      'Raise rates because the supply shock is inflationary'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'When both AD and LR shift left, output unambiguously falls but inflation is ambiguous. The Fed should address the demand collapse with rate cuts and forward guidance. Fiscal coordination is helpful but slower and outside Fed control. Waiting risks a deeper recession. Raising rates would catastrophically compound the demand shortfall.',
    source: 'PS6 / Final'
  },
  {
    id: 'policy-06',
    topic: 'inflation',
    format: 'policy',
    text: 'You are Turkey\'s central bank governor. Inflation is 40% and rising. The president demands rate cuts. What is the best policy response?',
    choices: [
      'Raise rates sharply, citing the Taylor Principle and the need to restore credibility',
      'Hold rates steady and publicly resist political pressure',
      'Implement a small rate increase while consulting with the president',
      'Cut rates as the president demands'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'The Taylor Principle requires the central bank to raise the nominal rate by MORE than the rise in inflation so that the real rate increases. At 40% inflation, aggressive hikes are needed to restore credibility and break inflation expectations. Holding steady violates the Taylor Principle. A small hike is insufficient. Cutting rates (as Erdogan demanded in practice) makes real rates more negative, fueling further inflation.',
    source: 'PS7 / Final'
  },
  {
    id: 'policy-07',
    topic: 'qeqt',
    format: 'policy',
    text: 'You are the Fed Chair in 2025. Quantitative tightening (QT) has been running, the reverse repo facility (RRP) is near zero, and repo rates are starting to spike. What is the best policy response?',
    choices: [
      'Slow or pause QT to prevent a reserve shortage',
      'Announce a standing repo facility as a backstop for money markets',
      'Continue QT at the current pace but monitor conditions closely',
      'Accelerate QT to normalize the balance sheet faster'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'When RRP is near zero and repo rates spike, reserves are approaching scarcity. The 2019 repo spike showed the danger of draining reserves too far. Slowing/pausing QT directly addresses the problem. A standing repo facility is a good structural backstop but takes time. Continuing unchanged risks a liquidity event. Accelerating QT would worsen the reserve shortage.',
    source: 'PS8 / Final'
  },
  {
    id: 'policy-08',
    topic: 'labor',
    format: 'policy',
    text: 'You are a European labor minister. Job switching rates are very low and productivity growth is stagnant. What is the best policy response?',
    choices: [
      'Make pensions and benefits portable across employers',
      'Extend unemployment insurance eligibility to voluntary job quitters',
      'Launch a publicity campaign encouraging workers to explore outside options',
      'Increase firing costs to protect current workers'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Low job switching often reflects "job lock" from non-portable benefits. Making pensions and health benefits portable removes a key barrier to efficient reallocation and boosts productivity through better matching. Extending UI to quitters helps but creates moral hazard. A publicity campaign has minimal impact. Increasing firing costs further reduces labor market dynamism and worsens the problem.',
    source: 'PS9 / Final'
  },
  {
    id: 'policy-09',
    topic: 'multiplier',
    format: 'policy',
    text: 'You are the Treasury Secretary during a deep recession with interest rates at the zero lower bound. What is the best fiscal policy?',
    choices: [
      'Direct government spending on infrastructure projects',
      'Targeted transfers to low-income households with high MPC',
      'Broad-based tax cuts for all income levels',
      'Cut government spending to reduce the deficit'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'At the zero lower bound, monetary policy cannot offset fiscal expansion, so fiscal multipliers are largest. Direct government spending has a multiplier > 1 because every dollar is spent. Targeted transfers to high-MPC households are nearly as effective. Broad tax cuts have a lower multiplier because high-income recipients save more. Cutting spending during a recession is contractionary and counterproductive.',
    source: 'PS10 / Final'
  },
  {
    id: 'policy-10',
    topic: 'environment',
    format: 'policy',
    text: 'You are the climate policy czar. Industries threaten to move abroad if a carbon tax is imposed (carbon leakage). What is the best policy response?',
    choices: [
      'Implement a carbon tax with a carbon border adjustment mechanism (CBAM) on imports',
      'Use cap-and-trade with free permits allocated to trade-exposed industries',
      'Implement a carbon tax without any border adjustment',
      'Abandon carbon pricing entirely to protect domestic industry'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'A carbon tax + CBAM addresses both domestic emissions and carbon leakage by taxing the carbon content of imports, leveling the playing field. Cap-and-trade with free permits reduces leakage but weakens the price signal. A carbon tax alone is good for emissions but does cause leakage. Abandoning carbon pricing entirely fails to address the externality.',
    source: 'Final'
  },

  // ===== BOSS BATTLE QUESTIONS =====
  {
    id: 'boss-01',
    topic: 'debt',
    format: 'boss',
    title: 'The Argentina Crisis',
    parts: [
      {
        text: 'Argentina has a fixed exchange rate and large dollar-denominated debt. The world interest rate r* rises sharply. What must Argentina\'s central bank do?',
        choices: [
          'Lower domestic rates to stimulate the economy',
          'Raise domestic rates to maintain the currency peg',
          'Devalue immediately to boost exports',
          'Impose import quotas to protect reserves'
        ],
        correct: 1,
        explanation: 'Under a fixed exchange rate, interest rate parity requires domestic rates to follow r*. The central bank must raise rates to prevent capital outflows and maintain the peg.'
      },
      {
        text: 'Argentina raises domestic interest rates sharply. In the IS-MP framework, what happens to output?',
        choices: [
          'Output rises as higher rates attract foreign investment',
          'Output is unchanged because the exchange rate is fixed',
          'Output falls as the MP curve shifts up',
          'Output rises as the IS curve shifts right'
        ],
        correct: 2,
        explanation: 'Higher interest rates mean the MP curve shifts up. Moving along the IS curve, higher r corresponds to lower output Y. This is the contractionary effect of defending a peg.'
      },
      {
        text: 'Output is now falling. What does this do to Argentina\'s debt sustainability (the r - g gap)?',
        choices: [
          'Improves it: lower output reduces government spending',
          'No effect: debt sustainability only depends on the interest rate',
          'Widens the r - g gap, making debt less sustainable',
          'Narrows the gap because inflation falls'
        ],
        correct: 2,
        explanation: 'Debt sustainability depends on r - g. When r rises and g falls (recession), the gap widens. With Debt/GDP already high, the rising r - g means the debt ratio accelerates upward, making default more likely.'
      },
      {
        text: 'What policy framework would have helped Argentina avoid this trap?',
        choices: [
          'Higher tariffs on imports to protect reserves',
          'A flexible exchange rate allowing currency depreciation',
          'Stricter capital controls permanently',
          'Dollarizing the economy completely'
        ],
        correct: 1,
        explanation: 'A flexible exchange rate would allow the currency to depreciate when r* rises, boosting net exports (NX) and shifting IS right, partially offsetting the contractionary effect. The fixed rate forced Argentina to import the world\'s tight monetary policy at the worst time.'
      }
    ],
    source: 'PS4, PS5 / Final'
  },
  {
    id: 'boss-02',
    topic: 'adia',
    format: 'boss',
    title: 'The COVID Shock',
    parts: [
      {
        text: 'COVID hits: AD shifts left (lockdowns crush demand) and LR shifts left (supply chains break). What is the short-run effect on output?',
        choices: [
          'Output rises because supply shortages create scarcity value',
          'Output is ambiguous — the two shocks offset',
          'Output falls — both shocks reduce it',
          'Output is unchanged if the shocks are equal in magnitude'
        ],
        correct: 2,
        explanation: 'Both a leftward AD shift and a leftward LR shift reduce output. Regardless of relative magnitudes, output unambiguously falls in the short run.'
      },
      {
        text: 'What is the short-run effect on inflation when both AD and LR shift left?',
        choices: [
          'Inflation unambiguously rises due to supply constraints',
          'Inflation unambiguously falls due to demand collapse',
          'Inflation is ambiguous: demand shock pushes it down, supply shock pushes it up',
          'Inflation stays exactly the same'
        ],
        correct: 2,
        explanation: 'The AD shift left pushes inflation down (less demand), while the LR shift left pushes inflation up (supply constraints). The net effect on inflation depends on which shock dominates — it is theoretically ambiguous.'
      },
      {
        text: 'The Fed cuts the federal funds rate to nearly zero. In the IS-MP framework, this is represented as:',
        choices: [
          'The IS curve shifts right',
          'The IS curve shifts left',
          'The MP curve shifts down',
          'The AD curve shifts right'
        ],
        correct: 2,
        explanation: 'A rate cut by the Fed is a downward shift of the MP curve (lower interest rate for any level of output). This is expansionary monetary policy in the IS-MP framework, moving the economy along the IS curve to higher output.'
      },
      {
        text: 'With the federal funds rate at zero (the zero lower bound), what additional tool can the Fed use?',
        choices: [
          'Raise reserve requirements to force bank lending',
          'Set negative nominal interest rates',
          'Use quantitative easing (QE) — buy bonds to lower long-term rates',
          'Directly print money and mail checks to households'
        ],
        correct: 2,
        explanation: 'At the zero lower bound, conventional rate cuts are exhausted. QE allows the Fed to buy long-term bonds (Treasuries, MBS), pushing down long-term rates and easing financial conditions beyond what the short rate alone can achieve.'
      }
    ],
    source: 'PS6, PS8 / Final'
  },
  {
    id: 'boss-03',
    topic: 'inflation',
    format: 'boss',
    title: 'Turkey\'s Inflation Spiral',
    parts: [
      {
        text: 'President Erdogan pressures Turkey\'s central bank to CUT rates while inflation is 40%. What happens to the real interest rate (r = i - π)?',
        choices: [
          'Real rate rises because lower nominal rates reduce inflation expectations',
          'Real rate falls — nominal rate i drops and inflation π stays high or rises',
          'Real rate is unchanged because markets adjust instantly',
          'Real rate rises because the currency depreciates'
        ],
        correct: 1,
        explanation: 'When the central bank cuts the nominal rate i while inflation π is high and rising, the real rate r = i - π falls. Both forces move in the wrong direction: i goes down, π stays elevated or rises.'
      },
      {
        text: 'In the IS-MP framework, falling real interest rates cause:',
        choices: [
          'Output to fall as investors lose confidence',
          'The IS curve to shift left',
          'Output to rise above potential temporarily',
          'No change — only nominal rates affect output'
        ],
        correct: 2,
        explanation: 'Lower real interest rates are expansionary in IS-MP. The MP curve shifts down, and the economy moves along the IS curve to a higher output level, temporarily pushing output above potential.'
      },
      {
        text: 'Output is now above potential. In the AD-IA framework, what happens to the IA (inflation adjustment) line?',
        choices: [
          'IA shifts down as firms compete for customers',
          'IA stays the same because inflation is already high',
          'IA shifts up, and inflation rises further',
          'IA disappears because the model breaks down at high inflation'
        ],
        correct: 2,
        explanation: 'When output exceeds potential (Y > Y*), there is excess demand. Firms raise prices, workers demand higher wages, and the IA line shifts up. This means inflation rises further — feeding back into even higher inflation expectations.'
      },
      {
        text: 'Why doesn\'t Turkey\'s inflation stabilize on its own under this policy?',
        choices: [
          'The exchange rate acts as an automatic stabilizer',
          'Inflation expectations are well-anchored at 2%',
          'The Taylor Principle is violated — the CB raises i by less than the rise in π, so real r falls and inflation accelerates',
          'The money supply is fixed, so inflation must eventually stop'
        ],
        correct: 2,
        explanation: 'The Taylor Principle requires the central bank to raise the nominal rate by MORE than the increase in inflation (Δi > Δπ) so the real rate rises and cools the economy. When the CB does the opposite (cuts rates), real rates fall, output stays above potential, and inflation keeps spiraling upward — an unstable equilibrium.'
      }
    ],
    source: 'PS7 / Final'
  },
  {
    id: 'boss-04',
    topic: 'exchange',
    format: 'boss',
    title: 'The Carry Trade Unwind',
    parts: [
      {
        text: 'The Bank of Japan (BOJ) unexpectedly raises interest rates. Investors had been borrowing yen at low rates to invest abroad (the carry trade). What happens to the carry trade?',
        choices: [
          'It becomes more profitable as Japanese assets rise',
          'It is unaffected because carry trades are hedged',
          'It unwinds — investors buy yen to repay loans and sell foreign assets',
          'It expands as higher rates signal confidence in Japan'
        ],
        correct: 2,
        explanation: 'The carry trade borrows in the low-rate currency (yen) and invests in higher-rate currencies. When the BOJ raises rates, the funding cost rises and the interest rate differential shrinks. Traders rush to unwind: they sell foreign assets and buy yen to repay their yen-denominated loans.'
      },
      {
        text: 'As carry trade investors rush to buy yen, what happens to the yen exchange rate?',
        choices: [
          'The yen depreciates as capital flows out of Japan',
          'The yen appreciates due to massive yen buying',
          'The exchange rate is unchanged because it was already priced in',
          'The yen depreciates because higher rates hurt Japanese stocks'
        ],
        correct: 1,
        explanation: 'Massive demand for yen to close carry trade positions drives the yen up (appreciation). This is the demand-for-yen effect in the foreign exchange market — more buyers than sellers of yen.'
      },
      {
        text: 'The yen has appreciated sharply. What does this do to Japan\'s net exports (NX)?',
        choices: [
          'NX rise because a strong yen signals economic strength',
          'NX are unaffected because trade is denominated in dollars',
          'NX fall because Japanese exports become more expensive for foreigners',
          'NX rise because imports become cheaper, boosting consumer spending'
        ],
        correct: 2,
        explanation: 'A stronger yen makes Japanese exports more expensive in foreign currency, reducing export demand. It also makes imports cheaper, increasing import volume. Both effects reduce NX = Exports - Imports.'
      },
      {
        text: 'With NX falling due to yen appreciation, what happens in the IS-MP framework for Japan?',
        choices: [
          'The MP curve shifts up, raising output',
          'The IS curve shifts right, increasing output',
          'The IS curve shifts left, reducing output',
          'Both curves shift, with an ambiguous effect on output'
        ],
        correct: 2,
        explanation: 'NX is a component of aggregate demand (Y = C + I + G + NX). Falling NX reduces demand at every interest rate, shifting the IS curve to the left. At the given MP rate, output falls. This illustrates the contractionary side effect of currency appreciation.'
      }
    ],
    source: 'PS4 / Final'
  },
  {
    id: 'boss-05',
    topic: 'multiplier',
    format: 'boss',
    title: 'Fiscal Stimulus Showdown',
    parts: [
      {
        text: 'The government sends $1,200 stimulus checks to households. The marginal propensity to consume (MPC) is 0.42. How much of each check is spent in the first round?',
        choices: [
          '$1,200 — all of it',
          '$504',
          '$696',
          '$420'
        ],
        correct: 1,
        explanation: 'With MPC = 0.42, households spend 42% of the transfer in the first round: $1,200 × 0.42 = $504. The remaining $696 is saved.'
      },
      {
        text: 'The transfer multiplier is MPC / (1 - MPC). With MPC = 0.42, what is the transfer multiplier?',
        choices: [
          '1.72',
          '0.42',
          '0.72',
          '2.38'
        ],
        correct: 2,
        explanation: 'Transfer multiplier = MPC / (1 - MPC) = 0.42 / 0.58 ≈ 0.72. Note this is less than 1 because not all of the initial transfer is spent. The spending multiplier (for direct government purchases) would be 1/(1-MPC) ≈ 1.72, which is larger because every dollar of G is spent directly.'
      },
      {
        text: 'Would the fiscal multiplier be higher or lower during a deep recession compared to full employment?',
        choices: [
          'Lower in recession — pessimism reduces spending',
          'The same — the multiplier is a fixed structural parameter',
          'Higher in recession — more slack means less crowding out',
          'It depends entirely on the exchange rate regime'
        ],
        correct: 2,
        explanation: 'During a recession with slack (and especially at the zero lower bound), the multiplier is larger because: (1) the central bank won\'t raise rates to offset fiscal expansion, (2) more idle resources are available, and (3) there is less crowding out of private investment.'
      },
      {
        text: 'Under a flexible exchange rate, fiscal stimulus is partially offset by:',
        choices: [
          'Higher tax revenues that automatically reduce the deficit',
          'Lower consumer confidence from rising government debt',
          'Currency appreciation that reduces net exports',
          'Central bank money printing that causes inflation'
        ],
        correct: 2,
        explanation: 'Under flexible exchange rates, fiscal expansion raises domestic interest rates, attracting foreign capital. Capital inflows cause the currency to appreciate, making exports expensive and imports cheap. This reduces NX, partially offsetting the fiscal stimulus. This is the Mundell-Fleming result for fiscal policy under flexible rates.'
      }
    ],
    source: 'PS10 / Final'
  },

  // ===== POLICY ADVISOR QUESTIONS (batch 2) =====
  {
    id: 'policy_adia_zlb',
    topic: 'adia',
    format: 'policy',
    text: 'The economy is in a deep recession with inflation well below target. As Fed Chair, you have already cut rates to zero. What next?',
    choices: [
      'Implement quantitative easing (buy long-term bonds)',
      'Use forward guidance to commit to keeping rates low',
      'Raise rates slightly to signal confidence',
      'Do nothing — monetary policy has done all it can'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'At the zero lower bound, QE (buying long-term assets) directly lowers long-term rates and injects liquidity. Forward guidance helps anchor expectations. Raising rates would be contractionary. "Do nothing" ignores unconventional tools available at the ZLB.',
    source: 'PS9 / Final'
  },
  {
    id: 'policy_labor_monopsony',
    topic: 'labor',
    format: 'policy',
    text: 'A labor market study reveals widespread monopsony power among employers in a region. Wages are below competitive levels. What policy do you recommend?',
    choices: [
      'Set a moderate minimum wage (can increase both wages AND employment under monopsony)',
      'Strengthen workers\' ability to collectively bargain',
      'Provide wage subsidies to employers who raise pay',
      'Reduce labor market regulation to attract more firms'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Under monopsony, a moderate minimum wage can actually increase employment (not decrease it) because the monopsonist was already restricting employment below competitive levels. Collective bargaining helps but is slower. Employer subsidies are costly. Deregulation doesn\'t address the structural monopsony problem.',
    source: 'PS4 / Final'
  },
  {
    id: 'policy_inflation_supply',
    topic: 'inflation',
    format: 'policy',
    text: 'Oil prices have spiked due to a supply shock. Inflation is rising but output is falling. As Fed Chair, what do you do?',
    choices: [
      'Hold rates steady — this is a supply shock that monetary policy can\'t fix',
      'Raise rates modestly to anchor inflation expectations',
      'Aggressively raise rates to crush inflation',
      'Cut rates to offset the output decline'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Supply shocks create a painful tradeoff. Holding steady is often best — the shock is temporary and raising rates would deepen the recession without addressing the supply problem. Modest tightening risks deepening the downturn. Aggressive tightening causes a severe recession. Cutting rates would fuel inflation further.',
    source: 'PS5 / Final'
  },
  {
    id: 'policy_growth_developing',
    topic: 'growth',
    format: 'policy',
    text: 'You advise a developing country\'s government on long-run growth strategy. GDP per capita is low and institutions are weak. What do you prioritize?',
    choices: [
      'Invest in human capital (education and health) and strengthen institutions',
      'Attract foreign direct investment with tax incentives',
      'Build infrastructure (roads, ports, power grid)',
      'Protect domestic industries with tariffs to build capacity'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Growth accounting and development research consistently show that human capital and institutional quality (rule of law, property rights) are the deepest determinants of long-run growth. FDI and infrastructure help but are less effective without good institutions. Protectionism creates inefficiency and rent-seeking.',
    source: 'Lecture / Final'
  },
  {
    id: 'policy_savings_ricardian',
    topic: 'savings',
    format: 'policy',
    text: 'Congress passes a large tax cut funded entirely by issuing new government bonds. As an economic advisor, what do you warn the president about?',
    choices: [
      'Households may save the tax cut to pay future taxes, blunting the stimulus (Ricardian equivalence)',
      'The tax cut will definitely boost spending because households don\'t think that far ahead',
      'Bond-financed tax cuts always increase national saving',
      'The deficit will shrink because higher growth pays for the tax cut'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Ricardian equivalence says rational households recognize that bond-financed tax cuts mean higher future taxes, so they save the windfall rather than spend it. In practice, the effect is partial — some households are credit-constrained or myopic — but the risk of a muted stimulus is the key concern. The deficit will rise, not shrink, and national saving falls.',
    source: 'PS3 / Final'
  },
  {
    id: 'policy_gdp_wellbeing',
    topic: 'gdp',
    format: 'policy',
    text: 'A senator proposes replacing GDP with a broader well-being index as the primary policy target. As an economic advisor, what is your assessment?',
    choices: [
      'GDP misses leisure, inequality, environmental costs, and home production — supplementing it with broader measures is sound',
      'GDP is the best single measure of well-being and should remain the sole target',
      'GDP already captures everything that matters for policy',
      'Well-being is too subjective to measure, so we should ignore it entirely'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'GDP measures market output but misses leisure, household production, environmental degradation, health, inequality, and other welfare-relevant dimensions. Supplementing GDP with broader measures (like the HDI or dashboards) gives policymakers a more complete picture. GDP remains useful for tracking output, but it is not a welfare measure.',
    source: 'Lecture / Final'
  },
  {
    id: 'policy_solow_savings',
    topic: 'solow',
    format: 'policy',
    text: 'A country\'s capital-output ratio is well below its Golden Rule level. As economic advisor, what do you recommend to raise long-run consumption per capita?',
    choices: [
      'Increase the national saving rate through policy incentives (the economy is below the Golden Rule)',
      'Decrease the saving rate to boost consumption immediately',
      'The saving rate doesn\'t matter for long-run consumption',
      'Increase population growth to expand the labor force'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'When capital per worker is below the Golden Rule level (k* where MPK = delta + n + g), raising the saving rate increases steady-state consumption per capita. There is a short-run cost (less consumption now) but a permanent long-run gain. Lowering savings would reduce steady-state capital further. Population growth actually lowers k* in the Solow model.',
    source: 'PS2 / Final'
  },
  {
    id: 'policy_banking_run',
    topic: 'banking',
    format: 'policy',
    text: 'You are the Treasury Secretary. Depositors at several mid-size banks are panicking and lining up to withdraw funds. What is the best immediate response?',
    choices: [
      'Announce that deposits are fully insured and activate the Fed\'s discount window lending',
      'Guarantee only the largest banks\' deposits (too big to fail)',
      'Let the bank runs play out — market discipline is healthy',
      'Freeze all bank withdrawals until the panic subsides'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Bank runs are self-fulfilling: even solvent banks fail if everyone withdraws at once (Diamond-Dybvig). Deposit insurance and lender-of-last-resort lending (discount window) break the coordination failure by removing the incentive to run. Guaranteeing only large banks creates moral hazard and lets small banks fail. Letting runs play out causes contagion. Freezing withdrawals worsens panic and destroys trust.',
    source: 'Lecture / Final'
  },
  {
    id: 'policy_expectations_disinflation',
    topic: 'inflation',
    format: 'policy',
    text: 'Inflation has been 8% for two years and expectations are becoming entrenched. You are the new Fed Chair. How do you bring inflation down with the least pain?',
    choices: [
      'Announce a credible disinflationary commitment and raise rates — if expectations adjust quickly, the sacrifice ratio is low',
      'Raise rates gradually over several years without any public commitment',
      'Implement wage and price controls to directly cap inflation',
      'Wait for inflation to come down on its own'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'If the central bank can credibly commit to disinflation, inflation expectations adjust faster and the output cost (sacrifice ratio) is lower — this is the Volcker lesson. Gradual tightening without communication lets expectations stay anchored at 8%. Price controls create shortages and don\'t address root causes. Waiting risks expectations becoming permanently entrenched.',
    source: 'PS7 / Final'
  },
  {
    id: 'policy_exchange_trilemma',
    topic: 'exchange',
    format: 'policy',
    text: 'A small open economy wants free capital flows AND an independent monetary policy. What must they give up, according to the Mundell-Fleming trilemma?',
    choices: [
      'A fixed exchange rate — you can only have 2 of the 3: free capital flows, independent monetary policy, fixed exchange rate',
      'Free capital flows — they must impose capital controls',
      'Independent monetary policy — they must follow the world interest rate',
      'Nothing — a country can achieve all three simultaneously'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'The Mundell-Fleming trilemma (impossible trinity) states you can only have 2 of 3: free capital mobility, independent monetary policy, and a fixed exchange rate. Choosing free capital flows + independent policy means a floating exchange rate. This is the regime most advanced economies choose (US, eurozone members gave up independent policy, China restricts capital flows).',
    source: 'PS4 / Final'
  },
  {
    id: 'policy_tariff_large',
    topic: 'tariff',
    format: 'policy',
    text: 'You are the trade advisor to a LARGE country (like the US) considering tariffs. How does the welfare analysis differ from a small country imposing tariffs?',
    choices: [
      'A large country\'s tariff can improve its terms of trade, potentially creating net gains — but retaliation risk makes it risky',
      'Large and small country tariff effects are identical',
      'Large countries never benefit from tariffs',
      'Large countries should always impose maximum tariffs'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'A large country can influence world prices. Its tariff reduces import demand enough to lower the world price, improving its terms of trade. The "optimal tariff" trades off this terms-of-trade gain against DWL. However, retaliation turns this into a prisoner\'s dilemma where both sides lose — which is why multilateral free trade agreements exist.',
    source: 'PS3 / Final'
  },
  {
    id: 'policy_open_twin_deficits',
    topic: 'exchange',
    format: 'policy',
    text: 'The US is running large budget deficits and a large current account deficit simultaneously. A senator asks if these are related. What do you explain?',
    choices: [
      'Yes — the "twin deficits" identity: budget deficits reduce national saving, which (if investment is stable) widens the current account deficit',
      'No — budget deficits and trade deficits are completely independent',
      'Budget deficits always improve the current account by boosting exports',
      'The current account deficit is caused only by unfair foreign trade practices'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'The national accounting identity S - I = NX shows that when the government runs a deficit (reducing national saving S), and private saving/investment don\'t fully offset it, net exports (NX) must fall — widening the current account deficit. This is the "twin deficits" hypothesis. The link is not mechanical (private saving can adjust), but the accounting identity holds.',
    source: 'PS6 / Final'
  },

  // ===== POLICY: Study Plan Chain Reactions =====
  {
    id: 'policy_flex_fiscal_muted',
    topic: 'exchange',
    format: 'policy',
    text: 'You are the Treasury Secretary of a country with a flexible exchange rate. Congress passes a large spending bill to stimulate the economy. An advisor warns the stimulus will be weaker than expected. Why?',
    choices: [
      'Higher r from fiscal expansion attracts capital inflows → currency appreciates → NX falls → IS partly shifts back (fiscal is MUTED under flexible ER)',
      'The central bank will raise rates to fully offset the stimulus',
      'Government spending always crowds out private investment one-for-one',
      'The exchange rate has no effect on fiscal policy effectiveness'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Under flexible exchange rates, fiscal expansion raises domestic interest rates, attracting foreign capital. Capital inflows cause the domestic currency to appreciate, making exports expensive and imports cheap. Net exports fall, partially offsetting the fiscal stimulus. This is the Mundell-Fleming result: fiscal policy is MUTED under flexible rates.',
    source: 'Study Plan / PS4'
  },
  {
    id: 'policy_flex_foreign_rate_rise',
    topic: 'exchange',
    format: 'policy',
    text: 'The ECB unexpectedly raises interest rates. You advise a small country with a floating exchange rate. What chain of events do you predict for domestic output?',
    choices: [
      'Capital exits seeking higher foreign returns → domestic currency depreciates → NX rises → IS shifts right → output RISES',
      'Capital exits → domestic currency depreciates → output FALLS',
      'Nothing — foreign rate changes don\'t affect a floating-rate economy',
      'Capital inflows → currency appreciates → output FALLS'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'When foreign rates rise, domestic assets become less attractive. Capital flows out, depreciating the domestic currency (IRP). A weaker currency boosts exports and cuts imports, shifting IS right and raising domestic output. Under flexible rates, a foreign rate hike is actually STIMULATIVE for the domestic economy via the depreciation channel.',
    source: 'Study Plan / PS4'
  },
  {
    id: 'policy_fixed_risk_premium',
    topic: 'exchange',
    format: 'policy',
    text: 'Political instability causes the risk premium on your country\'s assets to spike. Your country has a FIXED exchange rate peg. What happens?',
    choices: [
      'Investors sell domestic assets → downward pressure on currency → CB must RAISE rates and sell reserves to defend peg → investment falls → output FALLS (recession)',
      'The currency depreciates, boosting exports and raising output',
      'The central bank can ignore the risk premium under a fixed rate',
      'Risk premiums only affect countries with floating exchange rates'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Under a fixed ER, when the risk premium rises, capital flight puts downward pressure on the currency. The CB must sell foreign reserves and raise domestic interest rates to maintain the peg. Higher rates crush investment and output falls — a forced recession. This is the opposite of the flexible-rate case where depreciation would boost NX and raise output. Real examples: Qatar/Saudi Arabia when US raised r*.',
    source: 'Study Plan / PS7'
  },
  {
    id: 'policy_fixed_monetary_lost',
    topic: 'exchange',
    format: 'policy',
    text: 'A country with a fixed exchange rate is in recession. The central bank wants to cut interest rates to stimulate the economy. What happens?',
    choices: [
      'Monetary policy is LOST — cutting rates would cause capital outflows and break the peg; the CB must match foreign rates',
      'Rate cuts work normally under fixed exchange rates',
      'Rate cuts are amplified because the exchange rate acts as an additional channel',
      'The CB can cut rates freely as long as the peg is maintained'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Under a fixed exchange rate, the CB must set domestic rates to maintain the peg (interest rate parity). If it cuts rates below the foreign rate, capital flows out, putting massive downward pressure on the currency. The CB would have to spend all its reserves defending the peg. Result: monetary policy is LOST. The CB has given up monetary independence in exchange for exchange rate stability (the trilemma).',
    source: 'Study Plan / PS4'
  },
  {
    id: 'policy_fixed_fiscal_amplified',
    topic: 'exchange',
    format: 'policy',
    text: 'A country with a fixed exchange rate runs expansionary fiscal policy (↑G). How does the fixed rate affect the stimulus compared to a closed economy?',
    choices: [
      'Fiscal policy is MORE effective than a closed economy — higher r attracts capital inflows → CB must buy foreign currency (lower r) to prevent appreciation → investment also rises',
      'Fiscal policy works the same as in a closed economy',
      'Fiscal policy is LESS effective because the exchange rate appreciates',
      'Fiscal policy has no effect under a fixed exchange rate'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'Under fixed ER, fiscal expansion raises r, attracting capital inflows that put upward pressure on the currency. To prevent appreciation, the CB must buy foreign currency and sell domestic currency, effectively LOWERING domestic interest rates. This adds even more stimulus — investment rises on top of the original fiscal boost. Fixed ER: fiscal MORE effective than closed economy. Flexible ER: fiscal MUTED. The ranking is: Fixed > Closed > Flexible.',
    source: 'Study Plan / PS4'
  },
  {
    id: 'policy_lr_neutrality_money',
    topic: 'adia',
    format: 'policy',
    text: 'A new central bank chair is appointed who sets permanently lower interest rates. What is the LONG-RUN outcome for output, inflation, and the real interest rate?',
    choices: [
      'Output UNCHANGED (returns to Y*), inflation permanently HIGHER, real interest rate UNCHANGED in long run',
      'Output permanently HIGHER due to sustained monetary stimulus',
      'Output and inflation both return to their original levels',
      'Output permanently LOWER because lower rates signal a weak economy'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'This is the long-run neutrality of money. Lower rates boost output above Y* in the short run, causing inflation to rise (IA shifts up). As inflation rises, the economy moves along AD back to Y*. In the long run, output returns to potential, but inflation is permanently higher. Money is neutral in the long run — monetary policy cannot permanently raise output above potential.',
    source: 'Study Plan / Final'
  },
  {
    id: 'policy_ecb_swiss',
    topic: 'exchange',
    format: 'policy',
    text: 'The ECB raises interest rates. Switzerland has a floating exchange rate and lower inflation. You advise the Swiss National Bank. What happens to Swiss output?',
    choices: [
      'Swiss franc depreciates (capital flows to higher-yielding euro assets) → Swiss exports become cheaper → NX rises → IS shifts right → Swiss output RISES',
      'Swiss franc appreciates → Swiss exports become more expensive → output FALLS',
      'No effect — Switzerland\'s floating rate insulates it from ECB policy',
      'Swiss output falls because European demand for Swiss exports decreases'
    ],
    scores: [3, 2, 1, 0],
    explanation: 'When the ECB raises rates, euro-denominated assets offer higher returns. Capital flows from Switzerland to the Eurozone, depreciating the Swiss franc. A weaker franc makes Swiss exports cheaper for Europeans and foreign goods more expensive for the Swiss, boosting net exports. IS shifts right and Swiss output rises. This is the open-economy transmission under flexible exchange rates.',
    source: 'Study Plan / Active Recall Set 1'
  },

  // ===== BOSS BATTLE QUESTIONS =====
  {
    id: 'boss_ismp_shock',
    topic: 'ismp',
    format: 'boss',
    title: 'The Rate Hike Cascade',
    parts: [
      {
        text: 'Part 1: A wave of consumer optimism increases autonomous spending. In the IS-MP model, what happens FIRST?',
        choices: ['IS curve shifts right', 'MP curve shifts up', 'IS curve shifts left', 'MP curve shifts down'],
        correct: 0,
        explanation: 'Increased consumer spending is a positive demand shock. This shifts the IS curve to the right — at every interest rate, desired spending is now higher.'
      },
      {
        text: 'Part 2: After the IS shift, output rises above potential. The central bank follows its monetary policy rule. What happens to the MP curve?',
        choices: ['MP shifts up (rate rises)', 'MP stays the same', 'MP shifts down (rate falls)', 'MP becomes steeper'],
        correct: 0,
        explanation: 'The monetary policy rule says: when output exceeds potential, raise the interest rate. The MP curve shifts up, partially offsetting the demand boom.'
      },
      {
        text: 'Part 3: In the new short-run equilibrium (after both shifts), compared to the original equilibrium, what is true?',
        choices: [
          'Output is higher and interest rate is higher',
          'Output is higher and interest rate is unchanged',
          'Output is unchanged and interest rate is higher',
          'Output is lower and interest rate is higher'
        ],
        correct: 0,
        explanation: 'The IS shift right increases both Y and r. The MP shift up further increases r but partially reduces Y. Net result: Y is still above original (IS shift dominated) and r is clearly higher.'
      },
      {
        text: 'Part 4: Now translate to the AD-IA framework. This demand shock shifts which curve?',
        choices: ['AD shifts right', 'IA shifts up', 'AD shifts left', 'IA shifts down'],
        correct: 0,
        explanation: 'A positive demand shock in IS-MP translates to a rightward shift of the AD curve in the AD-IA-LR framework. The IA curve only shifts when inflation expectations or supply conditions change.'
      }
    ],
    source: 'PS5 / Final'
  },
  {
    id: 'boss_tariff_welfare',
    topic: 'tariff',
    format: 'boss',
    title: 'The Tariff Showdown',
    parts: [
      {
        text: 'Part 1: A small country imports steel at the world price Pw. It imposes a tariff of $t per unit. What happens to the domestic price?',
        choices: [
          'Domestic price rises to Pw + t',
          'Domestic price stays at Pw',
          'Domestic price rises to Pw + t/2',
          'Domestic price falls because of reduced demand'
        ],
        correct: 0,
        explanation: 'For a small country (price taker), a tariff raises the domestic price by the full amount of the tariff: Pd = Pw + t. The country is too small to affect the world price.'
      },
      {
        text: 'Part 2: With the higher domestic price, domestic producers increase output. This producer surplus gain is what area on the supply-demand diagram?',
        choices: [
          'The area between the old and new price, left of the supply curve',
          'The full rectangle of tariff revenue',
          'The area between the supply and demand curves',
          'The triangle to the right of the demand curve'
        ],
        correct: 0,
        explanation: 'Producer surplus gain is the area between Pw and Pw+t, to the left of the supply curve. Domestic producers benefit from the higher price on both existing and expanded output.'
      },
      {
        text: 'Part 3: The tariff generates government revenue. Tariff revenue equals:',
        choices: [
          't × (imports after tariff)',
          't × (imports before tariff)',
          't × (domestic production)',
          't × (total consumption)'
        ],
        correct: 0,
        explanation: 'Tariff revenue = tariff rate × quantity of imports AFTER the tariff is imposed. Imports shrink because the tariff raises the domestic price, increasing domestic supply and decreasing demand.'
      },
      {
        text: 'Part 4: The net welfare effect of the tariff on this small country is:',
        choices: [
          'Negative — the deadweight loss triangles exceed any gains',
          'Positive — tariff revenue plus producer surplus outweigh consumer loss',
          'Zero — all gains and losses exactly cancel',
          'Ambiguous — depends on elasticities'
        ],
        correct: 0,
        explanation: 'For a SMALL country, a tariff always reduces total welfare. Consumer surplus loss exceeds producer surplus gain + tariff revenue. The difference is two DWL triangles: one from production inefficiency, one from consumption distortion.'
      }
    ],
    source: 'PS6 / Final'
  },
  {
    id: 'boss_debt_dynamics',
    topic: 'debt',
    format: 'boss',
    title: 'The Debt Spiral',
    parts: [
      {
        text: 'Part 1: The debt dynamics equation is Δ(D/Y) = (r - g)(D/Y) - pb, where pb is the primary balance as share of GDP. If r = 5%, g = 3%, D/Y = 100%, and pb = 0, what is Δ(D/Y)?',
        choices: ['+2 percentage points', '+5 percentage points', '-2 percentage points', '0 (stable)'],
        correct: 0,
        explanation: 'Δ(D/Y) = (0.05 - 0.03)(1.00) - 0 = 0.02 = +2 percentage points. With r > g and no primary surplus, debt/GDP rises by 2pp per year.'
      },
      {
        text: 'Part 2: To STABILIZE the debt ratio at 100%, what primary balance (pb) is needed?',
        choices: [
          'Primary surplus of 2% of GDP',
          'Primary surplus of 5% of GDP',
          'Primary deficit of 2% of GDP',
          'Balanced budget (pb = 0)'
        ],
        correct: 0,
        explanation: 'Set Δ(D/Y) = 0: 0 = (r-g)(D/Y) - pb → pb = (0.05-0.03)(1.00) = 0.02 = 2% surplus. The primary surplus must exactly offset the debt snowball effect of r > g.'
      },
      {
        text: 'Part 3: Suppose growth falls to 1% (g = 1%) while r stays at 5%. Now what primary surplus stabilizes D/Y at 100%?',
        choices: ['4% of GDP', '2% of GDP', '6% of GDP', '1% of GDP'],
        correct: 0,
        explanation: 'pb = (r-g)(D/Y) = (0.05-0.01)(1.00) = 0.04 = 4% of GDP. Lower growth makes debt stabilization much harder — the required surplus doubles.'
      }
    ],
    source: 'PS8 / Final'
  },
  {
    id: 'boss_exchange_crisis',
    topic: 'exchange',
    format: 'boss',
    title: 'The Currency Crisis',
    parts: [
      {
        text: 'Part 1: Interest rate parity (IRP) states: i_domestic = i_foreign + expected depreciation. If US rates are 5% and Japan rates are 1%, what does IRP predict for the yen?',
        choices: [
          'Yen is expected to appreciate ~4% against the dollar',
          'Yen is expected to depreciate ~4% against the dollar',
          'No change expected — rates are independent of exchange rates',
          'Yen is expected to appreciate ~1% against the dollar'
        ],
        correct: 0,
        explanation: 'IRP: i_US = i_Japan + expected yen depreciation. 5% = 1% + E(dep). So expected depreciation of yen = 4%. But this means the yen is expected to APPRECIATE (gain value) by 4%. Higher US rates compensate investors for holding a currency expected to weaken.'
      },
      {
        text: 'Part 2: A country with a fixed exchange rate runs large fiscal deficits funded by money printing. What pressure does this create?',
        choices: [
          'Pressure for the currency to depreciate (central bank must defend the peg)',
          'Pressure for the currency to appreciate',
          'No exchange rate pressure if the peg is credible',
          'The fiscal deficit has no effect on the exchange rate'
        ],
        correct: 0,
        explanation: 'Money printing increases the money supply, pushing domestic interest rates down. Lower rates cause capital outflows, creating depreciation pressure. The central bank must sell foreign reserves to defend the peg.'
      },
      {
        text: 'Part 3: As reserves run low, speculators attack the currency. If the central bank abandons the peg, what typically happens?',
        choices: [
          'Large sudden depreciation (overshooting), higher inflation, possible banking crisis',
          'Smooth gradual depreciation to a new equilibrium',
          'The currency strengthens as uncertainty is resolved',
          'No change — the market price was already at the pegged level'
        ],
        correct: 0,
        explanation: 'When a peg collapses, the currency typically overshoots — depreciating far beyond the long-run equilibrium. This causes imported inflation, may trigger a banking crisis if banks have foreign-currency liabilities, and can lead to a deep recession.'
      },
      {
        text: 'Part 4: After the crisis, the country adopts a flexible exchange rate. Under flexible rates, which policy tool is MORE effective?',
        choices: [
          'Monetary policy (interest rate changes are amplified by exchange rate effects)',
          'Fiscal policy (government spending multiplier is larger)',
          'Both are equally effective',
          'Neither — flexible rates make all policy ineffective'
        ],
        correct: 0,
        explanation: 'Under flexible exchange rates, monetary policy is amplified: a rate cut causes depreciation, boosting net exports on top of the direct demand effect. Fiscal policy is partially crowded out: fiscal expansion raises rates, causes appreciation, and reduces net exports (Mundell-Fleming).'
      }
    ],
    source: 'PS7 / Final'
  },
  {
    id: 'boss_adia_full',
    topic: 'adia',
    format: 'boss',
    title: 'The Long-Run Adjustment',
    parts: [
      {
        text: 'Part 1: In the AD-IA-LR model, the economy starts at long-run equilibrium. A negative demand shock hits (e.g., housing crash). Which curve shifts?',
        choices: ['AD shifts left', 'IA shifts down', 'LR shifts left', 'AD shifts right'],
        correct: 0,
        explanation: 'A negative demand shock shifts AD to the left. Output falls below potential and inflation falls. The IA and LR curves don\'t move initially — IA reflects past inflation, LR reflects potential output.'
      },
      {
        text: 'Part 2: After the AD shift, the economy is in short-run equilibrium with Y < Y* and π < π*. Over time, what happens?',
        choices: [
          'IA curve shifts down as inflation expectations adjust to lower actual inflation',
          'IA curve shifts up as firms try to restore margins',
          'AD shifts back right automatically',
          'LR shifts left to match the lower output'
        ],
        correct: 0,
        explanation: 'With output below potential, inflation falls below expected. Over time, inflation expectations adjust downward, shifting the IA curve down. This is the economy\'s self-correcting mechanism — lower inflation eventually restores output to potential.'
      },
      {
        text: 'Part 3: As IA shifts down, the economy moves along the new AD curve. In the NEW long-run equilibrium, what is true?',
        choices: [
          'Output returns to Y* but inflation is permanently lower',
          'Output stays below Y* and inflation is lower',
          'Both output and inflation return to original levels',
          'Output exceeds Y* with lower inflation'
        ],
        correct: 0,
        explanation: 'The self-correcting mechanism brings output back to potential (Y*) — that\'s what long-run equilibrium means. But inflation settles at a permanently lower rate because the AD curve is still in its leftward-shifted position. The economy finds a new long-run equilibrium at the intersection of new AD, shifted IA, and LR.'
      }
    ],
    source: 'PS9 / Final'
  },
];
