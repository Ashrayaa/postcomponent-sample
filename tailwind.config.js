/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{
        "primary":"black",
        "secondary":"white"
      },
      fontFamily:{
        Roboto:["Roboto,sans-serif"]
      },
      container:{
        // padding:"2 rem",
        // center:true,
      },
      screens:{
        sm:"640px",
        md:"780px",
      }
    },
  },
  plugins: [],
}

