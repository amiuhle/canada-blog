import React from 'react'

import Icon from './util/Icon'

export default ({className}) => (
  <footer className={`${className || ''} c-footer`}>
    <a href='/rss'>
      <Icon name='rss' />
    </a>
    <a href='https://twitter.com/amiuhle'>
      <Icon name='twitter' />
    </a>
    <a href='https://github.com/amiuhle/tgtc'>
      <Icon name='github' />
    </a>
  </footer>
)
