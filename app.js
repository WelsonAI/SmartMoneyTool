"use strict";

const ml = (ms, zh, en) => ({ ms, zh, en });

const I18N = {
  title: ml("Jom Kenali Wang!", "一起来认识金钱！", "Let's Explore Money!"),
  subtitle: ml("Kenal, susun dan urus wang dengan bijak.", "认识、组合，并学习明智理财。", "Recognise, compose and manage money wisely."),
  soundOn: ml("Bunyi: Buka", "声音：开", "Sound: On"),
  soundOff: ml("Bunyi: Tutup", "声音：关", "Sound: Off"),
  tabMoney: ml("Kenal & Bina", "认识与组合", "Recognise & Build"),
  tabSpend: ml("Bayar & Belanja", "付款与消费", "Pay & Spend"),
  tabManage: ml("Urus Wang", "管理金钱", "Manage Money"),
  tabFinance: ml("Celik Kewangan", "金融常识", "Financial Skills"),
  chooseActivity: ml("Pilih aktiviti", "选择活动", "Choose an activity"),
  grade: ml("Tahun", "年级", "Year"),
  activity: ml("Aktiviti", "活动", "Activity"),
  teacherMode: ml("Soalan guru", "老师出题", "Teacher question"),
  newQuestion: ml("Soalan baharu", "换一道题", "New question"),
  tryIt: ml("Mari cuba!", "试试看！", "Have a go!"),
  listen: ml("Dengar", "听题目", "Listen"),
  reset: ml("Mula semula", "重新开始", "Start again"),
  check: ml("Semak", "检查", "Check"),
  next: ml("Seterusnya", "下一题", "Next"),
  stepObserve: ml("Perhatikan", "仔细观察", "Observe"),
  stepTry: ml("Cuba jawapan", "尝试作答", "Try an answer"),
  stepCheck: ml("Semak & faham", "检查并理解", "Check & understand"),
  customQuestion: ml("Bina soalan sendiri", "自订题目", "Create a question"),
  customHelp: ml("Masukkan nilai untuk aktiviti mengenal, membina atau membayar.", "输入金额，制作认钱、组合金额或付款题目。", "Enter an amount for recognising, composing or paying."),
  ringgit: ml("Ringgit", "令吉", "Ringgit"),
  sen: ml("Sen", "仙", "Sen"),
  cancel: ml("Batal", "取消", "Cancel"),
  useQuestion: ml("Gunakan soalan", "使用这道题", "Use this question"),
  actIdentify: ml("Kenal wang", "认识钱币", "Recognise money"),
  actCompose: ml("Bina jumlah", "组合金额", "Build an amount"),
  actPay: ml("Bayar tepat", "准确付款", "Pay exactly"),
  neutral: ml("Perhatikan bahan, kemudian pilih jawapan.", "先观察，再选择答案。", "Observe, then choose your answer."),
  chooseFirst: ml("Pilih jawapan dahulu.", "请先选择答案。", "Choose an answer first."),
  addMoney: ml("Klik wang untuk memasukkannya ke dalam dompet.", "点击钱币，把它放进钱包。", "Click money to add it to the wallet."),
  correct: ml("Bagus! Jawapan kamu betul.", "答对了！做得好。", "Well done! Your answer is correct."),
  wrong: ml("Belum tepat. Cuba perhatikan sekali lagi.", "还不正确，再仔细观察一次。", "Not quite. Look carefully and try again."),
  wallet: ml("Jumlah dalam dompet", "钱包里的总额", "Total in wallet"),
  emptyWallet: ml("Dompet masih kosong. Pilih wang di bawah.", "钱包还是空的，请从下方选择钱币。", "The wallet is empty. Choose money below."),
  moneyChoices: ml("Wang Malaysia", "马来西亚钱币", "Malaysian money"),
  removeHint: ml("Klik wang di dalam dompet untuk mengeluarkannya.", "点击钱包里的钱币可以移除。", "Click money in the wallet to remove it."),
  officialSource: ml("Imej: Bank Negara Malaysia", "图片：马来西亚国家银行", "Images: Bank Negara Malaysia"),
  target: ml("Jumlah sasaran", "目标金额", "Target amount"),
  notAvailable: ml("Aktiviti ini bermula pada tahun lain. Pilih tab yang tersedia.", "这个年级还没有学习这项内容，请选择可用的活动。", "This topic starts in another year. Choose an available tab."),
  teacherInvalid: ml("Untuk kenal wang, nilai mesti sama dengan satu wang kertas atau syiling. Nilai sen mestilah gandaan 5.", "认钱题必须是单张纸币或单枚硬币的面额；仙必须是 5 的倍数。", "For recognition, use one banknote or coin denomination. Sen must be a multiple of 5."),
  teacherRange: ml("Jumlah mesti antara 5 sen hingga RM500.00.", "金额必须介于 5 仙至 RM500.00。", "The amount must be between 5 sen and RM500.00."),
};

