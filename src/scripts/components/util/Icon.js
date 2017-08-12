import React from 'react'

import { isClient } from 'webpack-react-compiler-plugin/runtime'

const icons = require.context('../../../icons', false, /\.svg$/)
if (isClient) {
  icons.keys().forEach(icons)
}

export default ({name, onClick}) => {
  const Tag = onClick == null ? 'span' : 'a'
  return (
    <Tag onClick={onClick} className={`icon icon--${name}`}>
      <svg>
        <use xlinkHref={`#${name}`} />
      </svg>
    </Tag>
  )
}
