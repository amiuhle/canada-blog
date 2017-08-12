import React from 'react'

import Layout from '../layouts'
import { loadImages } from '../components/util/Image'

const images = require.context('../../images/2017-08-02', false, /\.(?:jpe?g|png)$/i)

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h2>Welcome</h2>
        <p />
      </div>
    )
  }
}

Home.layoutProps = {
  layout: Layout,
  title: 'Home',
  heroImages: loadImages(images)
}
