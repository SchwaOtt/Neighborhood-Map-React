import React, { Component } from 'react';
import noPic from './img/nopic.jpg'

export default class InfoWindow extends Component {

  render() {

    return (

      <div className="info-container">
        <button aria-label="Exit" className="close" onClick={() => (this.props.onShowInfoWindow(''))}>x</button>

        <h4> { this.props.info.name } </h4>
        <p> Category: { this.props.info.type } </p>

        <img className="info-img" alt={ this.props.info.name } src={ this.props.info.imgUrl }/>
        {this.props.info.imgUrl === noPic ? <div className="info-api">Picture,or <a target="_blank" rel="noopener noreferrer" href="https://foursquare.com"> FourSquare.com </a> not avaiable!</div> : <div className="info-api">Photo by <a target="_blank" rel="noopener noreferrer" href="https://foursquare.com"> FourSquare.com</a></div>}

      </div>
    );
  }
}