const ACTIVITIES = {
  identify: { label: ml("Kenal wang Malaysia", "认识马来西亚钱币", "Recognise Malaysian money"), scope: ml("Tahun 2 · Wang hingga RM100", "二年级 · 金额至 RM100", "Year 2 · Money up to RM100"), tip: ml("Perhatikan nombor dan unit pada wang.", "观察钱币上的数字和单位。", "Look at the number and unit on the money.") },
  compose: { label: ml("Bina jumlah wang", "组合金额", "Build an amount"), scope: ml("Tahun 2–3 · Nilai dan gabungan wang", "二至三年级 · 金额与钱币组合", "Years 2–3 · Values and money combinations"), tip: ml("Gunakan beberapa wang untuk membina jumlah sasaran.", "用几张纸币或硬币组成目标金额。", "Use several notes or coins to build the target." ) },
  equivalent: { label: ml("Gabungan sama nilai", "等值组合", "Equivalent combinations"), scope: ml("Tahun 2–3 · Nilai yang sama", "二至三年级 · 相同币值", "Years 2–3 · Equal values"), tip: ml("Wang yang berlainan boleh mempunyai jumlah yang sama.", "不同的钱币组合可以有相同总值。", "Different combinations can have the same total." ) },
  foreign: { label: ml("Wang negara lain", "外国货币", "Foreign currencies"), scope: ml("Tahun 3–4 · Nama mata wang", "三至四年级 · 货币名称", "Years 3–4 · Currency names"), tip: ml("Nilai nombor yang sama tidak semestinya bernilai sama.", "相同的数字不代表相同的价值。", "The same number does not always mean the same value." ) },
  pay: { label: ml("Bayar dengan tepat", "准确付款", "Pay exactly"), scope: ml("Tahun 2–3 · Situasi harian", "二至三年级 · 日常付款情境", "Years 2–3 · Everyday payment"), tip: ml("Bina harga tepat menggunakan wang Malaysia.", "用马来西亚钱币组成准确价格。", "Make the exact price using Malaysian money." ) },
  methods: { label: ml("Cara pembayaran", "付款方式", "Payment methods"), scope: ml("Tahun 3–4 · Tunai dan tanpa tunai", "三至四年级 · 现金与无现金付款", "Years 3–4 · Cash and cashless payments"), tip: ml("Pilih alat pembayaran yang sesuai dengan situasi.", "根据情境选择适合的付款方式。", "Choose a suitable payment method for the situation." ) },
  receipt: { label: ml("Kenal dokumen urus niaga", "认识交易文件", "Transaction documents"), scope: ml("Tahun 4–6 · Resit, bil dan invois", "四至六年级 · 收据、账单与发票", "Years 4–6 · Receipt, bill and invoice"), tip: ml("Cari petunjuk seperti sudah dibayar atau perlu dibayar.", "留意“已付款”或“待付款”等线索。", "Look for clues such as paid or amount due." ) },
  needWant: { label: ml("Keperluan atau kehendak", "需要还是想要", "Needs or wants"), scope: ml("Tahun 2–3 · Pengurusan wang", "二至三年级 · 金钱管理", "Years 2–3 · Money management"), tip: ml("Keperluan didahulukan sebelum kehendak.", "先满足需要，再考虑想要。", "Needs come before wants." ) },
  savingPlan: { label: ml("Simpan untuk matlamat", "为目标储蓄", "Save for a goal"), scope: ml("Tahun 2 · Simpanan terancang", "二年级 · 有计划地储蓄", "Year 2 · Planned saving"), tip: ml("Simpan sedikit demi sedikit sehingga cukup.", "一点一点储蓄，直到达成目标。", "Save a little at a time until you reach the goal." ) },
  budget: { label: ml("Pilih rancangan wang", "选择金钱计划", "Choose a money plan"), scope: ml("Tahun 3–5 · Bajet dan keputusan", "三至五年级 · 预算与决定", "Years 3–5 · Budget and decisions"), tip: ml("Utamakan keperluan, simpanan dan perbelanjaan yang mampu.", "优先考虑需要、储蓄和负担得起的开销。", "Prioritise needs, savings and affordable spending." ) },
  wiseChoice: { label: ml("Keputusan kewangan bijak", "明智的理财决定", "Wise financial decisions"), scope: ml("Tahun 4 · Merancang kewangan", "四年级 · 财务规划", "Year 4 · Financial planning"), tip: ml("Bandingkan pilihan sebelum berbelanja.", "消费前先比较不同选择。", "Compare choices before spending." ) },
  cashless: { label: ml("Alat pembayaran tanpa tunai", "无现金付款工具", "Cashless payment tools"), scope: ml("Tahun 3 · Kad dan e-dompet", "三年级 · 银行卡与电子钱包", "Year 3 · Cards and e-wallets"), tip: ml("Kad dan e-dompet bukan wang percuma.", "银行卡和电子钱包里的钱并不是免费的。", "Cards and e-wallets are not free money." ) },
  cashCredit: { label: ml("Tunai atau kredit", "现金还是信贷", "Cash or credit"), scope: ml("Tahun 4–5 · Kaedah pembelian", "四至五年级 · 购买方式", "Years 4–5 · Ways to buy"), tip: ml("Kredit ialah hutang yang perlu dibayar semula.", "信贷是日后必须偿还的债务。", "Credit is debt that must be repaid." ) },
  saveInvest: { label: ml("Simpanan atau pelaburan", "储蓄还是投资", "Saving or investment"), scope: ml("Tahun 5 · Risiko dan pulangan", "五年级 · 风险与回报", "Year 5 · Risk and return"), tip: ml("Simpanan lebih mudah digunakan; pelaburan mempunyai risiko.", "储蓄较容易取用；投资带有风险。", "Savings are easier to access; investments carry risk." ) },
  simpleCompound: { label: ml("Faedah mudah dan kompaun", "单利与复利", "Simple and compound interest"), scope: ml("Tahun 5 · Pertumbuhan simpanan", "五年级 · 储蓄增长", "Year 5 · Growth of savings"), tip: ml("Faedah kompaun dikira atas jumlah yang semakin bertambah.", "复利按照不断增加的总额计算。", "Compound interest is based on a growing total." ) },
  creditDebt: { label: ml("Kredit dan hutang", "信贷与债务", "Credit and debt"), scope: ml("Tahun 5 · Tanggungjawab kewangan", "五年级 · 财务责任", "Year 5 · Financial responsibility"), tip: ml("Pinjaman perlu dibayar mengikut syarat yang dipersetujui.", "贷款必须按照同意的条件偿还。", "Loans must be repaid under the agreed terms." ) },
  financialDecision: { label: ml("Buat pilihan kewangan", "作出财务选择", "Make financial choices"), scope: ml("Tahun 6 · Keputusan bertanggungjawab", "六年级 · 负责任的决定", "Year 6 · Responsible decisions"), tip: ml("Semak keperluan, kemampuan dan risiko sebelum memilih.", "选择前检查需要、负担能力和风险。", "Check needs, affordability and risk before choosing." ) },
  profitLoss: { label: ml("Untung atau rugi", "盈利还是亏损", "Profit or loss"), scope: ml("Tahun 6 · Harga kos dan harga jual", "六年级 · 成本价与售价", "Year 6 · Cost and selling prices"), tip: ml("Bandingkan harga jual dengan harga kos.", "比较售价与成本价。", "Compare the selling price with the cost price." ) },
  discount: { label: ml("Diskaun, rebat dan baucar", "折扣、回扣与礼券", "Discount, rebate and voucher"), scope: ml("Tahun 6 · Pembelian bijak", "六年级 · 精明消费", "Year 6 · Smart buying"), tip: ml("Kenal pasti cara setiap tawaran mengurangkan bayaran.", "辨认每种优惠如何减少付款。", "Identify how each offer reduces payment." ) },
  documents: { label: ml("Bil, invois dan resit", "账单、发票与收据", "Bill, invoice and receipt"), scope: ml("Tahun 6 · Dokumen kewangan", "六年级 · 财务文件", "Year 6 · Financial documents"), tip: ml("Dokumen yang berbeza mempunyai tujuan yang berbeza.", "不同文件有不同用途。", "Different documents serve different purposes." ) },
  assetsLiabilities: { label: ml("Aset atau liabiliti", "资产还是负债", "Assets or liabilities"), scope: ml("Tahun 6 · Kedudukan kewangan", "六年级 · 财务状况", "Year 6 · Financial position"), tip: ml("Aset dimiliki; liabiliti ialah tanggungan yang perlu dibayar.", "资产是拥有的东西；负债是需要偿还的责任。", "Assets are owned; liabilities are obligations to repay." ) },
  insurance: { label: ml("Insurans dan takaful", "保险与伊斯兰保险", "Insurance and takaful"), scope: ml("Tahun 6 · Perlindungan kewangan", "六年级 · 财务保障", "Year 6 · Financial protection"), tip: ml("Perlindungan membantu menghadapi kerugian tertentu.", "保障能帮助应对特定损失。", "Protection helps manage certain losses." ) },
};

