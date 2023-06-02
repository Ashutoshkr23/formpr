/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
   
  
    extend: {
      fontFamily: {
        sans: ['var(--poppins-font)', 'sans-serif'],
      },
     
      dropShadow: {
        'white': '0 10px 15px rgba(0, 25, 38, 0.25)',
      },

      colors: {
        'gray': '#596573',
        'whitebg': '#F9F9F9',

      },
      screens: {
        'mobile': '360px',
      },

      
    },
   
  },
  plugins: [],
}
