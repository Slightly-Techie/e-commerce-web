/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors:{},
    backgroundImage:{
      'stn':"url(/src/assets/stn_avengers.png)"
    },
    fontFamily:{
      "inter":["Inter"],
      "inter-light":["Inter"]
    }
  },
  plugins: [],
}

