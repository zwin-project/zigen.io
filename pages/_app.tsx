import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import theme from '../components/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
