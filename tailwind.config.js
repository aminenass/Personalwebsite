/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
        colors: {
              'darkish': '#100f11',
              'custom-blue' : "#058ED9",
              'custom-gray' : "#2D2C2E",
              
      },
      fontFamily: {
        jak: ['"Plus Jakarta Sans"', 'sans-serif'], 
        Poppins :[ "Poppins", "serif"]// Add it as a default sans font
      },

    },
    
  },
  
  plugins: [  

],
}

