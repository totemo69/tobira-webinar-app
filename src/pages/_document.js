import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            data-ad-client="ca-pub-1540044136404028"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <title>TOBIRA WEBINAR</title>
          <meta name="description" content="TOBIRA WEBINAR" />
          <meta property="og:title" content="TOBIRA WEBINAR" key="title" />
          <meta
            property="og:description"
            content="TOBIRA WEBINAR"
            key="description"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            #__next {
              height: 100%;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}
