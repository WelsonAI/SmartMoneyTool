"use strict";

const ml = (ms, zh, en) => ({ ms, zh, en });

const I18N = {
  title: ml("Jom Teroka Wang!", "一起来探索钱币！", "Let's Explore Money!"),
  subtitle: ml("Alat manipulatif Tahun 2–6 untuk SK dan SJK.", "配合 SK 与 SJK 二至六年级课本的操作工具。", "Hands-on Year 2–6 tools for SK and SJK."),
  soundOn: ml("Bunyi: Buka", "声音：开", "Sound: On"),
  soundOff: ml("Bunyi: Tutup", "声音：关", "Sound: Off"),
  tabMoney: ml("Kenal & Bina", "认识与组合", "Recognise & Build"),
  tabSpend: ml("Bayar", "付款", "Pay"),
  tabManage: ml("Urus Wang", "管理金钱", "Manage Money"),
  chooseActivity: ml("Pilih alat", "选择工具", "Choose a tool"),
  grade: ml("Tahun", "年级", "Year"),
  activity: ml("Alat", "工具", "Tool"),
  teacherMode: ml("Tetapan guru", "老师设置", "Teacher settings"),
  resetTool: ml("Tetapkan semula alat", "重置工具", "Reset tool"),
  tryIt: ml("Mari cuba!", "动手试试！", "Try it!"),
  stepObserve: ml("Perhatikan", "仔细观察", "Observe"),
  stepTry: ml("Gerakkan & cuba", "移动并尝试", "Move & try"),
  stepCheck: ml("Lihat hasil", "观察结果", "See the result"),
  customSettings: ml("Tetapkan nilai demonstrasi", "设置课堂示范金额", "Set a demonstration amount"),
  customHelp: ml("Masukkan jumlah yang hendak digunakan dalam alat semasa.", "输入要在当前工具使用的金额。", "Enter the amount to use in the current tool."),
  ringgit: ml("Ringgit", "令吉", "Ringgit"),
  sen: ml("Sen", "仙", "Sen"),
  cancel: ml("Batal", "取消", "Cancel"),
  useSettings: ml("Gunakan tetapan", "使用设置", "Use settings"),
};

const ACTIVITIES = {
  identify: { label: ml("Teroka wang Malaysia", "探索马来西亚钱币", "Explore Malaysian money"), scope: ml("Tahun 2 · 4.1 Wang kertas dan duit syiling", "二年级 · 4.1 纸币与硬币", "Year 2 · 4.1 Banknotes and coins"), tip: ml("Pilih wang dan perhatikan nilai, warna, corak serta saiznya.", "选择钱币，观察面额、颜色、图案和大小。", "Choose money and inspect its value, colour, design and size.") },
  compose: { label: ml("Bina nilai wang", "组合钱币金额", "Build a money value"), scope: ml("Tahun 2–3 · Gabungan wang", "二至三年级 · 钱币组合", "Years 2–3 · Money combinations"), tip: ml("Tambah atau keluarkan wang; jumlah berubah serta-merta.", "加入或移除钱币，总额会即时变化。", "Add or remove money; the total changes instantly.") },
  foreign: { label: ml("Banding mata wang asing", "比较外国货币", "Compare foreign currencies"), scope: ml("Tahun 3–4 · Mata wang asing", "三至四年级 · 外国货币", "Years 3–4 · Foreign currency"), tip: ml("Masukkan kadar semasa yang dibawa oleh guru.", "输入老师提供的当日汇率。", "Enter the current rate supplied by the teacher.") },
  pay: { label: ml("Kaunter bayar tepat", "准确付款柜台", "Exact-payment counter"), scope: ml("Tahun 2–3 · Situasi harian", "二至三年级 · 日常付款情境", "Years 2–3 · Everyday payment"), tip: ml("Gunakan wang Malaysia untuk membayar harga pada label.", "使用马来西亚钱币支付价格牌上的金额。", "Use Malaysian money to pay the labelled price.") },
  needWant: { label: ml("Papan keperluan & kehendak", "需要与想要分类板", "Needs & wants board"), scope: ml("Tahun 2–3 · Simpanan dan perbelanjaan", "二至三年级 · 储蓄与消费", "Years 2–3 · Saving and spending"), tip: ml("Setiap pusingan memilih 6 kad rawak daripada 20 situasi.", "每轮从 20 个情境中随机抽取 6 张卡片。", "Each round selects 6 random cards from 20 situations.") },
  savingPlan: { label: ml("Perancang simpanan", "储蓄规划器", "Savings planner"), scope: ml("Tahun 2–3 · Simpanan terancang", "二至三年级 · 有计划地储蓄", "Years 2–3 · Planned saving"), tip: ml("Laraskan sasaran dan simpanan mingguan.", "调整目标和每周储蓄额。", "Adjust the goal and weekly saving amount.") },
  budget: { label: ml("Papan agihan wang", "金钱分配板", "Money allocation board"), scope: ml("Tahun 2–3 · Pengurusan kewangan", "二至三年级 · 金钱管理", "Years 2–3 · Money management"), tip: ml("Agihkan wang kepada simpanan, perbelanjaan dan derma.", "把钱分配为储蓄、消费和捐献。", "Allocate money to savings, spending and donations.") },
  ledger: { label: ml("Buku rekod kewangan", "收支记录簿", "Money record book"), scope: ml("Tahun 4 · 3.3 Pengurusan kewangan", "四年级 · 3.3 理财", "Year 4 · 3.3 Financial management"), tip: ml("Tambah pendapatan atau perbelanjaan dan lihat baki bergerak.", "加入收入或支出，观察余额变化。", "Add income or expenses and watch the running balance.") },
  decision: { label: ml("Papan keputusan belanja", "消费决定板", "Spending decision board"), scope: ml("Tahun 4 · 3.4 Tanggungjawab membuat keputusan", "四年级 · 3.4 负责任地作决定", "Year 4 · 3.4 Responsible decisions"), tip: ml("Seret setiap pembelian kepada beli, simpan atau kemudian.", "把每项消费拖到购买、储蓄或以后。", "Drag each purchase to buy, save or later.") },
  paymentMethods: { label: ml("Kaedah pembayaran abad ke-21", "二十一世纪付款方式", "21st-century payment methods"), scope: ml("Tahun 4 · Kaedah pembayaran", "四年级 · 付款方式", "Year 4 · Payment methods"), tip: ml("Pilih satu kaedah dan ikuti urutan pembayarannya.", "选择一种方式，依序操作付款步骤。", "Choose a method and follow its payment sequence.") },
  operationMat: { label: ml("Tikar operasi wang", "钱币运算板", "Money operation mat"), scope: ml("Tahun 2–5 · Operasi asas wang", "二至五年级 · 钱币基本运算", "Years 2–5 · Basic operations with money"), tip: ml("Ubah dua nilai dan operasi mengikut julat tahun semasa.", "依照当前年级的数值范围改变金额和运算。", "Change the values and operation within the current year's range.") },
  operationMachine: { label: ml("Mesin operasi bergabung", "混合运算机器", "Combined-operation machine"), scope: ml("Tahun 4–5 · Operasi bergabung wang", "四至五年级 · 钱币混合运算", "Years 4–5 · Combined money operations"), tip: ml("Susun dua operasi dan lihat aliran pengiraan.", "设置两步运算，观察计算流程。", "Set two operations and watch the calculation flow.") },
  saveInvest: { label: ml("Papan simpanan & pelaburan", "储蓄与投资比较板", "Saving & investment board"), scope: ml("Tahun 5 · Simpanan dan pelaburan", "五年级 · 储蓄与投资", "Year 5 · Saving and investment"), tip: ml("Pilih satu ciri untuk membandingkan simpanan dengan pelaburan.", "选择一个特点，比较储蓄与投资。", "Choose a feature to compare saving and investment.") },
  simpleCompound: { label: ml("Makmal faedah", "单利与复利实验室", "Interest lab"), scope: ml("Tahun 5 · Faedah mudah dan kompaun", "五年级 · 单利与复利", "Year 5 · Simple and compound interest"), tip: ml("Laraskan modal, kadar dan tempoh; bandingkan pertumbuhan.", "调整本金、利率和时间，比较增长。", "Adjust principal, rate and time; compare growth.") },
  creditDebt: { label: ml("Pembanding tunai & kredit", "现金与信贷价格比较", "Cash & credit price comparison"), scope: ml("Tahun 5 · Kredit dan pengurusan hutang", "五年级 · 信贷与债务管理", "Year 5 · Credit and debt management"), tip: ml("Bandingkan harga tunai dengan jumlah bayaran kredit.", "比较现金价格与信贷付款总额。", "Compare the cash price with the total credit payment.") },
  shopLab: { label: ml("Makmal untung & rugi", "盈亏实验室", "Profit & loss lab"), scope: ml("Tahun 6 · 3.1 Harga kos, harga jual, untung dan rugi", "六年级 · 3.1 成本、售价、盈利与亏损", "Year 6 · 3.1 Cost, selling price, profit and loss"), tip: ml("Laraskan kos, harga jual dan kuantiti.", "调整成本、售价与数量。", "Adjust cost, selling price and quantity.") },
  offerLab: { label: ml("Makmal diskaun & resit", "折扣与收据实验室", "Discount & receipt lab"), scope: ml("Tahun 6 · 3.1 Diskaun, rebat, baucar dan cukai", "六年级 · 3.1 折扣、回扣、礼券与税", "Year 6 · 3.1 Discount, rebate, voucher and tax"), tip: ml("Ubah tawaran dan perhatikan harga akhir pada resit.", "改变优惠，观察收据上的最终价格。", "Change the offer and watch the final receipt price.") },
  documents: { label: ml("Pembina dokumen kewangan", "财务文件生成器", "Financial document builder"), scope: ml("Tahun 6 · Bil, invois dan resit", "六年级 · 账单、发票与收据", "Year 6 · Bills, invoices and receipts"), tip: ml("Tukar jenis dokumen dan butiran transaksi.", "切换文件类型并修改交易资料。", "Switch the document type and transaction details.") },
  balanceSheet: { label: ml("Papan aset & liabiliti", "资产与负债板", "Assets & liabilities board"), scope: ml("Tahun 6 · 3.1 Aset dan liabiliti", "六年级 · 3.1 资产与负债", "Year 6 · 3.1 Assets and liabilities"), tip: ml("Laraskan nilai aset dan hutang untuk melihat nilai bersih.", "调整资产与债务，观察净值。", "Adjust assets and debts to see net worth.") },
  interestDividend: { label: ml("Papan faedah & dividen", "利息与股息板", "Interest & dividend board"), scope: ml("Tahun 6 · Faedah dan dividen", "六年级 · 利息与股息", "Year 6 · Interest and dividends"), tip: ml("Pilih faedah atau dividen, kemudian lihat hubungan peratus dengan nilai pulangan.", "选择利息或股息，观察百分率与所得金额的关系。", "Choose interest or dividends and observe how the percentage determines the return.") },
  insurance: { label: ml("Papan insurans & takaful", "保险与回教保险板", "Insurance & takaful board"), scope: ml("Tahun 6 · Insurans dan takaful", "六年级 · 保险与回教保险", "Year 6 · Insurance and takaful"), tip: ml("Bandingkan ciri dan teroka jenis perlindungan yang dinyatakan dalam buku teks.", "比较两者特点，并探索课本列出的保障种类。", "Compare their features and explore the protection types listed in the textbook.") },
};

const GRADE_MODES = {
  2: { money: ["identify", "compose", "operationMat"], spend: ["pay"], manage: ["savingPlan", "budget"] },
  3: { money: ["compose", "operationMat", "foreign"], spend: ["pay"], manage: ["needWant", "savingPlan", "budget"] },
  4: { money: ["operationMat", "operationMachine", "foreign"], spend: ["paymentMethods"], manage: ["ledger", "decision"] },
  5: { money: ["operationMat", "operationMachine"], spend: [], manage: ["saveInvest", "simpleCompound", "creditDebt"] },
  6: { money: [], spend: ["shopLab", "offerLab", "documents"], manage: ["balanceSheet", "interestDividend", "insurance"] },
};
const MODE_LABELS = { money: I18N.tabMoney, spend: I18N.tabSpend, manage: I18N.tabManage };

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

