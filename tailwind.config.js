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
      },
      fontSize: {
        'custom-nav': '15px', 
      },
      height: {
        'hero': '780px', 
        'hero-cel': '480px', 
      },
    },
  },
  plugins: [],
}