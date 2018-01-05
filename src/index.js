/**
 * @class Pony
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'whatwg-fetch'

import './styles.css'

export default class Pony extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    
    this.state = {
      myPony: {},
    };
  }  
  
  componentDidMount() {
     const randInt = Math.floor(Math.random() * 25) + 1;
     fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.props.apiKey}&q=my+little+pony&limit=25&offset=0&rating=Y&lang=en`, 
       { 
        headers:{
          'Access-Control-Allow-Origin':''
        }
      }
     )
      .then(response => response.json())
      .then(response => this.setState({ myPony: response.data[ randInt ] })
    )
  }

  render() {
    const {
      myPony
    } = this.state
    
    return (
      <div className="pony">
        <div>
          <iframe src={ myPony.embed_url } 
            width="100%"
            height="100%"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }
}
