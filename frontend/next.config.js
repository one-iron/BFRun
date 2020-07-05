// const mdxRenderer = `
//   import React from 'react'
//   import { mdx } from '@mdx-js/react'

const withMDX = require('@next/mdx')({
  // options: {
  //   renderer: mdxRenderer,
  // },
  extension: /\.mdx?$/,
  // Or use this to support MD files too
  // extension: /\.(md|mdx)$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
});
