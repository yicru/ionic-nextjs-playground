import Head from 'next/head';
import {AppProps} from 'next/app'
import {Fragment} from 'react'

import '@ionic/react/css/core.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '../theme/variables.css';

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
