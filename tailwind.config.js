/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-glow': '40px 0 100px #008cff, -40px 0 100px #e100ff',
      },
    },
  },
  plugins: [],
}

