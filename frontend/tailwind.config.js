/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'subtle-scroll': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
        }
      },
      animation: {
        'subtle-scroll': 'subtle-scroll 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} 