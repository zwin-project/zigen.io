import { createTheme, responsiveFontSizes } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#111F4D',
    },
    secondary: {
      main: '#EA3A19',
    },
    background: {
      default: '#F2F4F7',
    },
  },
  typography: {
    fontFamily: ['"M PLUS 1p"', 'sans-serif'].join(','),
  },
})

export default responsiveFontSizes(theme)
