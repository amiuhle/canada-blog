import React from 'react'

import Layout from '../../layouts'
import { loadImages } from '../../components/util/Image'

const images = require.context('../../../images/2017-08-02', false, /\.(?:jpe?g|png)$/i)

export default class Posts extends React.Component {
  render () {
    return (
      <div>
        <h2>Posts</h2>
      </div>
    )
  }
}

Posts.layoutProps = {
  layout: Layout,
  title: 'Posts',
  heroImages: loadImages(images)
}