const SHOP_PRODUCTS = [
  { id: "bag", icon: "🎒", label: ml("Beg sekolah", "书包", "School bag"), min: 2500, max: 10000, minGrade: 2 },
  { id: "bottle", icon: "🥤", label: ml("Botol minuman", "水壶", "Water bottle"), min: 800, max: 4500, minGrade: 2 },
  { id: "storybook", icon: "📚", label: ml("Buku cerita", "故事书", "Storybook"), min: 500, max: 3000, minGrade: 2 },
  { id: "pencilcase", icon: "🖍️", label: ml("Kotak pensel", "文具盒", "Pencil case"), min: 300, max: 2500, minGrade: 2 },
  { id: "lunchbox", icon: "🍱", label: ml("Bekas makanan", "午餐盒", "Lunch box"), min: 800, max: 4000, minGrade: 2 },
  { id: "umbrella", icon: "☂️", label: ml("Payung", "雨伞", "Umbrella"), min: 1000, max: 5000, minGrade: 2 },
  { id: "shoes", icon: "👟", label: ml("Kasut sekolah", "校鞋", "School shoes"), min: 2500, max: 10000, minGrade: 2 },
  { id: "ruler", icon: "📏", label: ml("Pembaris", "尺", "Ruler"), min: 50, max: 500, minGrade: 2 },
  { id: "calculator", icon: "🧮", label: ml("Kalkulator", "计算器", "Calculator"), min: 2000, max: 8000, minGrade: 2 },
  { id: "ball", icon: "⚽", label: ml("Bola sukan", "球", "Sports ball"), min: 1500, max: 8000, minGrade: 2 },
  { id: "artset", icon: "🎨", label: ml("Set seni", "画具", "Art set"), min: 800, max: 6000, minGrade: 2 },
  { id: "notebook", icon: "📒", label: ml("Buku nota", "笔记本", "Notebook"), min: 100, max: 1500, minGrade: 2 },
  { id: "bicycle", icon: "🚲", label: ml("Basikal", "自行车", "Bicycle"), min: 20000, max: 100000, minGrade: 3 },
  { id: "scooter", icon: "🛴", label: ml("Skuter", "滑板车", "Scooter"), min: 10000, max: 50000, minGrade: 3 },
  { id: "watch", icon: "⌚", label: ml("Jam sukan", "运动手表", "Sports watch"), min: 5000, max: 30000, minGrade: 3 },
];

const els = {
  grade: document.querySelector("#gradeSelect"), activity: document.querySelector("#activitySelect"), sideTitle: document.querySelector("#sideTitle"),
  scope: document.querySelector("#scopeNote"), tip: document.querySelector("#tipBox span:last-child"), title: document.querySelector("#activityTitle"),
  badge: document.querySelector("#gradeBadge"), challenge: document.querySelector("#challengePanel"), stage: document.querySelector("#visualStage"),
  controls: document.querySelector("#controlArea"), summary: document.querySelector("#liveSummary"),
  sound: document.querySelector("#soundToggle"), reset: document.querySelector("#resetToolButton"), teacher: document.querySelector("#teacherButton"),
  dialog: document.querySelector("#teacherDialog"), ringgit: document.querySelector("#teacherRinggit"), sen: document.querySelector("#teacherSen"),
  preview: document.querySelector("#teacherPreview"), teacherError: document.querySelector("#teacherError"), useSettings: document.querySelector("#useTeacherSettings"),
};

const state = { lang: "ms", grade: 2, mode: "money", activity: "identify", sound: true, teacherAmount: 5650, tool: null };
let audioContext;
const tr = key => I18N[key][state.lang];
const loc = value => typeof value === "string" ? value : value[state.lang];
const money = sen => `RM${(Number(sen) / 100).toFixed(2)}`;
const ringgit = value => money(Math.round(Number(value) * 100));
const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value) || 0));
const escapeHTML = value => String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
const gradeName = n => state.lang === "ms" ? `Tahun ${n}` : state.lang === "zh" ? `${n}年级` : `Year ${n}`;

function beep(type = "tap") {
  if (!state.sound) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const notes = type === "done" ? [[523, .07], [659, .07], [784, .13]] : type === "coin" ? [[1100, .04], [780, .06]] : [[500, .035]];
  notes.forEach(([frequency, duration], index) => {
    const osc = audioContext.createOscillator(); const gain = audioContext.createGain(); const start = audioContext.currentTime + index * .075;
    osc.type = type === "coin" ? "triangle" : "sine"; osc.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001, start); gain.gain.exponentialRampToValueAtTime(.1, start + .008); gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    osc.connect(gain); gain.connect(audioContext.destination); osc.start(start); osc.stop(start + duration + .02);
  });
}

function applyStaticLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { if (I18N[el.dataset.i18n]) el.textContent = tr(el.dataset.i18n); });
  els.sound.querySelector("span:last-child").textContent = tr(state.sound ? "soundOn" : "soundOff");
  document.querySelectorAll("[data-lang]").forEach(button => button.classList.toggle("active", button.dataset.lang === state.lang));
  [...els.grade.options].forEach((option, index) => { option.textContent = gradeName(index + 2); });
}

function refreshNavigation({ keepActivity = false } = {}) {
  const modes = GRADE_MODES[state.grade];
  if (!modes[state.mode]?.length) state.mode = Object.keys(modes).find(mode => modes[mode].length);
  document.querySelectorAll("[data-mode]").forEach(button => { button.disabled = !modes[button.dataset.mode]?.length; button.classList.toggle("active", button.dataset.mode === state.mode); });
  const list = modes[state.mode]; if (!keepActivity || !list.includes(state.activity)) state.activity = list[0];
  els.activity.replaceChildren(...list.map(id => Object.assign(document.createElement("option"), { value: id, textContent: loc(ACTIVITIES[id].label) })));
  els.activity.value = state.activity; els.sideTitle.textContent = loc(MODE_LABELS[state.mode]); els.scope.textContent = loc(ACTIVITIES[state.activity].scope);
  els.tip.textContent = loc(ACTIVITIES[state.activity].tip); els.title.textContent = loc(ACTIVITIES[state.activity].label);
  els.badge.textContent = state.lang === "zh" ? `${state.grade}年级` : `${state.lang === "ms" ? "T" : "Y"}${state.grade}`;
}

function setChallenge(title, sub = "") { els.challenge.innerHTML = `<div><div class="challenge-kicker">${tr("tryIt")}</div><div class="challenge-text">${title}</div>${sub ? `<div class="challenge-sub">${sub}</div>` : ""}</div>`; }
function setSummary(text, tone = "neutral") { els.summary.className = `feedback ${tone}`; els.summary.innerHTML = text; }
function moneyPicture(item, extra = "") { return `<span class="money-picture ${item.kind} ${extra}"><img src="${item.image}" alt="${item.label}" draggable="false"><span class="contoh">CONTOH</span></span>`; }
function moneyBank(items = MONEY) { return `<div class="money-bank">${items.map(item => `<button type="button" class="money-card ${item.kind === "coin" ? "coin-card" : ""}" data-money="${item.id}">${moneyPicture(item)}<span class="money-label">${item.label}</span></button>`).join("")}</div>`; }
function slider(id, label, min, max, step, value, suffix = "") { return `<label class="range-control" for="${id}"><span>${label}</span><strong>${value}${suffix}</strong><input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-suffix="${escapeHTML(suffix)}"></label>`; }
function metric(label, value, cls = "") { return `<div class="metric ${cls}"><span>${label}</span><strong>${value}</strong></div>`; }

function defaults(activity) {
  const amount = state.teacherAmount;
  const operationDefaults = {
    2: { a: 35.50, b: 12.25, op: "+", interacted: false },
    3: { a: 1250.50, b: 375.25, op: "+", interacted: false },
    4: { a: 12500.50, b: 3675.25, op: "+", interacted: false },
    5: { a: 125500.50, b: 36750.25, op: "+", interacted: false },
  };
  return {
    identify: { selected: "rm1", interacted: false }, compose: { target: amount, wallet: [] },
    pay: { target: amount, wallet: [], productId: "bag" }, foreign: { rm: 10, currency: state.grade === 4 ? "usd" : "sgd", rate: state.grade === 4 ? .23 : .31, interacted: false }, needWant: { places: {}, selected: null, itemIds: buildBoardSet(), interacted: false },
    savingPlan: { goal: 100, saved: 20, weekly: 5, interacted: false }, budget: { income: state.grade === 2 ? 100 : 200, saving: 20, spending: state.grade === 2 ? 60 : 120, donation: 10, interacted: false },
    ledger: { opening: 100, entries: [{ id: 1, type: "income", label: ml("Wang saku", "零用钱", "Pocket money"), amount: 50 }, { id: 2, type: "expense", label: ml("Makanan", "食物", "Food"), amount: 18 }], interacted: false },
    decision: { cash: 240, places: {}, selected: null, ...buildDecisionSet(), interacted: false },
    paymentMethods: { method: "cash", step: 0, amount: 25.50, interacted: false },
    operationMat: operationDefaults[state.grade] || operationDefaults[5],
    operationMachine: { start: 800, change: 125, multiplier: 3, op1: "−", op2: "×", interacted: false },
    saveInvest: { feature: "return", interacted: false },
    simpleCompound: { principal: 1000, rate: 5, years: 5, interacted: false },
    creditDebt: { cashPrice: 2000, monthly: 100, months: 24, interacted: false },
    shopLab: { cost: 8, price: 12, quantity: 20, interacted: false },
    offerLab: { original: 180, discount: 20, voucher: 10, rebate: 5, tax: 6, interacted: false },
    documents: { type: "invoice", item: "equipment", qty: 3, unit: 750, interacted: false },
    balanceSheet: { cash: 500, savings: 1200, property: 3000, loan: 1500, bills: 250, interacted: false },
    interestDividend: { type: "interest", capital: 3500, rate: 2, years: 2, interacted: false },
    insurance: { view: "compare", protection: "life", interacted: false },
  }[activity];
}

function changeTool(mutator, sound = "tap") { mutator(state.tool); beep(sound); renderTool(); }

function renderIdentify() {
  const item = MONEY.find(x => x.id === state.tool.selected);
  setChallenge(loc(ml("Pilih satu wang untuk diperhatikan", "选择一种钱币仔细观察", "Choose one piece of money to inspect")), loc(ml("Bandingkan nombor, unit, warna dan saiz.", "比较数字、单位、颜色和大小。", "Compare the number, unit, colour and size.")));
  const isNote = item.value >= 100;
  const observations = isNote
    ? [ml("Nilai", "面额", "Value"), ml("Nombor", "号码", "Number"), ml("Warna", "颜色", "Colour"), ml("Corak", "图案", "Design"), ml("Saiz", "大小", "Size")]
    : [ml("Nilai", "面额", "Value"), ml("Warna", "颜色", "Colour"), ml("Saiz", "大小", "Size"), ml("Tepi", "边缘", "Edge")];
  els.stage.innerHTML = `<div class="explorer-layout"><div class="money-hero">${moneyPicture(item)}<span class="source-note">${loc(ml("Imej: Bank Negara Malaysia", "图片：马来西亚国家银行", "Images: Bank Negara Malaysia"))}</span></div><div class="inspect-card"><span>${loc(isNote ? ml("Wang kertas", "纸币", "Banknote") : ml("Duit syiling", "硬币", "Coin"))}</span><strong>${item.label}</strong><p>${loc(ml("Perhatikan ciri pada wang sebenar.", "观察钱币本身的特征。", "Observe the features on the money itself."))}</p><div class="observation-list">${observations.map(label => `<span>✓ ${loc(label)}</span>`).join("")}</div></div></div>`;
  els.controls.innerHTML = moneyBank();
  els.controls.querySelectorAll("[data-money]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.selected = button.dataset.money; t.interacted = true; }, "coin")));
  setSummary(loc(ml("Bandingkan ciri wang yang dipilih dengan wang lain.", "选择另一种钱币，比较两者的特征。", "Choose another piece of money and compare their features.")));
}

function walletTotal(wallet) { return wallet.reduce((sum, id) => sum + MONEY.find(x => x.id === id).value, 0); }
function randomComposeTarget(current) {
  const min = state.grade === 2 ? 50 : 1000; const max = state.grade === 2 ? 10000 : 100000; let next;
  do { next = min + Math.floor(Math.random() * ((max - min) / 5 + 1)) * 5; } while (next === current);
  return next;
}

function randomPurchase(currentId, currentTarget) {
  const available = SHOP_PRODUCTS.filter(product => product.minGrade <= state.grade && product.id !== currentId);
  const product = available[Math.floor(Math.random() * available.length)]; let target;
  do { target = product.min + Math.floor(Math.random() * ((product.max - product.min) / 5 + 1)) * 5; } while (target === currentTarget);
  return { productId: product.id, target };
}

function renderMoneyBuilder(kind) {
  const t = state.tool; const total = walletTotal(t.wallet); const diff = t.target - total; const available = MONEY;
  const product = SHOP_PRODUCTS.find(item => item.id === t.productId) || SHOP_PRODUCTS[0];
  const title = kind === "pay" ? `<span class="challenge-product"><span class="challenge-product-icon" aria-hidden="true">${product.icon}</span><strong>${loc(product.label)}</strong><span class="challenge-price">${money(t.target)}</span></span>` : `${loc(ml("Jumlah sasaran", "目标金额", "Target amount"))}: ${money(t.target)}`;
  setChallenge(title, loc(ml("Klik wang untuk menambah; klik wang dalam dulang untuk mengeluarkan.", "点击钱币加入；点击托盘中的钱币移除。", "Tap money to add it; tap money in the tray to remove it.")));
  const tray = t.wallet.length ? t.wallet.map((id, index) => { const item = MONEY.find(x => x.id === id); return `<button type="button" class="wallet-item" data-remove="${index}" aria-label="${item.label}">${moneyPicture(item)}</button>`; }).join("") : `<span class="wallet-empty">${loc(ml("Dulang masih kosong", "托盘还是空的", "The tray is empty"))}</span>`;
  els.stage.innerHTML = `<div class="money-builder"><div class="wallet-total"><span>${loc(ml("Jumlah di dalam dulang", "托盘里的总额", "Total in tray"))}</span><strong>${money(total)}</strong></div><div class="wallet-tray">${tray}</div>${moneyBank(available)}</div>`;
  const randomButton = kind === "compose" ? `<button type="button" class="primary-button compact" id="randomTarget">🎲 ${loc(ml("Jumlah rawak", "随机金额", "Random amount"))}</button>` : `<button type="button" class="primary-button compact" id="randomPurchase">🎲 ${loc(ml("Produk & harga rawak", "随机商品与金额", "Random product & price"))}</button>`;
  els.controls.innerHTML = `<div class="board-actions"><button type="button" class="secondary-button compact" id="clearWallet">↻ ${loc(ml("Kosongkan dulang", "清空托盘", "Clear tray"))}</button>${randomButton}</div>`;
  els.stage.querySelectorAll("[data-money]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.wallet.push(button.dataset.money); }, "coin")));
  els.stage.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.wallet.splice(Number(button.dataset.remove), 1); })));
  document.querySelector("#clearWallet").addEventListener("click", () => changeTool(x => { x.wallet = []; }));
  document.querySelector("#randomTarget")?.addEventListener("click", () => changeTool(x => { x.target = randomComposeTarget(x.target); x.wallet = []; }, "done"));
  document.querySelector("#randomPurchase")?.addEventListener("click", () => changeTool(x => { const next = randomPurchase(x.productId, x.target); x.productId = next.productId; x.target = next.target; x.wallet = []; }, "done"));
  if (diff === 0) setSummary(`✨ ${loc(ml("Jumlah tepat. Cuba bina dengan cara lain.", "金额刚刚好。再尝试另一种组合。", "Exact amount. Try another combination."))}`, "success");
  else if (diff > 0) setSummary(`${loc(ml("Masih perlu", "还需要", "Still needed"))} <strong>${money(diff)}</strong>`);
  else setSummary(`${loc(ml("Melebihi sasaran sebanyak", "超过目标", "Over the target by"))} <strong>${money(-diff)}</strong>`, "attention");
}

