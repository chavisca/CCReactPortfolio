/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    colors: {
      'white': '#EDEBD7',
      'red': '#E3B23C',
      'blue': '#4D9DE0',
      'slate': '#423E37',
      'gray': '#6E675F'
    },
    extend: {
      fontFamily: {
        edutas: ['Edu TAS Beginner', 'cursive'],
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}

