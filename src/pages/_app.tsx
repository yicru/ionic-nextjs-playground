import 'tailwindcss/tailwind.css'
import '@ionic/react/css/core.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import '../theme/variables.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
