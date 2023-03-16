import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import Head from 'next/head'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>Ignite Call</title>
      </Head>

      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
