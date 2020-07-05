// external modules
import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

// internal modules
import GlobalStyle from '../components/GlobalStyle';
import theme from '../components/theme';

class WrappedApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <>
        <GlobalStyle>
          <ThemeProvider theme={theme}>
            <Component {...other} />
          </ThemeProvider>
        </GlobalStyle>
      </>
    );
  }
}

export default WrappedApp;
