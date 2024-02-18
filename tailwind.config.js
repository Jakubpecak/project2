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
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

