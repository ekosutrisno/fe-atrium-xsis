module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        atrium:['Quicksand', 'sans-serif']
      },
      scale:{
        'cs01':'1.0075'
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover','group-hover','focus', 'active'],
      ringOpacity: ['hover','group-hover','focus', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
