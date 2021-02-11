const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fill: ['hover'],
    stroke: ['hover'],
    display: ['hover', 'responsive', 'group-hover'],
    inset: ['hover', 'responsive', 'group-hover'],
    visibility: ['responsive', 'group-hover'],
    width: ['responsive', 'group-hover'],
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
        card: '150%',
      },
      padding: {
        full: '100%',
      },
      gridTemplateColumns: {
        nav: '256px minmax(0, 1fr)',
      },
      gridTemplateRows: {
        content: '150px 1fr',
      },
      fill: theme => ({
        primary: theme('colors.primary.500'),
      }),
      stroke: theme => ({
        primary: theme('colors.primary.500'),
      }),
      width: {
        max: 'max-content',
      },
      height: {
        'screen-4/5': '80vh',
      },
      minHeight: {
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
      },
      inset: {
        '-4': '-1rem',
        '-8': '-2rem',
        '-12': '-3rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '1/2': '50%',
      },
      transitionProperty: {
        bottom: 'bottom',
        top: 'top',
        width: 'width',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0, 1.12, 1, 1)',
        'in-slide': 'cubic-bezier(0.05, 0.93, 1, 1)',
      },
      screens: {
        '2xl': '1536px',
      },
    },
    colors: {
      white: defaultTheme.colors.white,
      black: defaultTheme.colors.black,
      gray: defaultTheme.colors.gray,
      amber: defaultTheme.colors.yellow,
      red: {
        500: '#DE6F6E',
      },
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
        200: '#EDEDEA',
        500: '#ADA084',
        600: '#9D8D6B',
      },
    },
  },
};
