# P3 - DEV@Deakin React Home Page

This project continues the P2 DEV@Deakin website and migrates the frontend to React using Vite.

## Included features
- React parent/child component structure.
- Existing P2-style profile, projects, photo gallery and subscription section.
- Featured Articles and Featured Tutorials.
- Articles and tutorials are stored in arrays and displayed with `map()`.
- Footer with Explore, Support and social links.
- Existing Express + SendGrid subscription backend is kept as a separate root file (`server.cjs`); the P3 task only requires the frontend migration.

## Setup
1. Install Node.js.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Add your SendGrid API key and verified sender email to `.env`.
6. Open one terminal and run `npm run server`.
7. Open another terminal and run `npm run dev`.
8. Open the Vite address shown in the terminal, normally `http://localhost:5173`.

## Images
Put your own images in `public/images/`. Use the filenames listed in `public/images/ADD-YOUR-IMAGES.txt`.
The project includes image placeholders/instructions only; add your own images.

## Important
- Do not upload `.env`, `node_modules/` or `dist/` to GitLab.
- Create the GitLab project named `Task P3` and set visibility to Internal.
- Test the subscription feature with your own verified SendGrid sender.
- Take your own screenshots and record your own 2-4 minute walkthrough.
