import './normalize.css'
import { Layout } from '../views'
import { SafeHydrate } from '../Hooks'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/GlobalStyle'
import { QueryClientProvider } from '../Api/QueryClientConfig'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <QueryClientProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </SafeHydrate>
  )
}

export default MyApp
