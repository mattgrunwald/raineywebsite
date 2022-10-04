import '../styles/globals.css'
import type { AppProps } from 'next/app'

import NavBar from '../util/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="Rainey Grunwald" content="Rainey Grunwald Portfolio"/>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
