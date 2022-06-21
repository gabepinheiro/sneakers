import { globalCss } from '~/stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  '*, *::after, *::before': {
    boxSizing: 'border-box',
  },

  html: {
    fontSize: '65.5%',
  },

  body: {
    fontSize: '1.6rem',
  },

  'body, button, input, textarea': {
    fontFamily: '"Kumbh Sans", sans-serif',
  },

  button: {
    cursor: 'pointer',
    outline: 'none',
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
})
