import React from 'react'
// import { GlobalStyles } from 'twin.macro'
import '../styles/styles.css'


function MyApp({ Component, pageProps }) {
  return <>
          {/* <GlobalStyles /> */}
          <Component {...pageProps} />
        </>
}

export default MyApp
