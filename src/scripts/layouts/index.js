import React from 'react'

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
        <link rel='stylesheet' href='/styles.css' />
        <title>{`Blog | ${title}`}</title>
      </head>
      <body>
        {children}
        <script src='/client.js' />
      </body>
    </html>
  )
}
