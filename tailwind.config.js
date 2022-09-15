/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/partials/*.ejs"],
  theme: {
    screens: {
      sm: '480px',
      md: '780px',
      lg: '976px',
      xl: '1440px'
    },
    
    extend: {
      colors: {
        'navCol':"#E4E8E5",
        'beige': '#BD7E4E',
        'armyGreen': '#526B56',
        'darkGreen': '#023C22',
        'mustard': '#DCA311',
        'darkGreen-50':"#023c22bb"
      },
    },
  },
  plugins: [],
}
