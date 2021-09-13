/* eslint-disable react/no-unescaped-entities */
import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/vars.css';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from '../states/configureStore';

function App({ Component, pageProps, err }) {
  return (
    <>
      <Head>
        <script
          data-ad-client="ca-pub-1540044136404028"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=fba84574-4b86-4f2f-beb7-a7b6d33cd787"
        ></script>
        <script type="text/javascript">
          zE('webWidget','setLocale', 'ja');
        </script>
        <title>CREATORS</title>
        <meta name="description" content="CREATORS" />
        <meta property="og:title" content="CREATORS" key="title" />
        <meta property="og:description" content="CREATORS" key="description" />
      </Head>
      <Component {...pageProps} err={err} />
    </>
  );
}

export default wrapper.withRedux(appWithTranslation(App));
