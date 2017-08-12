import '../styles/main.scss'

import React from 'react'
import connect, { ClientOnly } from 'webpack-react-compiler-plugin/runtime'

import Layout from './layouts'
import { loadImages } from './components/util/Image'

const images = require.context('../images/2017-08-02', false, /\.(?:jpe?g|png)$/i)

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
  title: 'Home',
  heroImages: loadImages(images)
}

connect(exports)
