/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:'#F5385D',
        'regal-blue' : "#ffe1bc",
        'regal-blue1': "#ffcfd1",
        'regal-blue2': "#f3c6f1",
        'black-rgba': 'rgba(225, 225, 225, 0.54)'
      },

      fontsize:{
        "faheem":"100rem"
      },
      fontfamily:{
        'sans' :['Inter','sans-serif']

      }
    },
  },
  plugins: [ ],
}
