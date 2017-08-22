import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

export default class PostComments extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      initialized: false
    }
  }

  componentDidMount () {
    this.setState({
      initialized: true
    })
  }

  render () {
    const { initialized } = this.state
    if (initialized) {
      const { title, url } = this.props
      return (
        <ReactDisqusComments
          shortname='timo-goes-to-canada'
          identifier={url}
          title={title}
          url={`https://amiuhle.github.io/tgtc/${url}`}
        />
      )
    } else {
      return null
    }
  }
}
