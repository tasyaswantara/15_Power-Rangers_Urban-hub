/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home:"url('/src/assets/images/bg_homepage1.svg')",
        bgbg:' linear-gradient(0deg, #FFF 52.66%, rgba(255, 255, 255, 0.79) 73.67%, rgba(255, 255, 255, 0.00) 100%)',
        bg_blur:"url('/src/assets/images/bg_blur.png')",
        bg_listhitam:"url('/src/assets/images/bg_listhitam.svg')",
        bg_listputih:"url('/src/assets/images/bg_listputih.svg')",
        bg_review:"url('/src/assets/images/bg_review.svg')",

      },
      colors: {
        primary:{
          black:"#211814",
          white:"#F1F1EF",
        },      
        
        secondary:{
          blue:"#236DF6",
          orange: "#FA5A28",
          yellow:"#FFBE0C",
          lightgreen:"#E8FEF1",
          lightyellow:"#FFF9D5",
          lightblue:"#D3E2FD",
        },
        text:{
          black:"#211814",
          Placeholder:"#878787"
        },
        outline:{
          gray:"#D5D5D5",
        },        
      }
    },
  },
  plugins: [],
}

