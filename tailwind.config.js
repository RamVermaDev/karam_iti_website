/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1B3D',
          'navy-dark': '#060E21',
          'navy-light': '#142E66',
          amber: '#D97706',
          'amber-light': '#F59E0B',
          'amber-bg': '#FEF3C7',
          crimson: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
