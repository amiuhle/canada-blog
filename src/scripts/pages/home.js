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
        <h3>It's still a work in progress</h3>
        <p>
          Things on my TODO-List:
          <ul>
            <li>Make it mobile friendly</li>
            <li>Notifications for new posts</li>
            <li>Do some cool stuff with the images in the header</li>
          </ul>
        </p>
        <p>
          If things looks strange, update your browser. I'm testing some new stuff.<br />
          If it still looks strange, update your taste. Or maybe it just looks strange.
        </p>
        <h3>German vs English / <em style={{color: 'white'}}>wer das liesst ist doof! :P</em></h3>
        <p>
          I have decided to write posts both in English and German. English posts
          will be more detailed and more frequent. German posts will summarize
          longer time periods and be less detailed, linking to the original posts.<br />
          There will be different categories or tags for each language.
        </p>
        <p><em>
          Ich werde sowohl auf Deutsch als auch auf Englisch bloggen. Englische
          Beiträge werden häufiger vorkommen und detaillierter sein. Deutsche Posts
          werden längere Zeiträume zusammenfassen und zu den Originalbeiträgen
          verlinken.<br />
          Es wird verschiedene Kategorien oder Tags für beide Sprachen geben.
        </em></p>

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
