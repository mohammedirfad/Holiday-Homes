/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#F5385D'
      }
    },
  },
  plugins: [ ],
}
