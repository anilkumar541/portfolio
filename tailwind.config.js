/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#0A192F", //#11224
        primaryColor: "#64FFDA", 
        textColor: "#8892B0"
      }
    },
    
    screens: {
      // min-width
      // => @media (min-width: 640px) { ... }
      'xss-min': '501px',
      'xs-min': '476px',
      'sm-min': '640px',
      'md-min': '768px',
      'lg-min': '1024px',
      'xl-min': '1280px',
      '2xl-min': '1536px',

      // max-width
      // => @media (max-width: 1535px) { ... }
      '2xl-max': {'max': '1535px'},
      'xl-max': {'max': '1279px'},
      'lg-max': {'max': '1023px'},
      'md-max': {'max': '767px'},
      'sm-max': {'max': '639px'},
      'xs-max': {'max': '475px'},
      'xss-max': {'max': '500px'},
    },

    
  },
  plugins: [],
}

