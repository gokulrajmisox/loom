# Usage & Developer Notes

Project structure
- index.html — entry point and main UI
- assets/ — images and static assets (if present)
- css/ — stylesheets
- js/ — vanilla JavaScript behavior

Running the prototype
- Open index.html or serve the directory and open the served URL.
- Search UI: voice input (microphone), or type queries in Tamil/English.
- Product listings show heritage badges and contact links (WhatsApp deep links).

Extending the project
- To add a backend API: create endpoints for product catalog, inventory, and orders; convert client calls from static mock data to real API calls.
- To support localization files: create a small JSON file per language and load at runtime, or use basic key/value lookup in JS.

Testing suggestions
- Manual accessibility testing with a screen reader (NVDA, VoiceOver) and keyboard-only navigation.
- Lighthouse audits for performance and accessibility.