function renderForeign() {
  const asean = { sgd: ["🇸🇬", "SGD", .31], thb: ["🇹🇭", "THB", 7.6], idr: ["🇮🇩", "IDR", 3750] };
  const world = { usd: ["🇺🇸", "USD", .23], gbp: ["🇬🇧", "GBP", .18], jpy: ["🇯🇵", "JPY", 35], cny: ["🇨🇳", "CNY", 1.65] };
  const data = state.grade === 4 ? world : asean; const [flag, code] = data[state.tool.currency]; const converted = state.tool.rm * state.tool.rate;
  const digits = code === "IDR" || code === "JPY" ? 0 : 2;
  const formattedRate = state.tool.rate.toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: Math.max(digits, 4) });
  const formattedConverted = converted.toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits });
  setChallenge(loc(state.grade === 4 ? ml("Bandingkan RM1 dengan mata wang utama dunia", "比较 RM1 与世界主要货币", "Compare RM1 with major world currencies") : ml("Bandingkan RM1 dengan mata wang ASEAN", "比较 RM1 与东盟货币", "Compare RM1 with ASEAN currencies")), loc(ml("Guru masukkan kadar semasa sebelum aktiviti.", "活动前由老师输入当日汇率。", "The teacher enters the current rate before the activity.")));
  els.stage.innerHTML = `<div class="currency-demo"><div class="converter"><div class="currency-card"><span>🇲🇾</span><strong>MYR ${state.tool.rm.toFixed(2)}</strong><small>${loc(ml("Jumlah asal", "原本金额", "Starting amount"))}</small></div><div class="relation-arrow">→</div><div class="currency-card accent"><span>${flag}</span><strong>${code} ${formattedConverted}</strong><small>${loc(ml("Nilai selepas ditukar", "兑换后的金额", "Converted amount"))}</small></div></div><div class="conversion-steps"><div><span>1</span><b>1 MYR = ${formattedRate} ${code}</b></div><div><span>2</span><b>${state.tool.rm} × ${formattedRate}</b></div><div><span>3</span><b>= ${formattedConverted} ${code}</b></div></div></div>`;
  els.controls.innerHTML = `<div class="field-grid foreign-fields"><label>${loc(ml("Jumlah MYR", "马币金额", "MYR amount"))}<input id="foreignAmount" type="number" min="1" max="100" value="${state.tool.rm}"></label><label>${loc(ml(`Kadar: 1 MYR = ? ${code}`, `汇率：1 MYR = ? ${code}`, `Rate: 1 MYR = ? ${code}`))}<input id="foreignRate" type="number" min="0.0001" step="0.01" value="${state.tool.rate}"></label></div><div class="segmented">${Object.entries(data).map(([id, value]) => `<button type="button" data-currency="${id}" class="${id === state.tool.currency ? "active" : ""}">${value[0]} ${value[1]}</button>`).join("")}</div>`;
  document.querySelector("#foreignAmount").addEventListener("change", event => changeTool(t => { t.rm = clamp(event.target.value, 1, 100); t.interacted = true; }));
  document.querySelector("#foreignRate").addEventListener("change", event => changeTool(t => { t.rate = Math.max(.0001, Number(event.target.value) || .0001); t.interacted = true; }));
  els.controls.querySelectorAll("[data-currency]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.currency = button.dataset.currency; t.rate = data[t.currency][2]; t.interacted = true; })));
  setSummary(`${loc(ml("Pengiraan", "计算过程", "Calculation"))}: <strong>${state.tool.rm} MYR × ${formattedRate} = ${formattedConverted} ${code}</strong>`);
}

const BOARD_ITEMS = [
  ["meal", "🍱", ml("Makan tengah hari sekolah", "学校午餐", "School lunch"), "need"],
  ["book", "📒", ml("Buku latihan wajib", "必需练习簿", "Required exercise book"), "need"],
  ["water", "💧", ml("Air minuman", "饮用水", "Drinking water"), "need"],
  ["shoes", "👟", ml("Kasut sekolah ganti", "替换破损校鞋", "Replacement school shoes"), "need"],
  ["medicine", "💊", ml("Ubat apabila sakit", "生病时的药", "Medicine when ill"), "need"],
  ["bus", "🚌", ml("Tambang bas sekolah", "校车费", "School bus fare"), "need"],
  ["uniform", "👕", ml("Uniform sekolah ganti", "替换破损校服", "Replacement school uniform"), "need"],
  ["glasses", "👓", ml("Cermin mata ganti", "替换破损眼镜", "Replacement glasses"), "need"],
  ["soap", "🧼", ml("Sabun mandi", "香皂", "Bath soap"), "need"],
  ["umbrella", "☂️", ml("Payung untuk hari hujan", "雨天用雨伞", "Umbrella for a rainy day"), "need"],
  ["game", "🎮", ml("Permainan video baharu", "新电子游戏", "New video game"), "want"],
  ["toy", "🧸", ml("Mainan baharu", "新玩具", "New toy"), "want"],
  ["cinema", "🎬", ml("Tiket wayang", "电影票", "Cinema ticket"), "want"],
  ["candy", "🍬", ml("Gula-gula tambahan", "额外糖果", "Extra sweets"), "want"],
  ["stickers", "✨", ml("Pek pelekat hiasan", "装饰贴纸包", "Decorative sticker pack"), "want"],
  ["lamp", "💡", ml("Lampu hiasan", "装饰灯", "Decorative lamp"), "want"],
  ["bag", "🎒", ml("Beg kedua yang bergaya", "第二个时尚书包", "A stylish second bag"), "want"],
  ["headphones", "🎧", ml("Fon kepala baharu", "新耳机", "New headphones"), "want"],
  ["costume", "🦸", ml("Kostum watak", "角色服装", "Character costume"), "want"],
  ["cards", "🃏", ml("Kad koleksi", "收藏卡", "Collectible cards"), "want"],
];

function shuffled(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index--) { const other = Math.floor(Math.random() * (index + 1)); [copy[index], copy[other]] = [copy[other], copy[index]]; }
  return copy;
}

function buildBoardSet(previous = []) {
  let next; const previousSignature = [...previous].sort().join(",");
  do {
    const needs = shuffled(BOARD_ITEMS.filter(item => item[3] === "need")).slice(0, 3);
    const wants = shuffled(BOARD_ITEMS.filter(item => item[3] === "want")).slice(0, 3);
    next = shuffled([...needs, ...wants]).map(item => item[0]);
  } while (previous.length && [...next].sort().join(",") === previousSignature);
  return next;
}

function moveBoardItem(id, place) { changeTool(t => { t.places[id] = place; t.selected = null; t.interacted = true; }, "coin"); }

function renderNeedWant() {
  const items = state.tool.itemIds.map(id => BOARD_ITEMS.find(item => item[0] === id));
  const reference = { need: items.filter(item => item[3] === "need").map(item => item[0]), want: items.filter(item => item[3] === "want").map(item => item[0]) };
  setChallenge(loc(ml("Seret 6 kad rawak ke ruang pilihan", "把随机出现的 6 张卡拖到所选区域", "Drag the 6 random cards into a chosen space")), loc(ml("Pada skrin sentuh: pilih kad, kemudian tekan Keperluan atau Kehendak.", "触控屏：先选卡片，再点击“需要”或“想要”。", "On a touch screen: select a card, then tap Needs or Wants.")));
  const groups = ["pool", "need", "want"].map(group => {
    const title = group === "pool" ? ml("Belum diletakkan", "尚未分类", "Not placed") : group === "need" ? ml("Keperluan", "需要", "Needs") : ml("Kehendak", "想要", "Wants");
    const cards = items.filter(([id]) => (state.tool.places[id] || "pool") === group).map(([id, icon, label]) => `<button type="button" draggable="true" class="sort-item-card ${state.tool.selected === id ? "selected" : ""}" data-item="${id}"><span>${icon}</span><strong>${loc(label)}</strong><i>⠿</i></button>`).join("");
    return `<div class="sort-bin ${group}" data-bin="${group}" role="button" tabindex="0"><h3>${loc(title)}</h3><div class="sort-items">${cards || `<small>${loc(ml("Lepaskan kad di sini", "把卡片放在这里", "Drop a card here"))}</small>`}</div></div>`;
  }).join("");
  const placed = items.filter(([id]) => (state.tool.places[id] || "pool") !== "pool").length;
  const namesFor = ids => ids.map(id => loc(items.find(item => item[0] === id)[2])).join("、");
  const ownNames = place => items.filter(([id]) => state.tool.places[id] === place).map(([, , label]) => loc(label)).join("、") || "—";
  const completed = placed === items.length;
  const classificationHint = loc(ml("Keperluan menyokong kehidupan, kesihatan dan pembelajaran. Kehendak menambah keseronokan tetapi boleh ditangguhkan. Bandingkan dengan pilihan kamu dan bincangkan sebabnya.", "需要维持生活、健康和学习；想要增添乐趣，但可以延后。请把参考分类与你的选择比较，并说明理由。", "Needs support life, health and learning. Wants add enjoyment but can be delayed. Compare the reference with your choices and discuss why."));
  const resultPanel = completed ? `<section class="classification-result"><div class="completion-title">✓ ${loc(ml("Klasifikasi selesai", "分类完成", "Classification complete"))}</div><div class="classification-columns"><div><span>${loc(ml("Pilihan kamu · Keperluan", "你的分类 · 需要", "Your board · Needs"))}</span><strong>${ownNames("need")}</strong><span>${loc(ml("Pilihan kamu · Kehendak", "你的分类 · 想要", "Your board · Wants"))}</span><strong>${ownNames("want")}</strong></div><div class="reference-card"><span>${loc(ml("Rujukan mengikut situasi kad", "根据卡片情境的参考分类", "Reference for these card situations"))}</span><p><b>${loc(ml("Keperluan", "需要", "Needs"))}:</b> ${namesFor(reference.need)}</p><p><b>${loc(ml("Kehendak", "想要", "Wants"))}:</b> ${namesFor(reference.want)}</p></div></div><p class="classification-reason">${classificationHint}</p></section>` : "";
  els.stage.innerHTML = `<div class="sort-board">${groups}</div>${resultPanel}`;
  els.controls.innerHTML = `<div class="board-actions"><button type="button" class="secondary-button compact" id="clearBoard">↻ ${loc(ml("Kembalikan semua kad", "放回所有卡片", "Return all cards"))}</button><button type="button" class="primary-button compact" id="newBoardSet">⤨ ${loc(ml("Tukar 6 kad", "换一组 6 张卡", "New set of 6"))}</button></div>`;
  els.stage.querySelectorAll("[data-item]").forEach(card => {
    card.addEventListener("click", event => { event.stopPropagation(); changeTool(t => { t.selected = t.selected === card.dataset.item ? null : card.dataset.item; }); });
    card.addEventListener("dragstart", event => { event.dataTransfer.setData("text/plain", card.dataset.item); event.dataTransfer.effectAllowed = "move"; card.classList.add("dragging"); });
    card.addEventListener("dragend", () => card.classList.remove("dragging"));
  });
  els.stage.querySelectorAll("[data-bin]").forEach(bin => {
    bin.addEventListener("dragover", event => { event.preventDefault(); bin.classList.add("is-over"); });
    bin.addEventListener("dragleave", () => bin.classList.remove("is-over"));
    bin.addEventListener("drop", event => { event.preventDefault(); bin.classList.remove("is-over"); const id = event.dataTransfer.getData("text/plain"); if (id) moveBoardItem(id, bin.dataset.bin); });
    bin.addEventListener("click", () => { if (state.tool.selected) moveBoardItem(state.tool.selected, bin.dataset.bin); });
    bin.addEventListener("keydown", event => { if ((event.key === "Enter" || event.key === " ") && state.tool.selected) { event.preventDefault(); moveBoardItem(state.tool.selected, bin.dataset.bin); } });
  });
  document.querySelector("#clearBoard").addEventListener("click", () => changeTool(t => { t.places = {}; t.selected = null; t.interacted = false; }));
  document.querySelector("#newBoardSet").addEventListener("click", () => changeTool(t => { t.itemIds = buildBoardSet(t.itemIds); t.places = {}; t.selected = null; t.interacted = false; }, "done"));
  const selectedName = items.find(([id]) => id === state.tool.selected)?.[2];
  setSummary(selectedName ? `${loc(ml("Dipilih", "已选择", "Selected"))}: <strong>${loc(selectedName)}</strong> · ${loc(ml("Sekarang pilih satu ruang.", "现在选择一个区域。", "Now choose a space."))}` : completed ? `✓ <strong>${loc(ml("Semua 6 kad selesai", "6 张卡片已全部分类", "All 6 cards are complete"))}</strong> · ${loc(ml("Bandingkan pilihan kamu dengan rujukan di atas.", "请比较你的分类与上方参考。", "Compare your board with the reference above."))}` : `${placed}/6 ${loc(ml("kad telah diletakkan. Teruskan hingga lengkap untuk melihat hasil.", "张卡片已分类。全部完成后会显示结果。", "cards placed. Complete all cards to see the result."))}`, completed ? "success" : "neutral");
}

