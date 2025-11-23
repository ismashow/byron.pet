/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // Procura classes em todos os arquivos HTML e JS
  theme: {
    extend: {
      colors: {
        'brand-brown': '#7B3F3F',
        'brand-pink': '#D9A6A6',
        'brand-light': '#FFF9F5',
        'brand-card': '#FDF2F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
        'anonymous': ['"Anonymous Pro"', 'monospace'],
      }
    },
  },
  plugins: [],
}