/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className='pony'>
        <img src='https://media.giphy.com/media/EC5NlYpSCYU8M/giphy.gif'/>
      </div>
    )
  }
}
