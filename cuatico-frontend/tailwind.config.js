/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/.{html,ts}",
  ],
  theme: {
    extend: {

      colors: {
        primario: '#4b30fc',
        secundario: '#d2ccff',
    },
  },
  plugins: [],
  }
}