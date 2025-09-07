/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#35AFA0',
        textWhite : '#FFFFFF',
        mainColor : '#3E445A',
        borderColor : '#E3E4E6',
        lightRed : '#FFF1EE',
        darkRed : '#EA2B0F',
        lightGray : '#71778E',
        bgColor : '#F7F8FD',
        black : '#202435'
      },
      screens : {
        'max-xs' : {'max' : '520px'},
        'max-sm' : {'max' : '639px'},
        'max-md' : {'max' : '767px'},
        'max-lg' : {'max' : '1023px'},
        'max-xl' : {'max' : '1279px'}
      }
    },
  },
  
  plugins: [],
}



