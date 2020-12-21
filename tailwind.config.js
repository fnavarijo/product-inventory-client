const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fill: ['hover'],
  },
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      textColor: {
        base: '#777777',
      },
      spacing: {
        256: '256px',
      },
      padding: {
        full: '100%',
      },
      gridTemplateColumns: {
        nav: '256px 1fr',
      },
      gridTemplateRows: {
        content: '150px 1fr',
      },
      fill: theme => ({
        primary: theme('colors.primary.500'),
      }),
    },
    colors: {
      white: defaultTheme.colors.white,
      black: defaultTheme.colors.black,
      gray: defaultTheme.colors.gray,
      amber: defaultTheme.colors.yellow,
      'light-gray': {
        400: '#E7E7E7',
        500: '#E4E4E4',
        600: '#DFDFDF',
      },
      'dark-gray': {
        400: '#767F84',
        500: '#465157',
        600: '#222329',
        700: '#181B1F',
      },
      primary: {
        500: '#ADA084',
        600: '#9D8D6B',
      },
    },
  },
};