function renderSavingPlan() {
  const t = state.tool; const remaining = Math.max(0, t.goal - t.saved); const weeks = t.weekly ? Math.ceil(remaining / t.weekly) : 0; const pct = Math.min(100, t.saved / t.goal * 100);
  setChallenge(loc(ml("Rancang simpanan untuk basikal", "规划脚踏车储蓄", "Plan savings for a bicycle")), loc(ml("Ubah nilai dan lihat cara tempoh dikira.", "调整数值，观察所需时间的计算过程。", "Change the values and see how the time is calculated.")));
  els.stage.innerHTML = `<div class="goal-scene"><span>🚲</span><div class="goal-ring" style="--progress:${pct * 3.6}deg"><strong>${Math.round(pct)}%</strong></div><div class="goal-stats">${metric(loc(ml("Sasaran", "目标", "Goal")), money(t.goal * 100))}${metric(loc(ml("Sudah disimpan", "已有储蓄", "Already saved")), money(t.saved * 100))}${metric(loc(ml("Minggu diperlukan", "所需周数", "Weeks needed")), weeks)}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("saveGoal", loc(ml("Harga sasaran (RM)", "目标价格（RM）", "Goal price (RM)")), 20, 500, 5, t.goal)}${slider("saveCurrent", loc(ml("Simpanan semasa (RM)", "目前储蓄（RM）", "Current savings (RM)")), 0, t.goal, 5, t.saved)}${slider("saveWeekly", loc(ml("Simpan setiap minggu (RM)", "每周储蓄（RM）", "Save each week (RM)")), 1, 50, 1, t.weekly)}</div>`;
  [["saveGoal", "goal"], ["saveCurrent", "saved"], ["saveWeekly", "weekly"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); x.saved = Math.min(x.saved, x.goal); x.interacted = true; })));
  setSummary(remaining ? `${money(t.goal * 100)} − ${money(t.saved * 100)} = <strong>${money(remaining * 100)}</strong>; ${money(remaining * 100)} ÷ ${money(t.weekly * 100)} = <strong>${weeks}</strong> ${loc(ml("minggu", "周", "weeks"))}` : `🎉 ${loc(ml("Matlamat sudah dicapai.", "目标已经达成。", "The goal has been reached."))}`, remaining ? "neutral" : "success");
}

