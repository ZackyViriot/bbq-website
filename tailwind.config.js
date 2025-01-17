/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bbq-red': '#FF4136',
        'bbq-orange': '#FF851B',
        'bbq-brown': '#3D2B1F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'smoke': 'smoke 3s infinite',
      },
      keyframes: {
        smoke: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: 0.4 },
          '100%': { transform: 'translateY(-20px) scale(1.5)', opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}