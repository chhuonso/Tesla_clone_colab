/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-rgba': 'rgba(45, 45, 45, .4)',
        'main': '#171A20',
        'primary': '#393C41',
      },
    },
  },
  plugins: [],
}