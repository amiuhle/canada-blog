import React from 'react'

export default ({className, post}) => {
  const { heroImages, title, url } = post
  const image = require(`../../../images/${heroImages[0]}`)
  const style = {
    backgroundImage: `url(${image.src})`
  }
  return (
    <li className={`${className || ''} c-post-preview`} style={style}>
      <a className='c-post-preview__title' href={url}>{title}</a>
    </li>
  )
}
