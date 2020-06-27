// external modules
import React from 'react';
import App from 'next/app';

// internal modules
import Main from './index';

class WrappedApp extends App {
  render() {
    return (
      <>
        <Main />
      </>
    );
  }
}

export default WrappedApp;
