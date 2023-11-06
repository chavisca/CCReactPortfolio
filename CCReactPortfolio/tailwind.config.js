/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        edutas: ['Edu TAS Beginner', 'cursive'],
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}

