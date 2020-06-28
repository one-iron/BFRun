// external modules
import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

// internal modules
import theme from '../components/theme';

class WrappedApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <Component {...other} />
        </ThemeProvider>
      </>
    );
  }
}

export default WrappedApp;