function renderBudget() {
  const t = state.tool; const allocated = t.saving + t.spending + t.donation; const balance = t.income - allocated;
  setChallenge(loc(ml("Agihkan wang yang diterima", "分配收到的钱", "Allocate the money received")), loc(ml("Gerakkan setiap peluncur dan perhatikan baki.", "移动每个滑杆并观察余额。", "Move each slider and watch the balance.")));
  const cats = [["saving", "🐷", ml("Simpanan", "储蓄", "Savings")], ["spending", "🛍️", ml("Perbelanjaan", "消费", "Spending")], ["donation", "🤝", ml("Derma", "捐献", "Donation")]];
  const balanceLabel = balance >= 0 ? ml("Belum diagih", "尚未分配", "Not allocated") : ml("Melebihi jumlah", "超出总额", "Over the total");
  const balanceIcon = balance >= 0 ? "🪙" : "⚠️";
  els.stage.innerHTML = `<div class="budget-board"><div class="budget-income">${loc(ml("Wang diterima", "收到的钱", "Money received"))}<strong>${money(t.income * 100)}</strong></div><div class="budget-pots">${cats.map(([key, icon, label]) => `<div class="budget-pot"><span>${icon}</span><strong>${loc(label)}</strong><b>${money(t[key] * 100)}</b><i style="height:${Math.min(100, t[key] / t.income * 180)}%"></i></div>`).join("")}<div class="budget-pot balance ${balance < 0 ? "negative" : ""}"><span>${balanceIcon}</span><strong>${loc(balanceLabel)}</strong><b>${money(Math.abs(balance) * 100)}</b><i style="height:${Math.min(100, Math.abs(balance) / Math.max(1, t.income) * 180)}%"></i></div></div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("budgetIncome", loc(ml("Wang diterima (RM)", "收到的钱（RM）", "Money received (RM)")), 20, 1000, 10, t.income)}${cats.map(([key,, label]) => slider(`budget-${key}`, loc(label), 0, 500, 5, t[key])).join("")}</div>`;
  document.querySelector("#budgetIncome").addEventListener("change", event => changeTool(x => { x.income = Number(event.target.value); x.interacted = true; }));
  cats.forEach(([key]) => document.querySelector(`#budget-${key}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); x.interacted = true; })));
  setSummary(balance >= 0 ? `${money(t.income * 100)} − ${money(t.saving * 100)} − ${money(t.spending * 100)} − ${money(t.donation * 100)} = <strong>${money(balance * 100)}</strong>` : `${loc(ml("Melebihi jumlah sebanyak", "超出总额", "Over the total by"))} <strong>${money(-balance * 100)}</strong>`, balance >= 0 ? "success" : "attention");
}

function renderLedger() {
  const t = state.tool; let running = t.opening;
  const rows = t.entries.map(entry => {
    running += entry.type === "income" ? entry.amount : -entry.amount;
    const sign = entry.type === "income" ? "+" : "−";
    return `<tr><td>${escapeHTML(loc(entry.label))}</td><td class="${entry.type}">${sign}${ringgit(entry.amount)}</td><td>${ringgit(running)}</td><td><button type="button" class="row-remove" data-entry="${entry.id}" aria-label="Remove">×</button></td></tr>`;
  }).join("");
  const income = t.entries.filter(x => x.type === "income").reduce((sum, x) => sum + x.amount, 0);
  const expenses = t.entries.filter(x => x.type === "expense").reduce((sum, x) => sum + x.amount, 0);
  setChallenge(loc(ml("Rekod wang masuk dan wang keluar", "记录收入与支出", "Record money in and money out")), loc(ml("Tambah urus niaga sendiri; baki dikira selepas setiap baris.", "加入自己的交易；每行都会计算新余额。", "Add your own transactions; the balance is recalculated after every row.")));
  els.stage.innerHTML = `<div class="ledger-sheet"><div class="ledger-top"><span>${loc(ml("Baki awal", "期初余额", "Opening balance"))}</span><strong>${ringgit(t.opening)}</strong></div><table><thead><tr><th>${loc(ml("Catatan", "项目", "Entry"))}</th><th>${loc(ml("Perubahan", "变动", "Change"))}</th><th>${loc(ml("Baki", "余额", "Balance"))}</th><th></th></tr></thead><tbody>${rows || `<tr><td colspan="4">${loc(ml("Belum ada catatan", "还没有记录", "No entries yet"))}</td></tr>`}</tbody></table><div class="metric-row">${metric(loc(ml("Jumlah masuk", "总收入", "Total in")), ringgit(income), "positive")}${metric(loc(ml("Jumlah keluar", "总支出", "Total out")), ringgit(expenses), "negative")}${metric(loc(ml("Baki akhir", "最终余额", "Final balance")), ringgit(running), running >= 0 ? "accent" : "negative")}</div></div>`;
  els.controls.innerHTML = `<div class="ledger-controls"><label>${loc(ml("Baki awal (RM)", "期初余额（RM）", "Opening balance (RM)"))}<input id="ledgerOpening" type="number" min="0" max="100000" step="1" value="${t.opening}"></label><label>${loc(ml("Jenis", "类型", "Type"))}<select id="ledgerType"><option value="income">${loc(ml("Wang masuk", "收入", "Money in"))}</option><option value="expense">${loc(ml("Wang keluar", "支出", "Money out"))}</option></select></label><label>${loc(ml("Catatan", "项目", "Entry"))}<input id="ledgerLabel" maxlength="24" value="${loc(ml("Buku", "书本", "Book"))}"></label><label>${loc(ml("Jumlah (RM)", "金额（RM）", "Amount (RM)"))}<input id="ledgerAmount" type="number" min="0.01" max="100000" step="0.05" value="12"></label><button type="button" class="primary-button" id="addLedger">＋ ${loc(ml("Tambah catatan", "加入记录", "Add entry"))}</button></div>`;
  document.querySelector("#ledgerOpening").addEventListener("change", event => changeTool(x => { x.opening = clamp(event.target.value, 0, 100000); x.interacted = true; }));
  document.querySelector("#addLedger").addEventListener("click", () => {
    const label = document.querySelector("#ledgerLabel").value.trim(); const amount = clamp(document.querySelector("#ledgerAmount").value, .01, 100000); const type = document.querySelector("#ledgerType").value;
    if (!label) return;
    changeTool(x => { x.entries.push({ id: Date.now(), label, amount, type }); x.interacted = true; }, "coin");
  });
  els.stage.querySelectorAll("[data-entry]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.entries = x.entries.filter(entry => entry.id !== Number(button.dataset.entry)); x.interacted = true; })));
  setSummary(`${ringgit(t.opening)} + ${ringgit(income)} − ${ringgit(expenses)} = <strong>${ringgit(running)}</strong>`, running >= 0 ? "success" : "attention");
}

function renderPaymentMethods() {
  const t = state.tool;
  const methods = {
    cash: {
      icon: "💵", label: ml("Bayaran tunai", "现金付款", "Cash payment"),
      steps: [ml("Semak jumlah bayaran", "查看应付总额", "Check the amount due"), ml("Serahkan wang", "交付现金", "Hand over the cash"), ml("Terima baki dan resit", "领取余额和收据", "Receive change and receipt")],
    },
    self: {
      icon: "🧾", label: ml("Daftar keluar layan diri", "自助结账", "Self-checkout"),
      steps: [ml("Imbas barang", "扫描商品", "Scan the items"), ml("Semak jumlah pada skrin", "核对屏幕上的总额", "Check the total on screen"), ml("Buat bayaran dan ambil resit", "付款并领取收据", "Pay and collect the receipt")],
    },
    card: {
      icon: "💳", label: ml("Kad bank tanpa sentuh", "银行卡感应付款", "Contactless bank card"),
      steps: [ml("Semak jumlah pada terminal", "核对终端上的金额", "Check the amount on the terminal"), ml("Sentuhkan kad bank", "把银行卡靠近感应器", "Tap the bank card"), ml("Tunggu pengesahan bayaran", "等待付款获批", "Wait for payment approval")],
    },
    online: {
      icon: "💻", label: ml("Bayaran dalam talian", "在线付款", "Online payment"),
      steps: [ml("Pilih bayaran dalam talian", "选择在线付款", "Choose online payment"), ml("Semak jumlah dan penerima", "核对金额与收款方", "Check the amount and recipient"), ml("Sahkan bayaran", "确认付款", "Confirm the payment")],
    },
    qr: {
      icon: "📱", label: ml("Imbas kod QR", "手机扫描二维码付款", "Scan a QR code"),
      steps: [ml("Imbas kod QR peniaga", "扫描商家的二维码", "Scan the merchant's QR code"), ml("Semak jumlah dan penerima", "核对金额与收款方", "Check the amount and recipient"), ml("Sahkan dan tunjuk status berjaya", "确认并查看付款成功状态", "Confirm and view the successful status")],
    },
  };
  const current = methods[t.method]; const completed = t.step >= current.steps.length;
  setChallenge(loc(ml("Cuba urutan kaedah pembayaran", "操作不同的付款方式", "Try the payment sequence")), loc(ml("Ini ialah alat simulasi langkah, bukan soalan kuiz.", "这是付款步骤模拟工具，不是问答题。", "This is a step simulator, not a quiz.")));
  els.stage.innerHTML = `<div class="method-workbench"><div class="method-stage-icon" aria-hidden="true">${current.icon}</div><div class="payment-screen"><span>${loc(current.label)}</span><strong>${ringgit(t.amount)}</strong><b>${completed ? `✓ ${loc(ml("Bayaran selesai", "付款完成", "Payment complete"))}` : `${loc(ml("Langkah", "步骤", "Step"))} ${t.step + 1}/${current.steps.length}`}</b></div><div class="method-sequence">${current.steps.map((step, index) => `<div class="method-step ${index < t.step ? "done" : ""} ${index === t.step ? "current" : ""}"><span>${index < t.step ? "✓" : index + 1}</span><strong>${loc(step)}</strong></div>`).join("")}</div></div>`;
  els.controls.innerHTML = `<div class="method-tabs">${Object.entries(methods).map(([id, method]) => `<button type="button" class="method-tab ${id === t.method ? "active" : ""}" data-method="${id}"><span>${method.icon}</span><strong>${loc(method.label)}</strong></button>`).join("")}</div><div class="board-actions"><button type="button" class="secondary-button compact" id="restartMethod">↻ ${loc(ml("Mula semula", "重新开始", "Start again"))}</button><button type="button" class="primary-button compact" id="nextMethodStep" ${completed ? "disabled" : ""}>${loc(ml("Lakukan langkah ini", "完成这一步", "Do this step"))} →</button></div>`;
  els.controls.querySelectorAll("[data-method]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.method = button.dataset.method; x.step = 0; x.interacted = true; })));
  document.querySelector("#restartMethod").addEventListener("click", () => changeTool(x => { x.step = 0; x.interacted = true; }));
  document.querySelector("#nextMethodStep").addEventListener("click", () => changeTool(x => { x.step = Math.min(methods[x.method].steps.length, x.step + 1); x.interacted = true; }, t.step === current.steps.length - 1 ? "done" : "tap"));
  setSummary(completed ? `<strong>${loc(current.label)}</strong> · ${loc(ml("Urutan pembayaran telah lengkap.", "付款流程已完成。", "The payment sequence is complete."))}` : `${loc(ml("Sekarang", "现在", "Now"))}: <strong>${loc(current.steps[t.step])}</strong>`, completed ? "success" : "neutral");
}

const DOCUMENT_ITEMS = [
  ["stationery", "✏️", ml("Alat tulis", "文具", "Stationery"), 100, 2000],
  ["books", "📚", ml("Buku", "书本", "Books"), 500, 5000],
  ["uniform", "👕", ml("Uniform", "校服", "Uniform"), 2000, 8000],
  ["equipment", "🧮", ml("Peralatan sekolah", "学校用品", "School equipment"), 500, 10000],
  ["service", "🔧", ml("Perkhidmatan membaiki", "维修服务", "Repair service"), 1000, 15000],
];

function renderDocumentStudio() {
  const t = state.tool; const total = t.qty * t.unit; const item = DOCUMENT_ITEMS.find(entry => entry[0] === t.item) || DOCUMENT_ITEMS[0];
  setChallenge(loc(ml("Bina dokumen urus niaga", "制作交易文件", "Build a transaction document")), loc(ml("Ubah jenis, barang, kuantiti dan harga; dokumen dikemas kini serta-merta.", "修改类型、商品、数量与单价；文件会即时更新。", "Change the type, item, quantity and price; the document updates immediately.")));
  const names = { receipt: ml("RESIT · TELAH DIBAYAR", "收据 · 已付款", "RECEIPT · PAID"), bill: ml("BIL · PERLU DIBAYAR", "账单 · 应付", "BILL · AMOUNT DUE"), invoice: ml("INVOIS · PERMINTAAN BAYARAN", "发票 · 付款请求", "INVOICE · PAYMENT REQUEST") };
  els.stage.innerHTML = `<div class="document-card live-document"><h3>${loc(ml("KEDAI CERIA", "欢乐商店", "HAPPY SHOP"))}</h3><div class="doc-stamp">${loc(names[t.type])}</div><div class="document-row"><span>${loc(ml("Tarikh", "日期", "Date"))}</span><span>04-10-2026</span></div><div class="document-row"><span>${item[1]} ${loc(item[2])} × ${t.qty}</span><span>${money(total)}</span></div><div class="document-row"><span>${loc(ml("Harga seunit", "单价", "Unit price"))}</span><span>${money(t.unit)}</span></div><div class="document-row total"><span>${loc(ml("JUMLAH", "总额", "TOTAL"))}</span><span>${money(total)}</span></div></div>`;
  const allowed = [["receipt", ml("Resit", "收据", "Receipt")], ["bill", ml("Bil", "账单", "Bill")], ["invoice", ml("Invois", "发票", "Invoice")]];
  els.controls.innerHTML = `<div class="field-grid"><label>${loc(ml("Jenis dokumen", "文件类型", "Document type"))}<select id="docType">${allowed.map(([id, name]) => `<option value="${id}" ${id === t.type ? "selected" : ""}>${loc(name)}</option>`).join("")}</select></label><label>${loc(ml("Barang / perkhidmatan", "商品／服务", "Item / service"))}<select id="docItem">${DOCUMENT_ITEMS.map(([id, icon, label]) => `<option value="${id}" ${id === t.item ? "selected" : ""}>${icon} ${loc(label)}</option>`).join("")}</select></label><label>${loc(ml("Kuantiti", "数量", "Quantity"))}<input id="docQty" type="number" min="1" max="20" value="${t.qty}"></label><label>${loc(ml("Harga seunit (RM)", "单价（RM）", "Unit price (RM)"))}<input id="docUnit" type="number" min="0.5" max="500" step="0.5" value="${t.unit / 100}"></label></div><div class="board-actions"><button type="button" class="primary-button compact" id="randomDocument">🎲 ${loc(ml("Situasi rawak", "随机交易情境", "Random transaction"))}</button></div>`;
  document.querySelector("#docType").addEventListener("change", event => changeTool(x => { x.type = event.target.value; x.interacted = true; }));
  document.querySelector("#docItem").addEventListener("change", event => changeTool(x => { x.item = event.target.value; x.interacted = true; }));
  document.querySelector("#docQty").addEventListener("change", event => changeTool(x => { x.qty = clamp(event.target.value, 1, 20); x.interacted = true; }));
  document.querySelector("#docUnit").addEventListener("change", event => changeTool(x => { x.unit = Math.round(clamp(event.target.value, .5, 500) * 100); x.interacted = true; }));
  document.querySelector("#randomDocument").addEventListener("click", () => changeTool(x => { const choices = DOCUMENT_ITEMS.filter(entry => entry[0] !== x.item); const next = choices[Math.floor(Math.random() * choices.length)]; x.item = next[0]; x.qty = 1 + Math.floor(Math.random() * 8); x.unit = next[3] + Math.floor(Math.random() * ((next[4] - next[3]) / 50 + 1)) * 50; x.interacted = true; }, "done"));
  const explanations = { receipt: ml("Resit merekodkan bayaran yang sudah dibuat.", "收据记录已经完成的付款。", "A receipt records a payment already made."), bill: ml("Bil menunjukkan jumlah yang masih perlu dibayar.", "账单显示仍需支付的金额。", "A bill shows an amount still due."), invoice: ml("Invois meminta bayaran bagi barang atau perkhidmatan.", "发票针对商品或服务提出付款要求。", "An invoice requests payment for goods or services.") };
  setSummary(`${loc(explanations[t.type])} <strong>${loc(ml("Jumlah", "总额", "Total"))}: ${money(total)}</strong>`);
}

const DECISION_ITEMS = [
  ["meal", "🍱", ml("Makanan sekolah", "学校午餐", "School meal"), 5, 20],
  ["shoes", "👟", ml("Kasut sekolah", "校鞋", "School shoes"), 30, 100],
  ["book", "📚", ml("Buku cerita", "故事书", "Storybook"), 10, 50],
  ["game", "🎮", ml("Permainan video", "电子游戏", "Video game"), 30, 150],
  ["gift", "🎁", ml("Hadiah", "礼物", "Gift"), 10, 80],
  ["save", "🐷", ml("Simpanan kecemasan", "应急储蓄", "Emergency savings"), 10, 100],
  ["bottle", "🥤", ml("Botol minuman", "水壶", "Water bottle"), 10, 45],
  ["stationery", "✏️", ml("Set alat tulis", "文具套装", "Stationery set"), 5, 35],
  ["umbrella", "☂️", ml("Payung", "雨伞", "Umbrella"), 15, 60],
  ["calculator", "🧮", ml("Kalkulator", "计算器", "Calculator"), 25, 120],
  ["headphones", "🎧", ml("Fon kepala", "耳机", "Headphones"), 25, 180],
  ["ball", "⚽", ml("Bola sukan", "运动球", "Sports ball"), 15, 100],
  ["trip", "🚌", ml("Lawatan sekolah", "学校旅行", "School trip"), 30, 200],
  ["bicycle", "🚲", ml("Basikal", "自行车", "Bicycle"), 150, 500],
  ["watch", "⌚", ml("Jam tangan", "手表", "Watch"), 40, 250],
  ["phone", "📱", ml("Telefon baharu", "新手机", "New phone"), 200, 500],
  ["toy", "🧸", ml("Mainan", "玩具", "Toy"), 10, 90],
  ["art", "🎨", ml("Set seni", "画具", "Art set"), 10, 80],
  ["bag", "🎒", ml("Beg sekolah", "书包", "School bag"), 30, 150],
  ["internet", "🌐", ml("Pelan internet", "网络配套", "Internet plan"), 20, 120],
  ["repair", "🔧", ml("Baiki basikal", "修理自行车", "Bicycle repair"), 15, 100],
  ["medicine", "💊", ml("Ubat", "药物", "Medicine"), 5, 80],
  ["uniform", "👕", ml("Uniform sekolah", "校服", "School uniform"), 30, 120],
  ["snack", "🍿", ml("Snek", "零食", "Snack"), 5, 25],
];

function buildDecisionSet(previous = []) {
  let itemIds; const signature = [...previous].sort().join(",");
  do { itemIds = shuffled(DECISION_ITEMS).slice(0, 6).map(item => item[0]); }
  while (previous.length && [...itemIds].sort().join(",") === signature);
  const prices = Object.fromEntries(itemIds.map(id => {
    const item = DECISION_ITEMS.find(entry => entry[0] === id); const steps = (item[4] - item[3]) / 5;
    return [id, item[3] + Math.floor(Math.random() * (steps + 1)) * 5];
  }));
  return { itemIds, prices };
}

function moveDecision(id, place) { changeTool(t => { t.places[id] = place; t.selected = null; t.interacted = true; }, "coin"); }

function renderDecision() {
  const t = state.tool; const items = t.itemIds.map(id => DECISION_ITEMS.find(item => item[0] === id));
  const spent = items.filter(([id]) => t.places[id] === "buy").reduce((sum, [id]) => sum + t.prices[id], 0); const balance = t.cash - spent;
  const groups = ["pool", "buy", "save", "later"].map(group => {
    const names = { pool: ml("Belum diputuskan", "尚未决定", "Not decided"), buy: ml("Beli sekarang", "现在购买", "Buy now"), save: ml("Simpan wang", "保留金钱", "Keep the money"), later: ml("Kemudian", "以后", "Later") };
    const cards = items.filter(([id]) => (t.places[id] || "pool") === group).map(([id, icon, label]) => `<button type="button" draggable="true" class="sort-item-card ${t.selected === id ? "selected" : ""}" data-choice="${id}"><span>${icon}</span><strong>${loc(label)}<small>${ringgit(t.prices[id])}</small></strong><i>⠿</i></button>`).join("");
    return `<div class="sort-bin decision-${group}" data-decision-bin="${group}" role="button" tabindex="0"><h3>${loc(names[group])}</h3><div class="sort-items">${cards || `<small>${loc(ml("Letakkan kad di sini", "把卡片放在这里", "Place a card here"))}</small>`}</div></div>`;
  }).join("");
  setChallenge(`${loc(ml("Wang tersedia", "可用金额", "Money available"))}: ${ringgit(t.cash)}`, loc(ml("Tidak ada satu jawapan betul—bincangkan kesan setiap keputusan.", "没有唯一正确答案——讨论每个决定的影响。", "There is no single correct answer—discuss the effect of each decision.")));
  els.stage.innerHTML = `<div class="decision-balance ${balance < 0 ? "over" : ""}"><span>${loc(ml("Baki jika beli sekarang", "现在购买后的余额", "Balance after buying now"))}</span><strong>${ringgit(balance)}</strong></div><div class="sort-board decision-board">${groups}</div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("decisionCash", loc(ml("Wang tersedia (RM)", "可用金额（RM）", "Money available (RM)")), 20, 500, 5, t.cash)}</div><div class="board-actions"><button type="button" class="secondary-button compact" id="clearDecision">↻ ${loc(ml("Kembalikan semua kad", "放回所有卡片", "Return all cards"))}</button><button type="button" class="primary-button compact" id="newDecisionSet">🎲 ${loc(ml("Barang & harga rawak", "随机商品与金额", "Random items & prices"))}</button></div>`;
  document.querySelector("#decisionCash").addEventListener("change", event => changeTool(x => { x.cash = Number(event.target.value); x.interacted = true; }));
  els.stage.querySelectorAll("[data-choice]").forEach(card => {
    card.addEventListener("click", event => { event.stopPropagation(); changeTool(x => { x.selected = x.selected === card.dataset.choice ? null : card.dataset.choice; }); });
    card.addEventListener("dragstart", event => { event.dataTransfer.setData("text/plain", card.dataset.choice); event.dataTransfer.effectAllowed = "move"; });
  });
  els.stage.querySelectorAll("[data-decision-bin]").forEach(bin => {
    bin.addEventListener("dragover", event => event.preventDefault());
    bin.addEventListener("drop", event => { event.preventDefault(); const id = event.dataTransfer.getData("text/plain"); if (id) moveDecision(id, bin.dataset.decisionBin); });
    bin.addEventListener("click", () => { if (t.selected) moveDecision(t.selected, bin.dataset.decisionBin); });
    bin.addEventListener("keydown", event => { if ((event.key === "Enter" || event.key === " ") && t.selected) { event.preventDefault(); moveDecision(t.selected, bin.dataset.decisionBin); } });
  });
  document.querySelector("#clearDecision").addEventListener("click", () => changeTool(x => { x.places = {}; x.selected = null; x.interacted = false; }));
  document.querySelector("#newDecisionSet").addEventListener("click", () => changeTool(x => { const next = buildDecisionSet(x.itemIds); x.itemIds = next.itemIds; x.prices = next.prices; x.places = {}; x.selected = null; x.interacted = false; }, "done"));
  setSummary(`${ringgit(t.cash)} − ${ringgit(spent)} = <strong>${ringgit(balance)}</strong> · ${loc(ml("6 kad rawak daripada 24", "从 24 项中随机抽取 6 张", "6 random cards from 24"))}`, balance >= 0 ? "success" : "attention");
}

function renderSaveInvest() {
  const t = state.tool;
  const features = {
    return: [ml("Pulangan", "回酬", "Return"), ml("Rendah", "低", "Low"), ml("Tinggi", "高", "High")],
    risk: [ml("Risiko", "风险", "Risk"), ml("Rendah", "低", "Low"), ml("Tinggi", "高", "High")],
    capital: [ml("Modal", "本金", "Capital"), ml("Tidak menghadapi kerugian modal", "不会面对本金亏损", "Capital is not exposed to loss"), ml("Mungkin menghadapi kerugian modal", "可能面对本金亏损", "Capital may be exposed to loss")],
    example: [ml("Contoh", "例子", "Examples"), ml("Akaun simpanan · Simpanan tetap", "储蓄户口 · 定期存款", "Savings account · Fixed deposit"), ml("Saham · Amanah saham", "股票 · 信托基金", "Shares · Unit trust")],
  };
  const selected = features[t.feature];
  setChallenge(loc(ml("Bandingkan simpanan dan pelaburan", "比较储蓄与投资", "Compare saving and investment")), loc(ml("Klik ciri di bawah; kedua-dua lajur berubah bersama.", "点击下方特点，两栏会同步显示课本说明。", "Select a feature below; both columns update together.")));
  els.stage.innerHTML = `<div class="compare-grid savings-investment"><div class="compare-card"><span class="compare-icon">🏦</span><h3>${loc(ml("Simpanan", "储蓄", "Saving"))}</h3>${metric(loc(selected[0]), loc(selected[1]), "positive")}</div><div class="compare-card"><span class="compare-icon">📈</span><h3>${loc(ml("Pelaburan", "投资", "Investment"))}</h3>${metric(loc(selected[0]), loc(selected[2]), "accent")}</div></div>`;
  els.controls.innerHTML = `<div class="segmented feature-tabs">${Object.entries(features).map(([id, feature]) => `<button type="button" data-feature="${id}" class="${id === t.feature ? "active" : ""}">${loc(feature[0])}</button>`).join("")}</div>`;
  els.controls.querySelectorAll("[data-feature]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.feature = button.dataset.feature; x.interacted = true; })));
  setSummary(`<strong>${loc(selected[0])}</strong> · ${loc(ml("Simpanan", "储蓄", "Saving"))}: ${loc(selected[1])} · ${loc(ml("Pelaburan", "投资", "Investment"))}: ${loc(selected[2])}`);
}

function growthBars(simple, compound, principal, years) {
  const max = Math.max(...compound, principal); return `<div class="growth-chart">${Array.from({ length: years + 1 }, (_, year) => `<div class="growth-column"><div class="growth-bars"><i style="height:${simple[year] / max * 100}%"></i><b style="height:${compound[year] / max * 100}%"></b></div><small>${year}</small></div>`).join("")}</div>`;
}

function renderInterest() {
  const t = state.tool; const simple = []; const compound = [];
  for (let year = 0; year <= t.years; year++) { simple.push(t.principal * (1 + t.rate / 100 * year)); compound.push(t.principal * Math.pow(1 + t.rate / 100, year)); }
  setChallenge(loc(ml("Bandingkan pertumbuhan faedah", "比较单利与复利增长", "Compare interest growth")), loc(ml("Hijau = faedah mudah · jingga = faedah kompaun", "绿色＝单利 · 橙色＝复利", "Green = simple interest · orange = compound interest")));
  els.stage.innerHTML = `<div class="chart-wrap">${growthBars(simple, compound, t.principal, t.years)}<div class="chart-legend"><span><i></i>${loc(ml("Faedah mudah", "单利", "Simple"))}</span><span><b></b>${loc(ml("Faedah kompaun", "复利", "Compound"))}</span></div><div class="metric-row">${metric(loc(ml("Mudah", "单利", "Simple")), ringgit(simple.at(-1)))}${metric(loc(ml("Kompaun", "复利", "Compound")), ringgit(compound.at(-1)), "accent")}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("intPrincipal", loc(ml("Modal (RM)", "本金（RM）", "Principal (RM)")), 100, 5000, 100, t.principal)}${slider("intRate", loc(ml("Kadar setahun", "年利率", "Annual rate")), 0, 15, .5, t.rate, "%")}${slider("intYears", loc(ml("Tempoh (tahun)", "时间（年）", "Time (years)")), 1, 15, 1, t.years)}</div>`;
  [["intPrincipal", "principal"], ["intRate", "rate"], ["intYears", "years"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); x.interacted = true; })));
  setSummary(`${loc(ml("Perbezaan selepas tempoh ini", "期末差额", "Difference at the end"))}: <strong>${ringgit(compound.at(-1) - simple.at(-1))}</strong>`);
}

function renderDebt() {
  const t = state.tool; const minimumMonthly = Math.ceil(t.cashPrice / t.months / 10) * 10; const creditTotal = t.monthly * t.months; const difference = creditTotal - t.cashPrice;
  setChallenge(loc(ml("Bandingkan harga tunai dan harga kredit", "比较现金价格与信贷价格", "Compare cash and credit prices")), loc(ml("Jumlah kredit = bayaran bulanan × bilangan bulan.", "信贷总价＝每月付款 × 月数。", "Credit total = monthly payment × number of months.")));
  els.stage.innerHTML = `<div class="compare-grid cash-credit-board"><div class="compare-card"><span class="compare-icon">💵</span><h3>${loc(ml("Harga tunai", "现金价格", "Cash price"))}</h3>${metric(loc(ml("Bayar sekali", "一次付清", "One payment")), ringgit(t.cashPrice), "positive")}</div><div class="compare-card"><span class="compare-icon">💳</span><h3>${loc(ml("Harga kredit", "信贷价格", "Credit price"))}</h3>${metric(`${ringgit(t.monthly)} × ${t.months} ${loc(ml("bulan", "个月", "months"))}`, ringgit(creditTotal), "accent")}</div></div><div class="credit-difference">${loc(ml("Perbezaan harga", "价格差额", "Price difference"))}<strong>${ringgit(difference)}</strong></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("creditCashPrice", loc(ml("Harga tunai (RM)", "现金价格（RM）", "Cash price (RM)")), 500, 10000, 100, t.cashPrice)}${slider("creditMonthly", loc(ml("Bayaran bulanan (RM)", "每月付款（RM）", "Monthly payment (RM)")), minimumMonthly, 2000, 10, t.monthly)}${slider("creditTerm", loc(ml("Tempoh (bulan)", "期限（月）", "Term (months)")), 6, 60, 6, t.months)}</div>`;
  document.querySelector("#creditCashPrice").addEventListener("change", event => changeTool(x => { x.cashPrice = Number(event.target.value); x.monthly = Math.max(x.monthly, Math.ceil(x.cashPrice / x.months / 10) * 10); x.interacted = true; }));
  document.querySelector("#creditMonthly").addEventListener("change", event => changeTool(x => { x.monthly = Math.max(minimumMonthly, Number(event.target.value)); x.interacted = true; }));
  document.querySelector("#creditTerm").addEventListener("change", event => changeTool(x => { x.months = Number(event.target.value); x.monthly = Math.max(x.monthly, Math.ceil(x.cashPrice / x.months / 10) * 10); x.interacted = true; }));
  setSummary(`${ringgit(t.monthly)} × ${t.months} = <strong>${ringgit(creditTotal)}</strong>; ${ringgit(creditTotal)} − ${ringgit(t.cashPrice)} = <strong>${ringgit(difference)}</strong>`);
}

function operationResult(a, b, op) { return op === "+" ? a + b : op === "−" ? a - b : op === "×" ? a * b : b ? a / b : 0; }

function renderOperationMat() {
  const t = state.tool; const maximum = ({ 2: 100, 3: 10000, 4: 100000, 5: 1000000 })[state.grade] || 1000000;
  const secondMaximum = t.op === "+" ? Math.max(0, maximum - t.a) : t.op === "−" ? t.a : t.op === "×" ? Math.max(1, Math.min(1000, Math.floor(maximum / Math.max(1, t.a)))) : 1000;
  const result = operationResult(t.a, t.b, t.op); const second = ["×", "÷"].includes(t.op) ? String(t.b) : ringgit(t.b); const expression = `${ringgit(t.a)} ${t.op} ${second} = ${ringgit(result)}`;
  setChallenge(loc(ml("Bina operasi wang sendiri", "建立自己的钱币运算", "Build your own money operation")), loc(ml("Nilai dan simbol boleh diubah; ini bukan soalan pilihan jawapan.", "金额与符号都能改变；这不是选择题。", "Change the values and symbol; this is not a multiple-choice question.")));
  els.stage.innerHTML = `<div class="operation-mat"><div class="operation-card">${ringgit(t.a)}</div><div class="operation-symbol">${t.op}</div><div class="operation-card">${second}</div><div class="operation-symbol">=</div><div class="operation-card result">${ringgit(result)}</div></div>`;
  els.controls.innerHTML = `<div class="grade-limit">${loc(ml("Julat buku teks tahun ini", "本年级课本数值范围", "Textbook range for this year"))}: <strong>${ringgit(maximum)}</strong></div><div class="field-grid operation-fields"><label>${loc(ml("Nilai pertama (RM)", "第一个金额（RM）", "First amount (RM)"))}<input id="opA" type="number" min="0" max="${maximum}" step="0.05" value="${t.a}"></label><label>${["×", "÷"].includes(t.op) ? loc(ml("Nombor", "数目", "Number")) : loc(ml("Nilai kedua (RM)", "第二个金额（RM）", "Second amount (RM)"))}<input id="opB" type="number" min="${t.op === "÷" || t.op === "×" ? 1 : 0}" max="${secondMaximum}" step="${["×", "÷"].includes(t.op) ? 1 : .05}" value="${t.b}"></label></div><div class="segmented operation-buttons">${["+", "−", "×", "÷"].map(op => `<button type="button" data-op="${op}" class="${op === t.op ? "active" : ""}">${op}</button>`).join("")}</div>`;
  document.querySelector("#opA").addEventListener("change", event => changeTool(x => { x.a = clamp(event.target.value, 0, maximum); if (x.op === "+") x.b = Math.min(x.b, Math.max(0, maximum - x.a)); if (x.op === "−") x.b = Math.min(x.b, x.a); if (x.op === "×") x.b = Math.min(x.b, Math.max(1, Math.floor(maximum / Math.max(1, x.a)))); x.interacted = true; }));
  document.querySelector("#opB").addEventListener("change", event => changeTool(x => { x.b = clamp(event.target.value, t.op === "÷" || t.op === "×" ? 1 : 0, secondMaximum); x.interacted = true; }));
  els.controls.querySelectorAll("[data-op]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.op = button.dataset.op; if (x.op === "×") x.b = Math.min(3, Math.max(1, Math.floor(maximum / Math.max(1, x.a)))); else if (x.op === "÷") x.b = 3; else x.b = Math.min(x.b, x.op === "+" ? Math.max(0, maximum - x.a) : x.a); x.interacted = true; })));
  setSummary(`<strong>${expression}</strong>`, result >= 0 ? "success" : "attention");
}

function renderOperationMachine() {
  const t = state.tool; const maximum = state.grade === 4 ? 100000 : 1000000; const firstChangeMaximum = t.op1 === "+" ? Math.max(0, maximum - t.start) : t.start; const first = operationResult(t.start, t.change, t.op1); const multiplierMaximum = t.op2 === "×" ? Math.max(1, Math.min(1000, Math.floor(maximum / Math.max(1, first)))) : 1000; const result = operationResult(first, t.multiplier, t.op2); const expression = `(${ringgit(t.start)} ${t.op1} ${ringgit(t.change)}) ${t.op2} ${t.multiplier} = ${ringgit(result)}`;
  setChallenge(loc(ml("Alirkan wang melalui dua operasi", "让金额通过两步运算", "Run money through two operations")), loc(ml("Ikut anak panah untuk melihat hasil pada setiap langkah.", "沿着箭头观察每一步的结果。", "Follow the arrows to see the result at each step.")));
  els.stage.innerHTML = `<div class="operation-machine"><div class="machine-step"><span>${loc(ml("Mula", "开始", "Start"))}</span><strong>${ringgit(t.start)}</strong></div><div class="machine-arrow">${t.op1} ${ringgit(t.change)} →</div><div class="machine-step"><span>${loc(ml("Langkah 1", "步骤 1", "Step 1"))}</span><strong>${ringgit(first)}</strong></div><div class="machine-arrow">${t.op2} ${t.multiplier} →</div><div class="machine-step result"><span>${loc(ml("Hasil", "结果", "Result"))}</span><strong>${ringgit(result)}</strong></div></div>`;
  els.controls.innerHTML = `<div class="grade-limit">${loc(ml("Julat buku teks tahun ini", "本年级课本数值范围", "Textbook range for this year"))}: <strong>${ringgit(maximum)}</strong></div><div class="machine-controls"><label>${loc(ml("Wang mula (RM)", "开始金额（RM）", "Starting money (RM)"))}<input id="machineStart" type="number" min="0" max="${maximum}" step="1" value="${t.start}"></label><label>${loc(ml("Operasi pertama", "第一步运算", "First operation"))}<select id="machineOp1"><option value="+" ${t.op1 === "+" ? "selected" : ""}>+</option><option value="−" ${t.op1 === "−" ? "selected" : ""}>−</option></select></label><label>${loc(ml("Nilai (RM)", "金额（RM）", "Amount (RM)"))}<input id="machineChange" type="number" min="0" max="${firstChangeMaximum}" step="1" value="${t.change}"></label><label>${loc(ml("Operasi kedua", "第二步运算", "Second operation"))}<select id="machineOp2"><option ${t.op2 === "×" ? "selected" : ""}>×</option><option ${t.op2 === "÷" ? "selected" : ""}>÷</option></select></label><label>${loc(ml("Nombor", "数目", "Number"))}<input id="machineMultiplier" type="number" min="1" max="${multiplierMaximum}" step="1" value="${t.multiplier}"></label></div>`;
  document.querySelector("#machineStart").addEventListener("change", event => changeTool(x => { x.start = clamp(event.target.value, 0, maximum); x.change = Math.min(x.change, x.op1 === "+" ? Math.max(0, maximum - x.start) : x.start); x.interacted = true; }));
  document.querySelector("#machineChange").addEventListener("change", event => changeTool(x => { x.change = clamp(event.target.value, 0, firstChangeMaximum); x.interacted = true; }));
  document.querySelector("#machineMultiplier").addEventListener("change", event => changeTool(x => { x.multiplier = clamp(event.target.value, 1, multiplierMaximum); x.interacted = true; }));
  document.querySelector("#machineOp1").addEventListener("change", event => changeTool(x => { x.op1 = event.target.value; x.change = Math.min(x.change, x.op1 === "+" ? Math.max(0, maximum - x.start) : x.start); x.interacted = true; }));
  document.querySelector("#machineOp2").addEventListener("change", event => changeTool(x => { x.op2 = event.target.value; x.multiplier = x.op2 === "×" ? Math.min(x.multiplier, Math.max(1, Math.floor(maximum / Math.max(1, operationResult(x.start, x.change, x.op1))))) : x.multiplier; x.interacted = true; }));
  setSummary(`<strong>${expression}</strong>`, result >= 0 ? "success" : "attention");
}

function renderShopLab() {
  const t = state.tool; const totalCost = t.cost * t.quantity; const sales = t.price * t.quantity; const result = sales - totalCost; const label = result >= 0 ? ml("Untung", "盈利", "Profit") : ml("Rugi", "亏损", "Loss");
  setChallenge(loc(ml("Uji sebuah gerai jualan", "模拟一个小摊位", "Experiment with a sales stall")), loc(ml("Ubah kos, harga jual dan kuantiti; hasil berubah serta-merta.", "改变成本、售价与数量；结果即时变化。", "Change cost, selling price and quantity; the result changes instantly.")));
  els.stage.innerHTML = `<div class="stall-scene"><div class="stall">🏪</div><div class="price-flow">${metric(loc(ml("Jumlah kos", "总成本", "Total cost")), ringgit(totalCost))}<b>→</b>${metric(loc(ml("Jumlah jualan", "总销售额", "Total sales")), ringgit(sales))}<b>→</b>${metric(loc(label), ringgit(Math.abs(result)), result >= 0 ? "positive" : "negative")}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("shopCost", loc(ml("Harga kos seunit (RM)", "单位成本（RM）", "Unit cost (RM)")), 1, 100, 1, t.cost)}${slider("shopPrice", loc(ml("Harga jual seunit (RM)", "单位售价（RM）", "Unit selling price (RM)")), 1, 150, 1, t.price)}${slider("shopQty", loc(ml("Kuantiti", "数量", "Quantity")), 1, 100, 1, t.quantity)}</div>`;
  [["shopCost", "cost"], ["shopPrice", "price"], ["shopQty", "quantity"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); x.interacted = true; })));
  setSummary(`${ringgit(t.price)} × ${t.quantity} − (${ringgit(t.cost)} × ${t.quantity}) = <strong>${result < 0 ? "−" : ""}${ringgit(Math.abs(result))}</strong>`, result >= 0 ? "success" : "attention");
}

function renderOfferLab() {
  const t = state.tool; const discountValue = t.original * t.discount / 100; const afterDiscount = Math.max(0, t.original - discountValue - t.voucher); const afterRebate = Math.max(0, afterDiscount - t.rebate); const taxValue = afterRebate * t.tax / 100; const final = afterRebate + taxValue;
  setChallenge(loc(ml("Bina tawaran dan baca resit", "设计优惠并查看收据", "Build an offer and read the receipt")), loc(ml("Setiap peluncur mewakili satu baris pada resit.", "每个滑杆对应收据上的一行。", "Each slider represents one line on the receipt.")));
  els.stage.innerHTML = `<div class="receipt-lab"><div class="receipt-title">🧾 ${loc(ml("RESIT", "收据", "RECEIPT"))}</div><div><span>${loc(ml("Harga asal", "原价", "Original price"))}</span><strong>${ringgit(t.original)}</strong></div><div><span>${loc(ml(`Diskaun ${t.discount}%`, `折扣 ${t.discount}%`, `Discount ${t.discount}%`))}</span><strong>−${ringgit(discountValue)}</strong></div><div><span>${loc(ml("Baucar", "礼券", "Voucher"))}</span><strong>−${ringgit(t.voucher)}</strong></div><div><span>${loc(ml("Rebat", "回扣", "Rebate"))}</span><strong>−${ringgit(t.rebate)}</strong></div><div><span>${loc(ml(`Cukai perkhidmatan ${t.tax}%`, `服务税 ${t.tax}%`, `Service tax ${t.tax}%`))}</span><strong>+${ringgit(taxValue)}</strong></div><footer><span>${loc(ml("Bayaran akhir", "最终付款", "Final payment"))}</span><strong>${ringgit(final)}</strong></footer></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("offerOriginal", loc(ml("Harga asal (RM)", "原价（RM）", "Original price (RM)")), 10, 1000, 5, t.original)}${slider("offerDiscount", loc(ml("Diskaun (%)", "折扣（%）", "Discount (%)")), 0, 80, 5, t.discount)}${slider("offerVoucher", loc(ml("Baucar (RM)", "礼券（RM）", "Voucher (RM)")), 0, 100, 5, t.voucher)}${slider("offerRebate", loc(ml("Rebat (RM)", "回扣（RM）", "Rebate (RM)")), 0, 100, 5, t.rebate)}${slider("offerTax", loc(ml("Cukai perkhidmatan (%)", "服务税（%）", "Service tax (%)")), 0, 10, 1, t.tax)}</div>`;
  [["offerOriginal", "original"], ["offerDiscount", "discount"], ["offerVoucher", "voucher"], ["offerRebate", "rebate"], ["offerTax", "tax"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); x.interacted = true; })));
  setSummary(`${ringgit(t.original)} − ${ringgit(discountValue)} − ${ringgit(t.voucher)} − ${ringgit(t.rebate)} + ${ringgit(taxValue)} = <strong>${ringgit(final)}</strong>`, "success");
}

function renderBalanceSheet() {
  const t = state.tool; const assets = t.cash + t.savings + t.property; const liabilities = t.loan + t.bills; const net = assets - liabilities;
  setChallenge(loc(ml("Seimbangkan aset dan liabiliti", "比较资产与负债", "Balance assets and liabilities")), loc(ml("Laraskan nilai untuk melihat bagaimana nilai bersih berubah.", "调整数值，观察净值如何变化。", "Adjust the values to see how net worth changes.")));
  els.stage.innerHTML = `<div class="balance-board"><section class="balance-side assets"><h3>＋ ${loc(ml("Aset", "资产", "Assets"))}</h3><div><span>${loc(ml("Tunai", "现金", "Cash"))}</span><strong>${ringgit(t.cash)}</strong></div><div><span>${loc(ml("Simpanan", "储蓄", "Savings"))}</span><strong>${ringgit(t.savings)}</strong></div><div><span>${loc(ml("Harta", "财产", "Property"))}</span><strong>${ringgit(t.property)}</strong></div><footer>${ringgit(assets)}</footer></section><section class="balance-side debts"><h3>− ${loc(ml("Liabiliti", "负债", "Liabilities"))}</h3><div><span>${loc(ml("Pinjaman", "贷款", "Loan"))}</span><strong>${ringgit(t.loan)}</strong></div><div><span>${loc(ml("Bil belum bayar", "未付账单", "Unpaid bills"))}</span><strong>${ringgit(t.bills)}</strong></div><footer>${ringgit(liabilities)}</footer></section></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("assetCash", loc(ml("Tunai (RM)", "现金（RM）", "Cash (RM)")), 0, 5000, 50, t.cash)}${slider("assetSavings", loc(ml("Simpanan (RM)", "储蓄（RM）", "Savings (RM)")), 0, 10000, 100, t.savings)}${slider("assetProperty", loc(ml("Harta (RM)", "财产（RM）", "Property (RM)")), 0, 20000, 500, t.property)}${slider("debtLoan", loc(ml("Pinjaman (RM)", "贷款（RM）", "Loan (RM)")), 0, 20000, 500, t.loan)}${slider("debtBills", loc(ml("Bil belum bayar (RM)", "未付账单（RM）", "Unpaid bills (RM)")), 0, 5000, 50, t.bills)}</div>`;
  [["assetCash", "cash"], ["assetSavings", "savings"], ["assetProperty", "property"], ["debtLoan", "loan"], ["debtBills", "bills"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); x.interacted = true; })));
  setSummary(`${ringgit(assets)} − ${ringgit(liabilities)} = <strong>${ringgit(net)}</strong> ${loc(ml("nilai bersih", "净值", "net worth"))}`, net >= 0 ? "success" : "attention");
}

function renderInterestDividend() {
  const t = state.tool; const isInterest = t.type === "interest"; const balance = isInterest ? t.capital * Math.pow(1 + t.rate / 100, t.years) : t.capital; const returnValue = isInterest ? balance - t.capital : t.capital * t.rate / 100;
  const typeLabel = isInterest ? ml("Faedah", "利息", "Interest") : ml("Dividen", "股息", "Dividend");
  const baseLabel = isInterest ? ml("Simpanan", "储蓄额", "Savings") : ml("Pelaburan", "投资额", "Investment");
  setChallenge(loc(ml("Teroka faedah dan dividen", "探索利息与股息", "Explore interest and dividends")), loc(ml("Tukar jenis dan nilai; model peratus dikemas kini serta-merta.", "切换种类并调整数值；百分率模型会即时更新。", "Switch the type and values; the percentage model updates immediately.")));
  const yearly = isInterest ? Array.from({ length: t.years }, (_, index) => t.capital * Math.pow(1 + t.rate / 100, index + 1)) : [];
  els.stage.innerHTML = `<div class="return-board"><div class="return-flow">${metric(loc(baseLabel), ringgit(t.capital))}<span>×</span>${metric(isInterest ? loc(ml("Baki setiap tahun", "每年结存", "Balance each year")) : loc(ml("Kadar dividen", "股息率", "Dividend rate")), isInterest ? `${100 + t.rate}%` : `${t.rate}%`, "accent")}${isInterest ? `<span>→</span>${metric(loc(ml("Baki akhir", "年终结存", "Ending balance")), ringgit(balance), "positive")}` : `<span>=</span>${metric(loc(typeLabel), ringgit(returnValue), "positive")}`}</div>${isInterest ? `<div class="yearly-return">${yearly.map((value, index) => `<div><span>${loc(ml(`Tahun ${index + 1}`, `第 ${index + 1} 年`, `Year ${index + 1}`))}</span><strong>${ringgit(value)}</strong></div>`).join("")}</div>` : `<div class="percent-model"><i style="width:${Math.min(100, t.rate)}%"></i><strong>${t.rate}% ${loc(typeLabel)}</strong></div>`}</div>`;
  els.controls.innerHTML = `<div class="segmented return-tabs"><button type="button" data-return-type="interest" class="${isInterest ? "active" : ""}">${loc(ml("Faedah simpanan", "储蓄利息", "Savings interest"))}</button><button type="button" data-return-type="dividend" class="${!isInterest ? "active" : ""}">${loc(ml("Dividen pelaburan", "投资股息", "Investment dividend"))}</button></div><div class="range-grid">${slider("returnCapital", `${loc(baseLabel)} (RM)`, 100, 10000, 100, t.capital)}${slider("returnRate", loc(ml("Kadar", "率", "Rate")), 1, 20, 1, t.rate, "%")}${isInterest ? slider("returnYears", loc(ml("Tempoh", "时间", "Time")), 1, 10, 1, t.years, ` ${loc(ml("tahun", "年", "years"))}`) : ""}</div>`;
  els.controls.querySelectorAll("[data-return-type]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.type = button.dataset.returnType; if (x.type === "interest") { x.capital = 3500; x.rate = 2; x.years = 2; } else { x.capital = 10000; x.rate = 9; } x.interacted = true; })));
  document.querySelector("#returnCapital").addEventListener("change", event => changeTool(x => { x.capital = Number(event.target.value); x.interacted = true; }));
  document.querySelector("#returnRate").addEventListener("change", event => changeTool(x => { x.rate = Number(event.target.value); x.interacted = true; }));
  document.querySelector("#returnYears")?.addEventListener("change", event => changeTool(x => { x.years = Number(event.target.value); x.interacted = true; }));
  setSummary(isInterest ? `${ringgit(t.capital)} × ${100 + t.rate}%${t.years > 1 ? ` × ${100 + t.rate}%`.repeat(t.years - 1) : ""} = <strong>${ringgit(balance)}</strong> · ${loc(typeLabel)}: <strong>${ringgit(returnValue)}</strong>` : `${ringgit(t.capital)} × ${t.rate}% = <strong>${ringgit(returnValue)}</strong> ${loc(typeLabel)}`);
}

function renderInsurance() {
  const t = state.tool;
  const protections = {
    life: ["❤️", ml("Hayat", "生命", "Life")], saving: ["🐷", ml("Simpanan", "储蓄", "Savings")], education: ["🎓", ml("Pendidikan", "教育", "Education")],
    medical: ["🏥", ml("Perubatan", "医药", "Medical")], accident: ["🩹", ml("Kemalangan diri", "人身意外", "Personal accident")], automobile: ["🚗", ml("Automobil", "汽车", "Automobile")], child: ["🧒", ml("Kanak-kanak", "儿童", "Children")],
  };
  setChallenge(loc(ml("Bandingkan insurans dan takaful", "比较保险与回教保险", "Compare insurance and takaful")), loc(ml("Gunakan dua paparan untuk melihat ciri dan jenis perlindungan dalam buku teks.", "用两个视图查看课本中的特点和保障种类。", "Use the two views to see the textbook features and protection types.")));
  if (t.view === "compare") {
    els.stage.innerHTML = `<div class="insurance-compare"><section><span class="shield">🛡️</span><h3>${loc(ml("Insurans", "保险", "Insurance"))}</h3><p>${loc(ml("Pemegang polisi membayar premium secara berkala.", "投保人定期支付保费。", "The policyholder pays premiums regularly."))}</p><p>${loc(ml("Syarikat insurans menanggung risiko.", "保险公司承担风险。", "The insurance company bears the risk."))}</p><p>${loc(ml("Tidak perlu beroperasi mengikut syariah.", "不需要依照伊斯兰教法来运作。", "It does not have to operate under Shariah principles."))}</p></section><section><span class="shield">🤝</span><h3>${loc(ml("Takaful", "回教保险", "Takaful"))}</h3><p>${loc(ml("Peserta membayar sumbangan secara berkala.", "缴纳者定期支付献金。", "Participants pay contributions regularly."))}</p><p>${loc(ml("Semua peserta saling menanggung risiko.", "所有参与者共同承担风险。", "All participants share the risk."))}</p><p>${loc(ml("Semua syarat mematuhi syariah.", "所有条件符合伊斯兰教法。", "All conditions follow Shariah principles."))}</p></section><div class="insurance-common"><strong>${loc(ml("Persamaan", "共同点", "In common"))}</strong><span>${loc(ml("Menanggung risiko dan memberi perlindungan ketika berlaku kerugian · Kontrak yang sah", "承担风险，在遭遇损失时提供保障 · 具法律效力的契约", "Risk protection when loss occurs · A legally valid contract"))}</span></div></div>`;
  } else {
    const selected = protections[t.protection];
    els.stage.innerHTML = `<div class="protection-catalog"><div class="selected-protection"><span>${selected[0]}</span><small>${loc(ml("Jenis perlindungan", "保障种类", "Protection type"))}</small><strong>${loc(selected[1])}</strong></div><div class="protection-grid">${Object.entries(protections).map(([id, item]) => `<button type="button" data-protection="${id}" class="${id === t.protection ? "active" : ""}"><span>${item[0]}</span><strong>${loc(item[1])}</strong></button>`).join("")}</div></div>`;
  }
  els.controls.innerHTML = `<div class="segmented insurance-tabs"><button type="button" data-insurance-view="compare" class="${t.view === "compare" ? "active" : ""}">${loc(ml("Banding ciri", "比较特点", "Compare features"))}</button><button type="button" data-insurance-view="protection" class="${t.view === "protection" ? "active" : ""}">${loc(ml("Jenis perlindungan", "保障种类", "Protection types"))}</button></div>`;
  els.controls.querySelectorAll("[data-insurance-view]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.view = button.dataset.insuranceView; x.interacted = true; })));
  els.stage.querySelectorAll("[data-protection]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.protection = button.dataset.protection; x.interacted = true; })));
  setSummary(t.view === "compare" ? loc(ml("Kedua-duanya memberikan perlindungan risiko melalui kontrak yang sah.", "两者都通过合法合约提供风险保障。", "Both provide risk protection through a valid contract.")) : `${loc(ml("Dipilih", "已选择", "Selected"))}: <strong>${loc(protections[t.protection][1])}</strong>`);
}

function renderTool() {
  els.stage.replaceChildren(); els.controls.replaceChildren();
  els.teacher.hidden = !["compose", "pay"].includes(state.activity);
  const renderers = { identify: renderIdentify, compose: () => renderMoneyBuilder("compose"), foreign: renderForeign, pay: () => renderMoneyBuilder("pay"), needWant: renderNeedWant, savingPlan: renderSavingPlan, budget: renderBudget, ledger: renderLedger, decision: renderDecision, paymentMethods: renderPaymentMethods, operationMat: renderOperationMat, operationMachine: renderOperationMachine, saveInvest: renderSaveInvest, simpleCompound: renderInterest, creditDebt: renderDebt, shopLab: renderShopLab, offerLab: renderOfferLab, documents: renderDocumentStudio, balanceSheet: renderBalanceSheet, interestDividend: renderInterestDividend, insurance: renderInsurance };
  renderers[state.activity]();
}

function startTool() { applyStaticLanguage(); refreshNavigation({ keepActivity: true }); state.tool ||= defaults(state.activity); renderTool(); }

function updateTeacherPreview() {
  const amount = Math.round(clamp(els.ringgit.value, 0, 10000) * 100 + clamp(els.sen.value, 0, 95)); els.preview.textContent = money(amount); els.teacherError.textContent = "";
}

function applyTeacherSettings() {
  const amount = Math.round(clamp(els.ringgit.value, 0, 10000) * 100 + clamp(els.sen.value, 0, 95)); const max = state.grade === 2 ? 10000 : 1000000;
  if (amount < 5 || amount > max || amount % 5) { els.teacherError.textContent = loc(state.grade === 2 ? ml("Tahun 2 menggunakan jumlah 5 sen hingga RM100, dalam gandaan 5 sen.", "二年级使用 5 仙至 RM100，仙数须为 5 的倍数。", "Year 2 uses 5 sen to RM100 in multiples of 5 sen.") : ml("Tahun 3 menggunakan jumlah hingga RM10 000, dalam gandaan 5 sen.", "三年级使用不超过 RM10,000 的金额，仙数须为 5 的倍数。", "Year 3 uses amounts up to RM10,000 in multiples of 5 sen.")); return; }
  state.teacherAmount = amount; els.dialog.close(); state.tool = defaults(state.activity); beep("done"); renderTool();
}

document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => { state.lang = button.dataset.lang; beep(); applyStaticLanguage(); refreshNavigation({ keepActivity: true }); renderTool(); }));
document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => { if (button.disabled) return; state.mode = button.dataset.mode; state.activity = GRADE_MODES[state.grade][state.mode][0]; state.tool = null; beep(); startTool(); }));
els.grade.addEventListener("change", () => { state.grade = Number(els.grade.value); state.tool = null; beep(); refreshNavigation(); startTool(); });
els.activity.addEventListener("change", () => { state.activity = els.activity.value; state.tool = null; beep(); refreshNavigation({ keepActivity: true }); startTool(); });
els.reset.addEventListener("click", () => { state.tool = defaults(state.activity); beep(); renderTool(); });
els.sound.addEventListener("click", () => { state.sound = !state.sound; els.sound.setAttribute("aria-pressed", String(state.sound)); applyStaticLanguage(); if (state.sound) beep("done"); });
els.teacher.addEventListener("click", () => { els.ringgit.value = Math.floor(state.teacherAmount / 100); els.sen.value = state.teacherAmount % 100; updateTeacherPreview(); els.dialog.showModal(); beep(); });
[els.ringgit, els.sen].forEach(input => input.addEventListener("input", updateTeacherPreview)); els.useSettings.addEventListener("click", applyTeacherSettings);
els.controls.addEventListener("input", event => {
  if (!event.target.matches('input[type="range"]')) return;
  const valueLabel = event.target.closest(".range-control")?.querySelector("strong");
  if (valueLabel) valueLabel.textContent = `${event.target.value}${event.target.dataset.suffix || ""}`;
});

applyStaticLanguage(); refreshNavigation(); state.tool = defaults(state.activity); renderTool();
