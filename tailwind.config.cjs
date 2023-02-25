/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   fontFamily: {
   Poppins:"Poppins"
  },

  extend: {
    colors: {
      ghostWhite:"#f8f8ff",
      grey: "#9f9fa0",
      blue: "#0369AI"
    },
boxShadow: {
  heroSadow: "0px 0px 16px rgba(0,0,0,0.15)"
}
},
screens: {
  xs: "480px",
  sm:  "768px",
  md: "1060px",
 },
},
plugins:[],
}
 
