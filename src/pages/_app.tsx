import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import MainLayout from '../layouts/MainLayout'
import PageLayout from '../layouts/PageLayout'
import '../styles/index.css'

const CurrentSokobanBoard = dynamic(
  () => import('../components/CurrentSokobanBoard'),
  { ssr: false }
)

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider enableSystem={true} attribute="class">
        <>
          <Head>
            <meta charSet="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/sokoble.svg" />
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
        </>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default appWithTranslation(App)
