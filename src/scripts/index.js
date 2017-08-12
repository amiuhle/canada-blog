import '../styles/main.scss'

import React from 'react'
import connect, { ClientOnly } from 'webpack-react-compiler-plugin/runtime'

import Layout from './layouts'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <h2>Blog</h2>
        <p>
          Hello, World!
        </p>
        <ClientOnly>
          <div>
            I'm on the client!
          </div>
        </ClientOnly>
      </div>
    )
  }
}

Index.layoutProps = {
  layout: Layout,
  title: 'Home'
}

connect(exports)
