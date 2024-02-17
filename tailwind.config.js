/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#123456',
      },
      spacing: {
        '72': '18rem',
      },
      className: {
        'custom-transform': 'transform: rotate(45deg);',
      }
    },
  },
  plugins: [],
}

