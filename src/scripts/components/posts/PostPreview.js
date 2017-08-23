import React from 'react'

import className from '../../../../lib/class-name'

export default ({post, ...props}) => {
  const { heroImages, title, url } = post
  const image = require(`../../../images/${heroImages[0]}`)
  const style = {
    backgroundImage: `url(${image.src})`
  }
  const href = `${url}.html`
  return (
    <li className={className(props, 'c-post-preview')} onClick={() => window.location.href = href} style={style}>
      <a className='c-post-preview__title' href={href}>{title}</a>
    </li>
  )
}