const GRADE_MODES = {
  2: { money: ["identify", "compose", "equivalent"], spend: ["pay"], manage: ["needWant", "savingPlan"], finance: [] },
  3: { money: ["compose", "equivalent", "foreign"], spend: ["pay", "methods"], manage: ["needWant", "budget"], finance: ["cashless"] },
  4: { money: ["foreign"], spend: ["methods", "receipt"], manage: ["budget", "wiseChoice"], finance: ["cashCredit"] },
  5: { money: [], spend: ["receipt"], manage: ["budget"], finance: ["saveInvest", "simpleCompound", "creditDebt"] },
  6: { money: [], spend: ["discount", "documents"], manage: ["financialDecision"], finance: ["profitLoss", "assetsLiabilities", "insurance"] },
};

const MODE_LABELS = {
  money: I18N.tabMoney,
  spend: I18N.tabSpend,
  manage: I18N.tabManage,
  finance: I18N.tabFinance,
};

const MONEY = [
  { id: "rm100", value: 10000, label: "RM100", kind: "note", image: "assets/rm100.png" },
  { id: "rm50", value: 5000, label: "RM50", kind: "note", image: "assets/rm50.png" },
  { id: "rm20", value: 2000, label: "RM20", kind: "note", image: "assets/rm20.png" },
  { id: "rm10", value: 1000, label: "RM10", kind: "note", image: "assets/rm10.png" },
  { id: "rm5", value: 500, label: "RM5", kind: "note", image: "assets/rm5.png" },
  { id: "rm1", value: 100, label: "RM1", kind: "note", image: "assets/rm1.png" },
  { id: "sen50", value: 50, label: "50 sen", kind: "coin", image: "assets/sen50.png" },
  { id: "sen20", value: 20, label: "20 sen", kind: "coin", image: "assets/sen20.png" },
  { id: "sen10", value: 10, label: "10 sen", kind: "coin", image: "assets/sen10.png" },
  { id: "sen5", value: 5, label: "5 sen", kind: "coin", image: "assets/sen5.png" },
];

const els = {
  grade: document.querySelector("#gradeSelect"), activity: document.querySelector("#activitySelect"),
  sideTitle: document.querySelector("#sideTitle"), scope: document.querySelector("#scopeNote"), tip: document.querySelector("#tipBox span:last-child"),
  title: document.querySelector("#activityTitle"), badge: document.querySelector("#gradeBadge"), challenge: document.querySelector("#challengePanel"),
  stage: document.querySelector("#visualStage"), answers: document.querySelector("#answerArea"), feedback: document.querySelector("#feedback"),
  check: document.querySelector("#checkButton"), next: document.querySelector("#nextButton"), reset: document.querySelector("#resetButton"),
  listen: document.querySelector("#listenButton"), sound: document.querySelector("#soundToggle"), newQuestion: document.querySelector("#newQuestionButton"),
  teacher: document.querySelector("#teacherButton"), dialog: document.querySelector("#teacherDialog"), teacherActivity: document.querySelector("#teacherActivity"),
  teacherRinggit: document.querySelector("#teacherRinggit"), teacherSen: document.querySelector("#teacherSen"), teacherPreview: document.querySelector("#teacherPreview"),
  teacherError: document.querySelector("#teacherError"), useTeacher: document.querySelector("#useTeacherQuestion"),
};

const state = { lang: "ms", grade: 2, mode: "money", activity: "identify", question: null, selected: null, wallet: [], answered: false, sound: true, custom: null };
let audioContext;

function tr(key) { const item = I18N[key]; return item ? item[state.lang] : key; }
function loc(value) { return typeof value === "string" ? value : value[state.lang]; }
function sample(array) { return array[Math.floor(Math.random() * array.length)]; }
function shuffle(array) { return [...array].sort(() => Math.random() - .5); }
function formatMoney(sen) { return `RM${(sen / 100).toFixed(2)}`; }
function gradeName(n) { return state.lang === "ms" ? `Tahun ${n}` : state.lang === "zh" ? `${n}年级` : `Year ${n}`; }

function beep(type = "click") {
  if (!state.sound) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = audioContext.currentTime;
  const notes = type === "correct" ? [[523,.08],[659,.08],[784,.15]] : type === "wrong" ? [[210,.12],[170,.18]] : type === "coin" ? [[1200,.045],[850,.07]] : [[520,.04]];
  notes.forEach(([frequency, duration], index) => {
    const osc = audioContext.createOscillator(); const gain = audioContext.createGain();
    osc.type = type === "coin" ? "triangle" : "sine"; osc.frequency.value = frequency;
    const start = now + index * .085; gain.gain.setValueAtTime(.0001, start); gain.gain.exponentialRampToValueAtTime(.12, start + .01); gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    osc.connect(gain); gain.connect(audioContext.destination); osc.start(start); osc.stop(start + duration + .02);
  });
}

