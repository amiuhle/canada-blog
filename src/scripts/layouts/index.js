import React from 'react'

import Hero from '../components/Hero'
import { loadImages } from '../components/Image'

const images = require.context('../../images/2017-07-08', false, /\.(?:jpe?g|png)$/)

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
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='/styles.css' />
        <title>{`Blog | ${title}`}</title>
      </head>
      <body>
        <Hero className='o-layout__header' images={loadImages(images)} />
        <main>
          {children}
        </main>
        <script src='/client.js' />
      </body>
    </html>
  )
}
