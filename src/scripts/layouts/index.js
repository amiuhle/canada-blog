import React from 'react'

import Header from '../components/header/Header'

const TITLE = 'Timo Goes To Canada'

export default (props) => {
  const {
    children,
    title,
    heroImages
  } = props
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='/styles.css' />
        <title>{`${title} – ${TITLE}` || TITLE}</title>
      </head>
      <body className='o-layout'>
        <Header className='o-layout__header'>
          {heroImages}
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