function speak(text) {
  if (!state.sound || !window.speechSynthesis) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.lang === "ms" ? "ms-MY" : state.lang === "zh" ? "zh-CN" : "en-GB";
  const voices = speechSynthesis.getVoices();
  const match = voices.find(v => v.lang.toLowerCase().startsWith(utterance.lang.slice(0,2).toLowerCase()) && /female|zira|huihui|ting|siti|google/i.test(v.name)) || voices.find(v => v.lang.toLowerCase().startsWith(utterance.lang.slice(0,2).toLowerCase()));
  if (match) utterance.voice = match;
  utterance.rate = .88; utterance.pitch = 1.08;
  speechSynthesis.speak(utterance);
}

function setFeedback(kind, text) {
  els.feedback.className = `feedback ${kind}`;
  els.feedback.textContent = text;
}

function applyStaticLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = tr(el.dataset.i18n); });
  els.sound.querySelector("span:last-child").textContent = tr(state.sound ? "soundOn" : "soundOff");
  document.querySelectorAll("[data-lang]").forEach(button => button.classList.toggle("active", button.dataset.lang === state.lang));
  [...els.grade.options].forEach((option, index) => option.textContent = gradeName(index + 2));
}

function refreshControls({ keepActivity = false } = {}) {
  const modes = GRADE_MODES[state.grade];
  document.querySelectorAll("[data-mode]").forEach(button => {
    const enabled = modes[button.dataset.mode].length > 0;
    button.disabled = !enabled;
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
  if (!modes[state.mode].length) state.mode = Object.keys(modes).find(mode => modes[mode].length);
  const list = modes[state.mode];
  if (!keepActivity || !list.includes(state.activity)) state.activity = list[0];
  document.querySelectorAll("[data-mode]").forEach(button => button.classList.toggle("active", button.dataset.mode === state.mode));
  els.activity.replaceChildren(...list.map(id => {
    const option = document.createElement("option"); option.value = id; option.textContent = loc(ACTIVITIES[id].label); return option;
  }));
  els.activity.value = state.activity;
  els.sideTitle.textContent = loc(MODE_LABELS[state.mode]);
  els.scope.textContent = loc(ACTIVITIES[state.activity].scope);
  els.tip.textContent = loc(ACTIVITIES[state.activity].tip);
  els.title.textContent = loc(ACTIVITIES[state.activity].label);
  els.badge.textContent = state.lang === "zh" ? `${state.grade}年级` : `${state.lang === "ms" ? "T" : "Y"}${state.grade}`;
}

function makeQuestion(activity) {
  if (state.custom) {
    const custom = state.custom; state.custom = null;
    if (custom.activity === "identify") return makeIdentify(custom.value);
    return makeBuilder(custom.activity === "pay" ? "pay" : "compose", custom.value);
  }
  if (activity === "identify") return makeIdentify();
  if (["compose", "equivalent", "pay"].includes(activity)) return makeBuilder(activity);
  return makeConcept(activity);
}

function makeIdentify(forcedValue) {
  const item = forcedValue ? MONEY.find(m => m.value === forcedValue) : sample(MONEY);
  const others = shuffle(MONEY.filter(m => m.id !== item.id)).slice(0,3).map(m => m.label);
  return {
    type: "identify", item, answer: item.label, choices: shuffle([item.label, ...others]),
    prompt: ml("Apakah nilai wang ini?", "这张纸币或硬币的面额是多少？", "What is the value of this money?"),
    explain: ml(`Ini ialah ${item.label}.`, `这是 ${item.label}。`, `This is ${item.label}.`),
  };
}

function makeBuilder(kind, forcedValue) {
  let values;
  if (kind === "equivalent") values = [500, 1000, 2000, 5000];
  else if (state.grade === 2) values = [150, 270, 450, 600, 750, 1250, 2050, 3670, 5000, 7820];
  else values = [375, 680, 1250, 1840, 2350, 4270, 5650, 8950];
  const target = forcedValue || sample(values);
  const item = sample([
    ml("sebuah buku cerita", "一本故事书", "a storybook"), ml("satu set alat tulis", "一套文具", "a stationery set"), ml("sebuah bekas minuman", "一个水壶", "a water bottle")
  ]);
  const prompts = {
    compose: ml("Bina jumlah sasaran menggunakan wang di bawah.", "用下方的钱币组成目标金额。", "Build the target amount using the money below."),
    equivalent: ml("Bina gabungan lain yang sama nilai.", "组成另一种相同币值的组合。", "Build another combination with the same value."),
    pay: ml(`Bayar tepat untuk ${loc(item)}.`, `为${loc(item)}准确付款。`, `Pay the exact price for ${loc(item)}.`),
  };
  return { type: "builder", kind, target, answer: target, banned: kind === "equivalent" ? MONEY.find(m => m.value === target)?.id : null, prompt: prompts[kind], explain: ml(`Jumlah yang diperlukan ialah ${formatMoney(target)}.`, `需要的金额是 ${formatMoney(target)}。`, `The required amount is ${formatMoney(target)}.`) };
}

const CONCEPT_BANK = {
  foreign: [
    ["🇸🇬", ml("Mata wang Singapura", "新加坡的货币", "Singapore's currency"), "sgd", [["sgd",ml("Dolar Singapura", "新加坡元", "Singapore dollar")],["myr",ml("Ringgit", "令吉", "Ringgit")],["thb",ml("Baht", "泰铢", "Baht")],["idr",ml("Rupiah", "印尼盾", "Rupiah")]]],
    ["🇹🇭", ml("Mata wang Thailand", "泰国的货币", "Thailand's currency"), "thb", [["myr",ml("Ringgit", "令吉", "Ringgit")],["thb",ml("Baht", "泰铢", "Baht")],["sgd",ml("Dolar Singapura", "新加坡元", "Singapore dollar")],["idr",ml("Rupiah", "印尼盾", "Rupiah")]]],
    ["🇮🇩", ml("Mata wang Indonesia", "印度尼西亚的货币", "Indonesia's currency"), "idr", [["idr",ml("Rupiah", "印尼盾", "Rupiah")],["myr",ml("Ringgit", "令吉", "Ringgit")],["thb",ml("Baht", "泰铢", "Baht")],["usd",ml("Dolar AS", "美元", "US dollar")]]],
  ],
  needWant: [
    ["🍚", ml("Makanan berkhasiat untuk makan tengah hari", "午餐所需的营养食物", "Nutritious food for lunch"), "need", [["need",ml("Keperluan", "需要", "Need")],["want",ml("Kehendak", "想要", "Want")]]],
    ["🎮", ml("Permainan baharu walaupun permainan lama masih elok", "旧游戏仍完好，却想买新游戏", "A new game although the old one still works"), "want", [["need",ml("Keperluan", "需要", "Need")],["want",ml("Kehendak", "想要", "Want")]]],
    ["📒", ml("Buku latihan yang diminta oleh guru", "老师要求的练习簿", "An exercise book requested by the teacher"), "need", [["need",ml("Keperluan", "需要", "Need")],["want",ml("Kehendak", "想要", "Want")]]],
  ],
  methods: [
    ["🛍️", ml("Bayar di kedai menggunakan telefon dan kod QR", "在商店用手机扫描二维码付款", "Pay in a shop using a phone and QR code"), "ewallet", [["cash",ml("Tunai", "现金", "Cash")],["ewallet",ml("E-dompet / QR", "电子钱包／二维码", "E-wallet / QR")],["transfer",ml("Pindahan dalam talian", "线上转账", "Online transfer")],["cheque",ml("Cek", "支票", "Cheque")]]],
    ["💻", ml("Bayar pembelian di laman sesawang", "在网站支付网购", "Pay for a purchase on a website"), "online", [["cash",ml("Syiling", "硬币", "Coins")],["online",ml("Perbankan / kad dalam talian", "网上银行／银行卡", "Online banking / card")],["barter",ml("Tukar barang", "以物换物", "Barter")],["stamp",ml("Setem", "邮票", "Stamp")]]],
    ["🏪", ml("Bayar barang kecil di kaunter menggunakan wang kertas dan syiling", "在柜台用纸币和硬币支付小额商品", "Pay for a small item at the counter with notes and coins"), "cash", [["cash",ml("Tunai", "现金", "Cash")],["voucher",ml("Mata ganjaran", "积分", "Reward points")],["invoice",ml("Invois", "发票", "Invoice")],["loan",ml("Pinjaman", "贷款", "Loan")]]],
  ],
  cashless: [
    ["📱", ml("Alat menyimpan nilai secara digital dalam aplikasi", "在应用程序中储存电子金额的工具", "A tool that stores value digitally in an app"), "ewallet", [["ewallet",ml("E-dompet", "电子钱包", "E-wallet")],["coin",ml("Syiling", "硬币", "Coin")],["receipt",ml("Resit", "收据", "Receipt")],["note",ml("Wang kertas", "纸币", "Banknote")]]],
    ["💳", ml("Alat yang boleh digunakan pada terminal pembayaran", "可在付款终端使用的工具", "A tool used at a payment terminal"), "card", [["card",ml("Kad bank", "银行卡", "Bank card")],["bill",ml("Bil", "账单", "Bill")],["coin",ml("Syiling", "硬币", "Coin")],["stamp",ml("Setem", "邮票", "Stamp")]]],
  ],
  savingPlan: [
    ["🚲", ml("Aina mahu membeli basikal. Apakah tindakan yang terancang?", "艾娜想买脚踏车，哪一种做法有计划？", "Aina wants to buy a bicycle. Which action is planned?"), "plan", [["plan",ml("Simpan jumlah tetap setiap minggu", "每周储蓄固定金额", "Save a fixed amount each week")],["rush",ml("Belanja semua wang sekarang", "现在花完所有钱", "Spend all the money now")],["ignore",ml("Tidak perlu tahu harganya", "不必知道价格", "Do not check its price")],["borrow",ml("Pinjam tanpa rancangan", "没有计划地借钱", "Borrow without a plan")]]],
  ],
  budget: [
    ["🎒", ml("Kamu menerima RM20. Buku latihan berharga RM8. Pilih rancangan yang lebih baik.", "你有 RM20，练习簿价格 RM8。选择较好的计划。", "You receive RM20. An exercise book costs RM8. Choose the better plan."), "good", [["good",ml("Beli buku, simpan sebahagian baki", "买练习簿，并储蓄部分余额", "Buy the book and save part of the balance")],["all",ml("Belanjakan semua pada snek", "全部用来买零食", "Spend all of it on snacks")],["extra",ml("Beli barang melebihi RM20", "购买超过 RM20 的物品", "Buy items costing more than RM20")],["lose",ml("Tidak catat dan biarkan wang hilang", "不记录，让钱遗失", "Do not track the money")]]],
  ],
  wiseChoice: [
    ["🔎", ml("Barang yang sama dijual pada harga berlainan. Apakah langkah bijak?", "同一件商品有不同价格，明智的做法是什么？", "The same item has different prices. What is a wise step?"), "compare", [["compare",ml("Bandingkan harga dan kualiti", "比较价格与品质", "Compare price and quality")],["first",ml("Beli yang pertama dilihat", "看到第一个就买", "Buy the first one seen")],["borrow",ml("Pinjam tanpa menyemak", "不检查就借钱", "Borrow without checking")],["ad",ml("Percaya iklan sahaja", "只相信广告", "Trust only the advertisement")]]],
  ],
  cashCredit: [
    ["💳", ml("Pembelian dibuat sekarang dan dibayar kemudian. Ini ialah...", "现在购买，以后偿还。这是……", "A purchase is made now and repaid later. This is..."), "credit", [["cash",ml("Pembelian tunai", "现金购买", "Cash purchase")],["credit",ml("Pembelian secara kredit", "信贷购买", "Credit purchase")],["gift",ml("Hadiah", "礼物", "Gift")],["saving",ml("Simpanan", "储蓄", "Saving")]]],
  ],
  saveInvest: [
    ["🏦", ml("Wang disimpan dengan risiko rendah dan mudah dikeluarkan apabila perlu.", "资金以较低风险存放，需要时较容易取用。", "Money is kept at low risk and is easy to access when needed."), "saving", [["saving",ml("Simpanan", "储蓄", "Saving")],["invest",ml("Pelaburan", "投资", "Investment")]]],
    ["📈", ml("Wang digunakan dengan harapan mendapat pulangan, tetapi nilainya boleh berubah.", "资金用来争取回报，但价值可能变化。", "Money is used in hopes of a return, but its value can change."), "invest", [["saving",ml("Simpanan", "储蓄", "Saving")],["invest",ml("Pelaburan", "投资", "Investment")]]],
  ],
  simpleCompound: [
    ["🌱", ml("Faedah dikira pada wang asal dan faedah yang telah diterima.", "利息按照本金以及之前获得的利息计算。", "Interest is calculated on the original money and previously earned interest."), "compound", [["simple",ml("Faedah mudah", "单利", "Simple interest")],["compound",ml("Faedah kompaun", "复利", "Compound interest")]]],
    ["📏", ml("Faedah setiap tempoh dikira pada jumlah wang asal sahaja.", "每期利息只按照原本的本金计算。", "Interest each period is calculated only on the original amount."), "simple", [["simple",ml("Faedah mudah", "单利", "Simple interest")],["compound",ml("Faedah kompaun", "复利", "Compound interest")]]],
  ],
  creditDebt: [
    ["🤝", ml("Wang dipinjam dan mesti dibayar semula mengikut syarat.", "借来的钱必须按照条件偿还。", "Money is borrowed and must be repaid under agreed terms."), "debt", [["debt",ml("Hutang", "债务", "Debt")],["income",ml("Pendapatan", "收入", "Income")],["asset",ml("Aset", "资产", "Asset")],["gift",ml("Hadiah", "礼物", "Gift")]]],
  ],
  financialDecision: [
    ["📱", ml("Telefon masih berfungsi, tetapi model baharu sedang dijual. Apakah keputusan bertanggungjawab?", "手机仍可使用，但新型号正在促销。哪项决定较负责任？", "The phone still works, but a new model is on sale. What is a responsible decision?"), "wait", [["wait",ml("Semak keperluan dan bajet sebelum membeli", "购买前先检查需要和预算", "Check the need and budget before buying")],["loan",ml("Terus berhutang tanpa membandingkan", "不比较就立刻负债购买", "Borrow immediately without comparing")],["all",ml("Gunakan semua simpanan", "用完所有储蓄", "Use all savings")],["ignore",ml("Abaikan kos", "忽略成本", "Ignore the cost")]]],
  ],
  profitLoss: [
    ["📦", ml("Harga kos RM40, harga jual RM55", "成本价 RM40，售价 RM55", "Cost price RM40, selling price RM55"), "profit", [["profit",ml("Untung", "盈利", "Profit")],["loss",ml("Rugi", "亏损", "Loss")],["same",ml("Tiada untung atau rugi", "没有盈利或亏损", "No profit or loss")]]],
    ["📦", ml("Harga kos RM80, harga jual RM65", "成本价 RM80，售价 RM65", "Cost price RM80, selling price RM65"), "loss", [["profit",ml("Untung", "盈利", "Profit")],["loss",ml("Rugi", "亏损", "Loss")],["same",ml("Tiada untung atau rugi", "没有盈利或亏损", "No profit or loss")]]],
  ],
  discount: [
    ["🏷️", ml("Harga asal RM100, diskaun 20%. Apakah maksud diskaun?", "原价 RM100，折扣 20%。折扣是什么意思？", "Original price RM100, 20% discount. What does discount mean?"), "reduce", [["reduce",ml("Harga dikurangkan sebelum membayar", "付款前减价", "The price is reduced before payment")],["increase",ml("Harga ditambah", "价格提高", "The price increases")],["loan",ml("Wang dipinjam", "借钱", "Money is borrowed")],["tax",ml("Cukai ditambah", "加税", "Tax is added")]]],
    ["🎟️", ml("Baucar RM10 digunakan semasa membeli-belah. Apakah fungsinya?", "购物时使用 RM10 礼券，它有什么作用？", "An RM10 voucher is used when shopping. What does it do?"), "voucher", [["voucher",ml("Mengurangkan jumlah bayaran mengikut nilainya", "按礼券价值减少付款", "Reduces payment by its value")],["double",ml("Menggandakan harga", "使价格加倍", "Doubles the price")],["debt",ml("Mewujudkan hutang", "产生债务", "Creates debt")],["receipt",ml("Menjadi resit", "变成收据", "Becomes a receipt")]]],
  ],
  assetsLiabilities: [
    ["🏠", ml("Rumah yang dimiliki keluarga", "家庭拥有的房屋", "A house owned by the family"), "asset", [["asset",ml("Aset", "资产", "Asset")],["liability",ml("Liabiliti", "负债", "Liability")]]],
    ["🧾", ml("Baki pinjaman yang masih perlu dibayar", "仍需偿还的贷款余额", "A loan balance that still must be repaid"), "liability", [["asset",ml("Aset", "资产", "Asset")],["liability",ml("Liabiliti", "负债", "Liability")]]],
  ],
  insurance: [
    ["🛡️", ml("Apakah tujuan utama insurans atau takaful?", "保险或伊斯兰保险的主要目的是什么？", "What is the main purpose of insurance or takaful?"), "protect", [["protect",ml("Memberi perlindungan kewangan bagi risiko tertentu", "为特定风险提供财务保障", "Provide financial protection for certain risks")],["free",ml("Memberi wang percuma setiap hari", "每天提供免费金钱", "Give free money every day")],["price",ml("Menentukan semua harga barang", "决定所有商品价格", "Set all item prices")],["coin",ml("Menggantikan semua wang tunai", "取代所有现金", "Replace all cash")]]],
  ],
};

function makeDocumentQuestion(activity) {
  const records = activity === "receipt" ? [
    [ml("KEDAI CERIA", "欢乐商店", "HAPPY SHOP"), ml("TELAH DIBAYAR", "已付款", "PAID"), "receipt", ml("Resit", "收据", "Receipt")],
    [ml("SYARIKAT AIR", "水务公司", "WATER COMPANY"), ml("JUMLAH PERLU DIBAYAR", "应付总额", "AMOUNT DUE"), "bill", ml("Bil", "账单", "Bill")],
  ] : [
    [ml("KEDAI CERIA", "欢乐商店", "HAPPY SHOP"), ml("TELAH DIBAYAR", "已付款", "PAID"), "receipt", ml("Resit", "收据", "Receipt")],
    [ml("SYARIKAT AIR", "水务公司", "WATER COMPANY"), ml("JUMLAH PERLU DIBAYAR", "应付总额", "AMOUNT DUE"), "bill", ml("Bil", "账单", "Bill")],
    [ml("PEMBEKAL SEKOLAH", "学校供应商", "SCHOOL SUPPLIER"), ml("BARANG DIBEKALKAN · BAYARAN DIMINTA", "已供应物品 · 要求付款", "GOODS SUPPLIED · PAYMENT REQUESTED"), "invoice", ml("Invois", "发票", "Invoice")],
  ];
  const row = sample(records);
  return { type: "document", icon: "📄", prompt: ml("Apakah nama dokumen ini?", "这是什么文件？", "What is this document?"), answer: row[2], choices: shuffle([["receipt",ml("Resit", "收据", "Receipt")],["bill",ml("Bil", "账单", "Bill")],["invoice",ml("Invois", "发票", "Invoice")]]), doc: row, explain: ml(`Dokumen ini ialah ${loc(row[3])}.`, `这份文件是${loc(row[3])}。`, `This document is a ${loc(row[3]).toLowerCase()}.`) };
}

function makeConcept(activity) {
  if (["receipt", "documents"].includes(activity)) return makeDocumentQuestion(activity);
  const row = sample(CONCEPT_BANK[activity]);
  return { type: "concept", icon: row[0], prompt: row[1], answer: row[2], choices: shuffle(row[3]), explain: ml("Pilihan ini paling tepat berdasarkan situasi.", "根据情境，这是最合适的答案。", "This is the best answer for the situation.") };
}

function moneyPicture(item, extraClass = "") {
  const wrap = document.createElement("span"); wrap.className = `money-picture ${item.kind} ${extraClass}`;
  const img = document.createElement("img"); img.src = item.image; img.alt = item.label; img.loading = "eager"; img.draggable = false;
  const contoh = document.createElement("span"); contoh.className = "contoh"; contoh.textContent = "CONTOH";
  wrap.append(img, contoh); return wrap;
}

function renderQuestion() {
  state.question = makeQuestion(state.activity); state.selected = null; state.wallet = []; state.answered = false;
  els.check.classList.remove("hidden"); els.next.classList.add("hidden");
  els.stage.replaceChildren(); els.answers.replaceChildren();
  const q = state.question;
  els.challenge.innerHTML = `<div><div class="challenge-kicker">${tr("tryIt")}</div><div class="challenge-text">${q.type === "builder" ? `${tr("target")}: ${formatMoney(q.target)}` : loc(q.prompt)}</div>${q.type === "builder" ? `<div class="challenge-sub">${loc(q.prompt)}</div>` : ""}</div>`;
  if (q.type === "identify") renderIdentify(q);
  else if (q.type === "builder") renderBuilder(q);
  else if (q.type === "document") renderDocument(q);
  else renderConcept(q);
  setFeedback("neutral", q.type === "builder" ? tr("addMoney") : tr("neutral"));
}

function renderIdentify(q) {
  const hero = document.createElement("div"); hero.className = "money-hero"; hero.append(moneyPicture(q.item));
  const source = document.createElement("span"); source.className = "source-note"; source.textContent = tr("officialSource"); hero.append(source); els.stage.append(hero);
  renderChoices(q.choices.map(value => [value, value]));
}

function renderBuilder(q) {
  const builder = document.createElement("div"); builder.className = "money-builder";
  builder.innerHTML = `<div class="wallet-total"><span>${tr("wallet")}</span><strong id="walletTotal">RM0.00</strong></div><div id="walletTray" class="wallet-tray"><span class="wallet-empty">${tr("emptyWallet")}</span></div><div class="source-note">${tr("officialSource")}</div>`;
  const bank = document.createElement("div"); bank.className = "money-bank"; bank.setAttribute("aria-label", tr("moneyChoices"));
  const permitted = MONEY.filter(item => item.id !== q.banned && item.value <= q.target);
  permitted.forEach(item => {
    const button = document.createElement("button"); button.type = "button"; button.className = `money-card ${item.kind === "coin" ? "coin-card" : ""}`; button.dataset.money = item.id;
    button.append(moneyPicture(item), Object.assign(document.createElement("span"), { className: "money-label", textContent: item.label }));
    button.addEventListener("click", () => { if (state.answered) return; state.wallet.push(item.id); beep("coin"); updateWallet(); }); bank.append(button);
  });
  builder.append(bank); els.stage.append(builder);
  const hint = document.createElement("div"); hint.className = "challenge-sub"; hint.style.textAlign = "center"; hint.textContent = tr("removeHint"); els.answers.append(hint);
}

function updateWallet() {
  const tray = document.querySelector("#walletTray"); if (!tray) return;
  tray.replaceChildren();
  if (!state.wallet.length) { const empty = document.createElement("span"); empty.className = "wallet-empty"; empty.textContent = tr("emptyWallet"); tray.append(empty); }
  state.wallet.forEach((id, index) => {
    const item = MONEY.find(m => m.id === id); const button = document.createElement("button"); button.type = "button"; button.className = "wallet-item"; button.title = item.label; button.append(moneyPicture(item));
    button.addEventListener("click", () => { if (state.answered) return; state.wallet.splice(index, 1); beep("click"); updateWallet(); }); tray.append(button);
  });
  const total = state.wallet.reduce((sum, id) => sum + MONEY.find(m => m.id === id).value, 0);
  document.querySelector("#walletTotal").textContent = formatMoney(total);
}

function renderChoices(choices) {
  const grid = document.createElement("div"); grid.className = "choices";
  choices.forEach(([id, label]) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "choice-button"; button.dataset.answer = id; button.textContent = loc(label);
    button.addEventListener("click", () => selectAnswer(id, button, grid)); grid.append(button);
  });
  els.answers.append(grid);
}

function selectAnswer(id, button, container) {
  if (state.answered) return; beep("click"); state.selected = id;
  container.querySelectorAll("button").forEach(item => item.classList.remove("selected")); button.classList.add("selected");
}

function renderConcept(q) {
  const grid = document.createElement("div"); grid.className = "scenario-grid";
  q.choices.forEach(([id, label], index) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "scenario-card"; button.dataset.answer = id;
    const icons = [q.icon, "💡", "🔍", "✨"];
    button.innerHTML = `<span class="card-icon">${icons[index]}</span><span class="card-copy"><strong>${loc(label)}</strong></span>`;
    button.addEventListener("click", () => selectAnswer(id, button, grid)); grid.append(button);
  });
  els.stage.append(grid);
}

