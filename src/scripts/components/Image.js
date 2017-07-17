import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Image extends Component {
  render () {
    const {
      foo,
      ...imageProps
    } = this.props

    return (
      <img {...imageProps} />
    )
  }
}

export const loadImages = requireContext =>
  requireContext.keys().map((path, key) =>
    <Image className='c-hero__image' src={requireContext(path)} key={key} />
  )

Image.propTypes = {
  src: PropTypes.string.isRequired
}
