import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {FC} from 'react'

interface Props {
  locale: string
}

const NotFound: FC<Props> = () => {
  const {t} = useTranslation()

  return (
    <div>
      <NextSeo title="404" />

      <main>
        <section>
          <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <h1 className="text-4xl font-bold">404</h1>
            <p>{t('404:not_found')}</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const namespaces = ['404']
  const locale = context.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)
  return {props: {...translations, locale}}
}

export default NotFound
