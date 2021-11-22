module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#0B1D26',
       'secondary': '#455d63',
       'revr-green': '#91B539',
      }),
      opacity: theme => ({
        '10' : '0.1',
      }), 
      fontSize:{
        '6xl' : [
          '65px', {
            letterSpacing:'0em',
            lineHeight: '100px',
          }
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
