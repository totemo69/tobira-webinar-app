/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-danger */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/vars.css';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from '../states/configureStore';
import * as ga from '../lib/ga';

function App({ Component, pageProps, err }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
        <script
          dangerouslySetInnerHTML={{
            __html: `zE('webWidget','setLocale', 'ja');`,
          }}
        />
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
