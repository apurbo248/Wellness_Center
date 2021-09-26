module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        mainColorLight:"#DBCCF5",
        mainColorDark:"#210D43",
        darkColor:"#222c36",
        gray:"#ffffff",
        gray2:"#DDDDDD",
        gray3:"#606060",
        lightColor:"#f8f6f6 ",
        slc:"#f9f6f6",
        fw300:"300",
        fw400:"400",
        fw500:"500",
        ff:"'Roboto', sans-serif" 
      },
      margin:{
        menuML:"-7rem",
        menuMT:"-.5rem",
        mmt:"-4.5rem",
        mmt1:"-5rem",
        mmt2:"-14rem",
       mlm:"-2rem",
       mlm2:"-8rem",
       mlm3:"-2rem",
       tml:"50rem"
      },
      boxShadow:{
        shadow1:" 0 2px 6px -1px rgba(199, 251, 205, 1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      
      },
      padding:{
        pl:"54rem",
        plm:"-12rem"
      },
      height:{ 
        h:"700px",
        
       
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
