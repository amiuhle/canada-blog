import PropTypes from 'prop-types'
import React, { Component } from 'react'

import className from '../../../../lib/class-name'

import Icon from '../util/Icon'

const Bullet = ({active}) => (
  undefined
)

export default class Hero extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      currentImage: 0
    }
  }

  render () {
    const images = this.props.children

    const {
      currentImage
    } = this.state

    return (
      <div className={className(this.props, 'c-hero')}>
        <div className='c-hero__pagination'>
          <span>
            {images.map((_, key) => <span key={key}>&bull;</span>)}
          </span>
        </div>
        <div className='c-hero__container'>
          {/* { images[currentImage] } */}
        </div>
        <div className='c-hero__controls'>
          <span>
            <Icon name='map' />
            <Icon name='images' />
            <Icon name='expand' />
          </span>
        </div>
      </div>
    )
  }
}

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(
    PropTypes.element
  )
}
