IMAGE AND TAILWIND FIX

What was fixed:
- All image files stay in public/images.
- The real mountain_2 image is named mountain_2.jpeg, so all references now use .jpeg.
- mountain_3.jpg was not present in the supplied folder, so it was removed from the gallery.
- The gallery now displays only the 7 image files that actually exist.
- Page styling uses Tailwind utility classes. src/styles.css contains only: @import "tailwindcss";

How to run:
1. Extract this project folder.
2. Open the P3-DEV-Jatin folder in VS Code.
3. Open the terminal in that folder.
4. Run: npm install
5. Run: npm run dev
6. Open the localhost URL shown by Vite.

Note: npm install needs an internet connection to download the Tailwind packages.
