/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // root HTML files
    "./**/*.html", // agar subfolders me bhi HTML hain
    "./src/**/*.{js,ts,jsx,tsx}", // future JS/React files (safe to keep)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
