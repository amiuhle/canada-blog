import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Hero extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      currentImage: 0
    }
  }
  render () {
    const {
      className
    } = this.props
    const images = this.props.children

    const {
      currentImage
    } = this.state

    console.log(images.map(image => image.props))

    return (
      <header className={`${className || ''} c-hero`}>
        <div className='c-hero__container'>
          {/* { images[currentImage] } */}
        </div>
      </header>
    )
  }
}

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(
    PropTypes.element
  )
}