function renderDocument(q) {
  const card = document.createElement("div"); card.className = "document-card";
  card.innerHTML = `<h3>${loc(q.doc[0])}</h3><div class="document-row"><span>Tarikh / 日期 / Date</span><span>04-10-2026</span></div><div class="document-row"><span>Item</span><span>RM12.00</span></div><div class="document-row"><span>Item</span><span>RM8.00</span></div><div class="document-row total"><span>${loc(q.doc[1])}</span><span>RM20.00</span></div>`;
  els.stage.append(card); renderChoices(q.choices);
}

function checkAnswer() {
  if (state.answered) return;
  const q = state.question;
  let correct;
  if (q.type === "builder") {
    if (!state.wallet.length) { setFeedback("wrong", tr("addMoney")); beep("wrong"); return; }
    const total = state.wallet.reduce((sum, id) => sum + MONEY.find(m => m.id === id).value, 0); correct = total === q.answer;
  } else {
    if (state.selected === null) { setFeedback("wrong", tr("chooseFirst")); beep("wrong"); return; }
    correct = state.selected === q.answer;
  }
  if (!correct) { setFeedback("wrong", `${tr("wrong")} ${q.type === "builder" ? `${tr("wallet")}: ${document.querySelector("#walletTotal").textContent}` : ""}`.trim()); beep("wrong"); return; }
  state.answered = true; setFeedback("correct", `${tr("correct")} ${loc(q.explain)}`); beep("correct");
  els.check.classList.add("hidden"); els.next.classList.remove("hidden");
}

