import React from 'react'

import className from '../../../../lib/class-name'

export default ({post, ...props}) => {
  const { heroImages, title, url } = post
  const image = require(`../../../images/${heroImages[0]}`)
  const style = {
    backgroundImage: `url(${image.src})`
  }
  return (
    <li className={className(props, 'c-post-preview')} style={style}>
      <a className='c-post-preview__title' href={`${url}.html`}>{title}</a>
    </li>
  )
}
