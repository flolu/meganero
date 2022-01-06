import '@/styles/globals.sass'

import {AppearanceProvider} from '@/contexts/AppearanceContext'
import {appWithTranslation} from 'next-i18next'
import React from 'react'

import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <AppearanceProvider>
        <Component {...pageProps} />
      </AppearanceProvider>
    </>
  )
}
export default appWithTranslation(MyApp)