function resetQuestion() {
  state.selected = null; state.wallet = []; state.answered = false;
  if (state.question.type === "builder") updateWallet();
  document.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
  els.check.classList.remove("hidden"); els.next.classList.add("hidden"); setFeedback("neutral", state.question.type === "builder" ? tr("addMoney") : tr("neutral")); beep("click");
}

function refreshAll({ newQuestion = true } = {}) {
  applyStaticLanguage(); refreshControls({ keepActivity: true });
  if (newQuestion) renderQuestion(); else renderQuestion();
}

function updateTeacherPreview() {
  const ringgit = Math.max(0, Number(els.teacherRinggit.value) || 0); const sen = Math.max(0, Number(els.teacherSen.value) || 0);
  els.teacherPreview.textContent = formatMoney(Math.round(ringgit * 100 + sen)); els.teacherError.textContent = "";
}

function useTeacherQuestion() {
  const value = Math.round((Number(els.teacherRinggit.value) || 0) * 100 + (Number(els.teacherSen.value) || 0));
  const activity = els.teacherActivity.value;
  if (value < 5 || value > 50000) { els.teacherError.textContent = tr("teacherRange"); return; }
  if (value % 5 !== 0 || (activity === "identify" && !MONEY.some(m => m.value === value))) { els.teacherError.textContent = tr("teacherInvalid"); return; }
  state.custom = { activity, value };
  if (activity === "pay") { state.mode = "spend"; state.activity = GRADE_MODES[state.grade].spend.includes("pay") ? "pay" : GRADE_MODES[2].spend[0]; if (!GRADE_MODES[state.grade].spend.includes("pay")) { state.grade = 2; els.grade.value = "2"; } }
  else { state.mode = "money"; state.activity = activity; if (!GRADE_MODES[state.grade].money.includes(activity)) { state.grade = activity === "identify" ? 2 : 3; els.grade.value = String(state.grade); } }
  els.dialog.close(); refreshControls(); renderQuestion(); beep("correct");
}

