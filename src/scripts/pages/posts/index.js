import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import Image, { loadImages } from '../../components/util/Image'
import Layout from '../../layouts'
import Preview from '../../components/posts/PostPreview'

const images = require.context('../../../images/2017-08-02', false, /\.(?:jpe?g|png)$/i)
const postsContext = require.context('.', false, /\.md$/)

const posts = postsContext.keys().map(path => {
  const urlRegex = /^\W*(.*)\.md$/g
  const match = urlRegex.exec(path)
  const url = `posts/${match[1]}.html`
  return {
    ...postsContext(path),
    url
  }
})

const requireImage = require.context('../../../images', true, /\.(?:jpe?g|png)$/i)

const resolveImage = uri => {
  return requireImage(uri.replace('../../../images', '.')).src
}

posts.forEach(({markdown, url, heroImages, ...layoutProps}) => {
  heroImages = heroImages.map((path, key) => (
    <Image
      key={key}
      className='c-hero__image'
      {...require(`../../../images/${path}`)}
    />
  ))
  module.exports[url] = (
    <Layout {...layoutProps} heroImages={heroImages}>
      <ReactMarkdown source={markdown} transformImageUri={resolveImage} />
    </Layout>
  )
})

export default class Posts extends Component {
  render () {
    return (
      <div>
        <h2>Posts</h2>
        <ul className='o-list-bare o-post-list'>
          {
            posts.map((post, key) =>
              <Preview className='o-post-list__item' key={key} post={post} />)
          }
        </ul>
      </div>
    )
  }
}

Posts.layoutProps = {
  layout: Layout,
  title: 'Posts',
  heroImages: loadImages(images)
}
