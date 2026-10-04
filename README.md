# SmartMoneyTool

An interactive Malaysian primary-school money toolkit for Years 2–6, available in Bahasa Melayu, Chinese and English. The scope follows the KSSR money units used by SK and SJK and favours concrete manipulation over broad but shallow topic coverage.

## Learning progression

- **Year 2:** recognise Malaysian notes and coins up to RM100, determine and compose values, carry out money operations, pay exact amounts, and plan saving, spending and donations.
- **Year 3:** compose and operate on money values, pay in daily situations, compare ASEAN currencies using a teacher-supplied current rate, and explore needs, wants and planned saving.
- **Year 4:** carry out basic and combined money operations, compare major foreign currencies, operate textbook-listed payment methods, keep a running income-and-expense record, and explore responsible spending decisions.
- **Year 5:** build money operations, compare saving with investment, compare simple with compound interest, and compare cash prices with credit totals.
- **Year 6:** model profit or loss, construct discount-and-tax receipts, build bills/invoices/receipts, compare assets with liabilities, explore textbook interest/dividend examples, and compare insurance with takaful.

## Features

- Official current-series Malaysian banknote and coin images
- Click-to-compose money tray with a live total and real Malaysian currency images
- Grade-bounded random target amounts for the Year 2 and Year 3 money-composition tool
- A Year 2–3 exact-payment counter with fifteen products and matching random price ranges
- A real drag-and-drop needs-and-wants board that draws six balanced random cards from a bank of twenty situations, with an accessible tap-card-then-tap-space alternative
- A Year 4 decision board that draws six random-priced purchases from a bank of twenty-four
- A Year 4 step-by-step payment workbench covering cash, self-checkout, contactless bank cards, online payment and QR payment without quiz prompts
- Textbook comparison boards for Year 5 saving/investment and cash/credit concepts
- Year 6 textbook models for compound interest, dividends, insurance, takaful and protection types
- Savings and money-allocation tools with visible calculations
- Grade-specific tools aligned to the Year 2–6 KSSR money standards used by SK and SJK
- Teacher-controlled demonstration amounts
- Bahasa Melayu, Chinese and English interface
- Responsive desktop and mobile layout

## Currency image sources

Currency images are sourced from Bank Negara Malaysia and are displayed as electronic educational references without changing the original currency design.

- [Current Banknote Series](https://www.bnm.gov.my/currency/banknotes)
- [Current Coin Series](https://www.bnm.gov.my/currency/coins)
- [Guidelines on Reproduction of Malaysian Currency Image](https://www.bnm.gov.my/documents/20124/39730/en_reproduction_guide.pdf)

The interface adds a visible `CONTOH` web overlay and credits Bank Negara Malaysia. Images remain single-sided and are not presented at physical print size.

## Curriculum references

- [KPM-linked Year 2 SK, SJKC and SJKT digital textbooks](https://sites.google.com/moe-dl.edu.my/ppd-batu-pahat-sains-matematik/buku-teks-digital-bidang-sains-matematik/buku-teks-sekolah-rendah/matematik-tahun-2)
- [KSSR Mathematics Year 2: Money](https://c.zoom-a.com/cache/dbp/refpub/1668665030212/DSKP-Th2-MM.pdf)
- [KSSR Mathematics Year 3: Money](https://c.zoom-a.com/cache/dbp/refpub/1668664885340/DSKP-Th3-MM.pdf)
- [KPM-linked Year 4 SK, SJKC and SJKT digital textbooks](https://sites.google.com/moe-dl.edu.my/ppd-batu-pahat-sains-matematik/buku-teks-digital-bidang-sains-matematik/buku-teks-sekolah-rendah/matematik-tahun-4)
- [KSSR Mathematics Year 4](https://www.tcer.my/wp-content/uploads/2021/01/KSSR-MATEMATIK-TAHUN-4-DIJAJARKAN-NEW.pdf)
- [KSSR Mathematics Year 5](https://asiemodel.net/wp-content/uploads/2022/08/009_DSKP_KSSR_Semakan_2017_Matematik_Thn5-print.pdf)
- [KSSR Mathematics Year 6](https://asiemodel.net/wp-content/uploads/2022/08/3.-DSKP-MATEMATIK-TAHUN-6_isbn.pdf)
- [SJKC Mathematics Year 2, Volume 2](https://fliphtml5.com/siyab/rwkl/Matematik_Tahun_2_SJKC_Jilid_2/)
- [SJKC Mathematics Year 3, Volume 2](https://fliphtml5.com/izabd/lwiu/Matematik_Tahun_3_SJKC_Jilid_2/)
- [SJKC Mathematics Year 4](https://fliphtml5.com/izabd/zkzn/Matematik_Tahun_4_SJKC_compressed/)
- [SJKC Mathematics Year 6](https://fliphtml5.com/izabd/tqkq/%E5%85%AD%E5%B9%B4%E7%BA%A7_%E6%95%B0%E5%AD%A6%E8%AF%BE%E6%9C%AC/)

## Run locally

Open `index.html` in a modern browser. No build step is required.

## Verification

`tests/smoke.mjs` checks all twenty-one distinct tools, curriculum-specific category labels and value limits, the Year 6 RM3,500 compound-interest model, currency assets, exact RM56.50 composition, drag-and-drop boards, upper-year interactions, teacher settings, language switching and mobile overflow through the Chrome DevTools Protocol.
