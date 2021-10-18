import '../styles/App.scss'
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import theme from '../components/theme';
import createEmotionCache from '../components/createEmotionCache';

const cache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  return <>
        <Head>
          <meta rel="preload" href="../styles/main.scss" />
        </Head>
        <Component {...pageProps} />
  </>
}

export default MyApp
