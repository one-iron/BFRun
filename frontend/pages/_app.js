// external modules
import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
// import { MDXProvider } from '@mdx-js/react';

// internal modules
import GlobalStyle from '../components/GlobalStyle';
import theme from '../components/theme';

class WrappedApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle>
            <Component {...other} />
          </GlobalStyle>
        </ThemeProvider>
      </>
    );
  }
}

export default WrappedApp;
