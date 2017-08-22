import React from 'react'

import Layout from '../layouts'
import { loadImages } from '../components/util/Image'

const images = require.context('../../images/2017-07-08', false, /\.(?:jpe?g|png)$/i)

export default class About extends React.Component {
  render () {
    return (
      <div>
        <h2>About</h2>
        <p>
          <em>Travel adventures and thoughts of a 34yr old web developer while in
          Canada for Work &amp; Trael.</em>
        </p>
      </div>
    )
  }
}

About.layoutProps = {
  layout: Layout,
  title: 'About',
  heroImages: loadImages(images)
}
