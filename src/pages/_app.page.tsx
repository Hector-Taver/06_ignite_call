import '../lib/dayjs'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { Roboto } from 'next/font/google'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/react-query'

import { globalStyles } from '@/styles/global'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Head>
          <link rel="icon" href="/logo.svg" />
          <title>Ignite Call</title>
        </Head>

        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </QueryClientProvider>
  )
}
