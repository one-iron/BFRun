// external modules
import React from 'react';
import App from 'next/app';

// internal modules

class WrappedApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <>
        <Component {...other} />
      </>
    );
  }
}

export default WrappedApp;
