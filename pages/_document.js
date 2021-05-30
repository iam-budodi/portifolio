import React from 'react';
import Document, {
  Html, Head, Main, NextScript
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&family=Montserrat:wght@400;700&display=swap"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="image"
            href="images/japhet.png"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="image"
            href="images/background-1.jpg"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="image"
            href="images/weather.jpeg"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="image"
            href="images/avatar.jpg"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&family=Montserrat:wght@400;700&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&family=Montserrat:wght@400;700&display=swap"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
