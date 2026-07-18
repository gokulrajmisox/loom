# Installation & Setup

This project is a static front-end prototype. You can run it locally without build tooling.

Running locally (no Node required)
1. Clone:
   git clone https://github.com/gokulrajmisox/loom.git
   cd loom
2. Open index.html in your browser.

Optional: Serve with a local static server
- Using Node (http-server)
  npm install -g http-server
  http-server . -p 8080
- Using npx (without global install)
  npx http-server . -p 8080
- Using Python 3
  python3 -m http.server 8080

Browser voice features
- Some voice features rely on the Web Speech API (SpeechRecognition / speechSynthesis) which works best in Chromium-based browsers.
- For testing on mobile, use a browser with speech API support and serve over http(s) rather than file:// in some cases.

Adding a license
- To declare the MIT license, add a LICENSE file to the repository root with the standard MIT text.
