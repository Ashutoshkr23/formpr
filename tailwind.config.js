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
        sans: ['Poppins', 'sans-serif'],
      },
     
      dropShadow: {
        'white': '0 10px 15px rgba(0, 25, 38, 0.25)',
      },
    },
   
  },
  plugins: [],
}
