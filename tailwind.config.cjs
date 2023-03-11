/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":"Poppins"
      },
      colors:{
        "primary" :"#C9EEFF",
        "secondary" :"#0A1931",
        "info" :"#0A2647",
        "danger" :"#EEE9DA",
        "form" :"#400D51",
        "footer":"#805b75",
        "text" :"#03001C",
        "card":"#3A98B9"
      }
    },
  },
  plugins: [],
}
