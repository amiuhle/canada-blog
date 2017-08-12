import React from 'react'

import Header from '../components/header/Header'
import { loadImages } from '../components/util/Image'

const images = require.context('../../images/2017-08-02', false, /\.(?:jpe?g|png)$/i)

export default (props) => {
  const {
    children,
    title
  } = props
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='/styles.css' />
        <title>{`Blog | ${title}`}</title>
      </head>
      <body className='o-layout'>
        <Header className='o-layout__header'>
          {loadImages(images)}
        </Header>
        <main className='o-layout__content'>
          {children}
        </main>
        <aside className='o-layout__sidebar' />
        <script src='/client.js' />
      </body>
    </html>
  )
}
