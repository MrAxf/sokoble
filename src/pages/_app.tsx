import { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import CurrentSokobanBoard from '../components/CurrentSokobanBoard'

import MainLayout from '../layouts/MainLayout'
import PageLayout from '../layouts/PageLayout'
import { ThemeProvider } from '../providers/DarkThemeProvider'
import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <ThemeProvider initialTheme="dark">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Sokoble</title>
        </Head>
        <CurrentSokobanBoard />
        <MainLayout>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </MainLayout>
      </ThemeProvider>
    </RecoilRoot>
  )
}
