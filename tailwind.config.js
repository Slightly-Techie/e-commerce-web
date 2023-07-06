/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage:{
      'stn':"url(/src/assets/stn_avengers.png)"
    },
    screens: {
      sm: "640px", // Small screens and above (640px)
      md: "768px", // Medium screens and above (768px)
      lg: "1024px", // Large screens and above (1024px)
      xl: "1400px", // Extra-large screens and above (1280px)
    },
  },
  plugins: [],
};
