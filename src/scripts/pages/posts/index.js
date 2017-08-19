import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import Image, { loadImages } from '../../components/util/Image'
import Layout from '../../layouts'
import Preview from '../../components/posts/PostPreview'

const images = require.context('../../../images/2017-08-02', false, /\.(?:jpe?g|png)$/i)
const postsContext = require.context('.', false, /\.md$/)

const posts = postsContext.keys().map(path => {
  const urlRegex = /^\W*((\d{4}-\d{2}-\d{2}).*)\.md$/g
  const match = urlRegex.exec(path)
  const [, title, date] = match
  const url = `posts/${title}`
  return {
    ...postsContext(path),
    date: new Date(date),
    url
  }
})

const requireImage = require.context('../../../images', true, /\.(?:jpe?g|png)$/i)

const resolveImage = uri => {
  return requireImage(uri.replace('../../../images', '.')).src
}

posts.forEach(({markdown, url, heroImages, date, lang, ...layoutProps}) => {
  heroImages = heroImages.map((path, key) => (
    <Image
      key={key}
      className='c-hero__image'
      {...require(`../../../images/${path}`)}
    />
  ))
  const dateFormatter = new Intl.DateTimeFormat(lang, {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit'
  })
  module.exports[url] = (
    <Layout lang={lang} {...layoutProps} heroImages={heroImages}>
      <article className='c-post'>
        <time>{dateFormatter.format(date)}</time>
        <ReactMarkdown source={markdown} transformImageUri={resolveImage} />
      </article>
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
