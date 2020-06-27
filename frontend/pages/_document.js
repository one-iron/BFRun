// export modules
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';

// internal modules
import { Globalstyle } from '../components/GlobalStyle';
import theme from '../components/theme';

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet(); // SSR 할 수 있게 함
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <Globalstyle />
                <App {...props} />
              </>,
            ),
        });

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
          />
          <meta
            name="description"
            content="BFRun - Web Development for Beginners"
          />
          <meta
            name="keywords"
            content="frontend, backend, 프론트엔드, 백엔드, 웹 개발, HTML, CSS, JavaScript, Python"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          {/* <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
          />
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          />
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
          />
          <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" /> */}
        </Head>
        <body>
          <ThemeProvider theme={theme}>
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </html>
    );
  }
}
