# SmartMoneyTool

An interactive Malaysian primary-school money toolkit for Years 2–6, available in Bahasa Melayu, Chinese and English. Every activity is a manipulable classroom simulation rather than a scored exercise.

## Learning progression

- **Year 2:** recognise current Malaysian banknotes and coins, compose equivalent values, pay exact amounts, distinguish needs and wants, and plan simple savings.
- **Year 3:** money combinations, everyday payments, ASEAN currency names, cashless payment tools and simple budgets.
- **Year 4:** payment methods, receipts and bills, budgeting, wise financial decisions, and cash versus credit.
- **Year 5:** savings and investments, simple and compound interest, credit and debt.
- **Year 6:** profit and loss, discounts/rebates/vouchers, bills/invoices/receipts, assets and liabilities, insurance and takaful.

Formal addition, subtraction, multiplication and division practice is intentionally reserved for the separate Block Operations Tool.

## Features

- Official current-series Malaysian banknote and coin images
- Click-to-compose money tray with a live total and real Malaysian currency images
- Hands-on checkout, payment-method, needs-and-wants, saving, budget, interest, debt, discount, profit/loss and protection simulators
- Grade-specific tools based on Malaysian primary textbook topics
- Teacher-controlled amount, rate and period settings for classroom demonstrations
- Bahasa Melayu, Chinese and English interface
- Spoken prompts and interaction/feedback sounds
- Responsive desktop and mobile layout

## Currency image sources

Currency images are sourced from Bank Negara Malaysia and are displayed as electronic educational references without changing the original currency design.

- [Current Banknote Series](https://www.bnm.gov.my/currency/banknotes)
- [Current Coin Series](https://www.bnm.gov.my/currency/coins)
- [Guidelines on Reproduction of Malaysian Currency Image](https://www.bnm.gov.my/documents/20124/39730/en_reproduction_guide.pdf)

The interface adds a visible `CONTOH` web overlay and credits Bank Negara Malaysia. Images remain single-sided and are not presented at physical print size.

## Run locally

Open `index.html` in a modern browser. No build step is required.

## Verification

`tests/smoke.mjs` checks all 21 tools, currency asset loading, the `CONTOH` marker, money manipulation, teacher settings, language switching, removal of legacy assessment controls and mobile overflow through the Chrome DevTools Protocol.
