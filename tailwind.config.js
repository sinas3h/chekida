/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans : ["Dana"] 
      }
    },
  },
  plugins: [],
}

