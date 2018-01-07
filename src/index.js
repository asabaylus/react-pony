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
      ponies: []
    };
  }  
  
  displayRandomPony(){
    const randInt = Math.floor(Math.random() * 25) + 1;
    return this.setState({ myPony: this.state.ponies[ randInt ] })
  }
  
  handleClick = () => {
      this.displayRandomPony()  
  }
  
  componentDidMount() {
    const q = 'my+little+pony'
    const limit = '25'
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${this.props.apiKey}&q=${q}&limit=${limit}&offset=0&rating=Y&lang=en`;
    
    window.onkeyup = (e) => {
        e.preventDefault()
        if (e.keyCode == 32) {
          this.displayRandomPony()
        }
    }
      
    fetch(endpoint, { method: 'GET' })
     .then(response => response.json())
     .then(response => this.setState({ ponies: response.data }))
     .then(data => this.displayRandomPony())
     .catch(function(error) {
       console.log('Looks like there was a problem: \n', error);
     })
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
        <button onClick={this.handleClick}>Get Another Pony</button>  
      </div>
    )
  }
}
