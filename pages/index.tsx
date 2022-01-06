import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {FC} from 'react'

interface Props {
  locale: string
}

const Home: FC<Props> = props => {
  const {t} = useTranslation()

  const title = 'Meganero'
  const url = `https://meganero.com/${props.locale}`

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
          locale: props.locale,
        }}
        languageAlternates={[
          {hrefLang: 'en', href: 'https://meganero.com/en'},
          {hrefLang: 'de', href: 'https://meganero.com/de'},
        ]}
      />

      <main>
        <section>
          <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <h1 className="text-4xl font-bold">meganero.com</h1>
            <p>{t('home:in_progress')}</p>
          </div>
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const namespaces = ['home']
  const locale = context.locale || 'en'

  const translations = await serverSideTranslations(locale, namespaces)

  return {
    props: {...translations, locale},
    revalidate: 60 * 5,
  }
}

export default Home
