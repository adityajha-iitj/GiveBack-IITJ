/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'suse': ['SUSE', 'sans-serif'],
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        primary:"#CE7940",
      },
    },
  },
  plugins: [],
}