document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => { state.lang = button.dataset.lang; beep("click"); refreshAll(); }));
document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => { if (button.disabled) return; state.mode = button.dataset.mode; state.activity = GRADE_MODES[state.grade][state.mode][0]; beep("click"); refreshControls(); renderQuestion(); }));
els.grade.addEventListener("change", () => { state.grade = Number(els.grade.value); state.custom = null; beep("click"); refreshControls(); renderQuestion(); });
els.activity.addEventListener("change", () => { state.activity = els.activity.value; state.custom = null; beep("click"); refreshControls({ keepActivity: true }); renderQuestion(); });
els.check.addEventListener("click", checkAnswer);
els.next.addEventListener("click", () => { beep("click"); renderQuestion(); });
els.reset.addEventListener("click", resetQuestion);
els.newQuestion.addEventListener("click", () => { beep("click"); renderQuestion(); });
els.listen.addEventListener("click", () => { const q = state.question; speak(q.type === "builder" ? `${loc(q.prompt)} ${formatMoney(q.target)}` : loc(q.prompt)); });
els.sound.addEventListener("click", () => { state.sound = !state.sound; els.sound.setAttribute("aria-pressed", String(state.sound)); applyStaticLanguage(); if (state.sound) beep("correct"); });
els.teacher.addEventListener("click", () => { beep("click"); els.teacherError.textContent = ""; updateTeacherPreview(); els.dialog.showModal(); });
[els.teacherRinggit, els.teacherSen].forEach(input => input.addEventListener("input", updateTeacherPreview));
els.useTeacher.addEventListener("click", useTeacherQuestion);

applyStaticLanguage(); refreshControls(); renderQuestion();
