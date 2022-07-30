import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globals'
import { defaultTheme } from '../styles/themes/default'
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle/>
      <ToastContainer
        className="impact-toast"
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
      </ThemeProvider>
    </>
  )
}

export default MyApp
