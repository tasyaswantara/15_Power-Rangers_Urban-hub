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
    },
  },
  plugins: [],
}

