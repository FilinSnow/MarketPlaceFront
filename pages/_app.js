import '../styles/App.scss'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta rel="preload" href="../styles/main.scss" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
