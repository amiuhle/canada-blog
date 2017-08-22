import React from 'react'

import Layout from '../layouts'

import { getPosts } from '../util/posts'

import { loadImages } from '../components/util/Image'
import PostPreview from '../components/posts/PostPreview'

const images = require.context('../../images/2017-04-30', false, /\.(?:jpe?g|png)$/i)

export default class Home extends React.Component {
  render () {
    const posts = getPosts(3)
    return (
      <div>
        <h2>Hi there!</h2>
        <p>
          Welcome to my Work &amp; Travel in Canada blog!
        </p>
        <p>
          Posts are in English or German, depending on the main target audience.<br />
          You can read more <a href='/about.html'>about me here</a>.
        </p>

        <h2>Recent Posts</h2>
        {
          posts.map((post, key) =>
            <PostPreview className='o-post-list__item' key={key} post={post} />)
        }
      </div>
    )
  }
}

Home.layoutProps = {
  layout: Layout,
  title: 'Home',
  heroImages: loadImages(images)
}
