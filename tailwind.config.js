/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-page': '#EDECE9', 
        'custom-footer': '#242321', 
        'custom-input': '#504F4C', 
      },
      fontSize: {
        'custom-nav': '15px', 
      },
      height: {
        'hero': '780px', 
        'hero-cel': '480px', 
        'banner-h': '1000px', 
      },
      width: {
        'mid': '462px', 
        'midImg': '923px', 
        
      },
    },
  },
  plugins: [],
}