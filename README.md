# 🌾 Noolava (நூலவா)

A lightweight, ultra-accessible web marketplace connecting traditional handloom weavers in Tamil Nadu directly with buyers. This repository contains the Noolava client prototype — a zero-dependency, semantic HTML/CSS/JavaScript front-end focusing on accessibility, bilingual support, and low-bandwidth performance.

Badges
- Language: HTML • CSS • JavaScript
- Focus: WCAG-friendly UI/UX
- License: MIT (add LICENSE file to the repo)

Quick links
- Live prototype / assets: https://drive.google.com/file/d/1nQHty9UR56b1hCdcwiniibIrb3CuiS8I/view?usp=sharing
- Installation instructions: docs/INSTALL.md
- Usage examples: docs/USAGE.md
- Contribution guidelines: CONTRIBUTING.md

Overview
Noolava is designed to help heritage handloom weavers reach customers while keeping the web client simple and accessible for low-end mobile devices and users with limited technical literacy. Key UX goals include minimal cognitive load, bilingual Tamil/English support, and communication pathways (e.g., WhatsApp deep links) that align with local user habits.

Key features
- Voice-enabled search and conversational entry points for Tamil (browser voice APIs)
- Bilingual UI (English ↔ Tamil) with runtime toggle and readable phrasing
- Heritage verification badges (for GI / Handloom markings) on product listings
- Lightweight client-side filtering and product browsing with no build-step required

Tech stack
- Markup: Semantic HTML5
- Styling: Responsive CSS3 (grid + flexbox)
- Logic: Vanilla JavaScript (no front-end framework)
- Delivery: Static client — can be served directly by opening index.html or by any static web server

Quick start (local)
1. Clone the repository:
   git clone https://github.com/gokulrajmisox/loom.git
   cd loom
2. Open index.html in your browser, or serve the folder with a static server:
   - npx http-server . -p 8080
   - OR, if you prefer Python: python3 -m http.server 8080
3. Visit http://localhost:8080 in your browser.

If you plan to use Node tooling or npm scripts, see docs/INSTALL.md for instructions.

Roadmap
- [x] Responsive UI and semantic markup
- [x] Client-side filtering and catalog browsing
- [x] Localized features: bilingual support, WhatsApp deep links
- [ ] Backend API for inventory and orders
- [ ] Production deployment and artisan onboarding

Contributing
Please read CONTRIBUTING.md for development guidelines, code style, and PR process.

⚖️ License
Distributed under the MIT License. Developed with absolute pride to empower the traditional weavers of Tamil Nadu. ❤️
