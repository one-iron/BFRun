// export modules
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// internal modules
import { Globalstyle } from '../components/GlobalStyle';

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

          {/*
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          />
           */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
