import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useInitYup } from 'hooks/initYup'

function MyApp({ Component, pageProps }: AppProps) {
  useInitYup();

  return <Component {...pageProps} />
}

export default MyApp
