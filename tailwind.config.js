/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    borderRadius: {
      'none': 'var(--fmqa-radius-0)',
      '0.25': 'var(--fmqa-radius-0_25)',
      '0.5': 'var(--fmqa-radius-0_5)',
      '1.5': 'var(--fmqa-radius-1_5)',
      'full': 'var(--fmqa-radius-full)'
    },
    boxShadow: {
      'DEFAULT': 'var(--fmqa-shadow-size) hsl(var(--fmqa-color-shadowgrey) / var(--fmqa-opacity-14))',
      'dark': 'var(--fmqa-shadow-size) hsl(var(--fmqa-color-darknavy) / var(--fmqa-opacity-14))',
      'subtle': 'var(--fmqa-shadow-subtle-size) hsl(var(--fmqa-color-pureblack) / var(--fmqa-opacity-14))',
      'subtle-inner': 'inner var(--fmqa-shadow-subtle-inner-size) red)'
    },
    colors: {
      'primary': 'hsl(var(--fmqa-color-lightgrey) / 1)',
      'primary-contrast': 'hsl(var(--fmqa-color-darknavy) / 1)',
      'secondary': 'hsl(var(--fmqa-color-purewhite) / 1)',
      'secondary-contrast': 'hsl(var(--fmqa-color-greynavy) / 1)',
      'primary-dark': 'hsl(var(--fmqa-color-darknavy) / 1)',
      'primary-contrast-dark': 'hsl(var(--fmqa-color-lightbluish) / 1)',
      'secondary-dark': 'hsl(var(--fmqa-color-navy) / 1)',
      'secondary-contrast-dark': 'hsl(var(--fmqa-color-purewhite) / 1)',
      'purple': 'hsl(var(--fmqa-color-purple) / 1)',
      'purple-contrast': 'hsl(var(--fmqa-color-purewhite) / 1)',
      'purple-light': 'hsl(var(--fmqa-color-purple-light) / 1)',
      'purple-light-contrast': 'hsl(var(--fmqa-color-darknavy) / 1)',
      'purple-lightest': 'hsl(var(--fmqa-color-purple-lightest) / 1)',
      'green': 'hsl(var(--fmqa-color-green) / 1)',
      'green-light': 'hsl(var(--fmqa-color-green-light) / 1)',
      'green-contrast': 'hsl(var(--fmqa-color-purewhite) / 1)',
      'red': 'hsl(var(--fmqa-color-red) / 1)',
      'red-light': 'hsl(var(--fmqa-color-red-light) / 1)',
      'red-contrast': 'hsl(var(--fmqa-color-purewhite) / 1)',
      'blue': 'hsl(var(--fmqa-color-blue) / 1)',
      'blue-light': 'hsl(var(--fmqa-color-blue-light) / 1)',
      'shadow': 'hsl(var(--fmqa-color-shadowgrey) / var(--fmqa-opacity-14))',
      'shadow-dark': 'hsl(var(--fmqa-color-darknavy) / var(--fmqa-opacity-14))'
    },
    fontFamily: {
      'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'display': ['var(--fmqa-font-size-display)','var(--fmqa-line-height-100)'],
      'heading-l': ['var(--fmqa-font-size-heading-l)','var(--fmqa-line-height-100)'],
      'heading-m': ['var(--fmqa-font-size-heading-m)','var(--fmqa-line-height-100)'],
      'heading-s': ['var(--fmqa-font-size-heading-s)','var(--fmqa-line-height-100)'],
      'body-m': ['var(--fmqa-font-size-body-m)','var(--fmqa-line-height-150)'],
      'body-s': ['var(--fmqa-font-size-body-s)','var(--fmqa-line-height-150)'],
    },
    fontWeight: {
      '300': '300',
      '400': '400',
      '500': '500',
      '700': '700'
    },
    outlineOffset: {
      '0': '0',
      '0.0625': 'var(--fmqa-length-0_0625)',
      '0.125': 'var(--fmqa-length-0_125)',
      '0.1875': 'var(--fmqa-length-0_1875)',
      '0.25': 'var(--fmqa-length-0_25)'
    },
    outlineWidth: {
      '0': '0',
      '0.0625': 'var(--fmqa-length-0_0625)',
      '0.125': 'var(--fmqa-length-0_125)',
      '0.1875': 'var(--fmqa-length-0_1875)',
      '0.25': 'var(--fmqa-length-0_25)',
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1440px',
    },
    spacing: {
      '0.0625': 'var(--fmqa-length-0_0625)',
      '0.125': 'var(--fmqa-length-0_125)',
      '0.1875': 'var(--fmqa-length-0_1875)',
      '0.25': 'var(--fmqa-length-0_25)',
      '0.5': 'var(--fmqa-length-0_5)',
      '1': 'var(--fmqa-length-1)',
      '1.25': 'var(--fmqa-length-1_25)',
      '1.5': 'var(--fmqa-length-1_5)',
      '1.75': 'var(--fmqa-length-1_75)',
      '2': 'var(--fmqa-length-2)',
      '2.25': 'var(--fmqa-length-2_25)',
      '2.5': 'var(--fmqa-length-2_5)',
      '3': 'var(--fmqa-length-3)',
      '3.5': 'var(--fmqa-length-3_5)',
      '4': 'var(--fmqa-length-4)',
      '5': 'var(--fmqa-length-5)',
      '5.25': 'var(--fmqa-length-5_25)',
      '8.75': 'var(--fmqa-length-8_75)',
      '10.25': 'var(--fmqa-length-10_25)',
      '35.25': 'var(--fmqa-length-35_25)',
      'full': '100%'
    },
    extend: {}
  },
  plugins: [],
}

