/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Some useful comment
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"Nanum Gothic Coding"', 'monospace'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}

