/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      keyframes: {
        rotate_around: {
          'from': { rotate: '0deg' },
          'to': { rotate: '360deg' },
        }
      },
      animation: {
        rotate: 'rotate_around 20s  infinite',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

