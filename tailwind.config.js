/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        '70': '70px',
        '90': '90px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
