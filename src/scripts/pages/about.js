import React from 'react'

import Layout from '../layouts'
import { loadImages } from '../components/util/Image'

const images = require.context('../../images/2017-07-08', false, /\.(?:jpe?g|png)$/i)

export default class About extends React.Component {
  render () {
    return (
      <div>
        <h2>Hi, I'm Timo</h2>
        <p>
          I'm a 34yr old web developer from Ulm, Germany. I'm currently in Canada
          for work &amp; travel.<br />
          It'll be great. So great.
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
