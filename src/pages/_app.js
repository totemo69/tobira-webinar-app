import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/vars.css';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from '../states/configureStore';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          data-ad-client="ca-pub-1540044136404028"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <title>TOBIRA CREATORS</title>
        <meta name="description" content="TOBIRA CREATORS" />
        <meta property="og:title" content="TOBIRA CREATORS" key="title" />
        <meta
          property="og:description"
          content="TOBIRA CREATORS"
          key="description"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(appWithTranslation(App));
