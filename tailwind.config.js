/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
   
  
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--poppins-font)', 'sans-serif'],
      },
     
      dropShadow: {
        'white': '0 10px 15px rgba(0, 25, 38, 0.25)',
      },
      boxShadow: {
        'bl': '0 15px 15px 0px rgba(0, 25, 38, 0.25)',
      },

      colors: {
        'gray': '#596573',
        'whitebg': '#F9F9F9',
        'bright-gray': '#E3EDEE',
        'dim-gray': '#686A6C'

      },
      screens: {
        'mobile': '360px',
      },

      
    },
   
  },
  plugins: [],
}
