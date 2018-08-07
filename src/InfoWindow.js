import React, { Component } from 'react';

export default class InfoWindow extends Component {

  render() {

    return (

      <div className="info-container">
        <button aria-label="Exit" className="close" onClick={() => (this.props.onShowInfoWindow(''))}>x</button>

        <h4> { this.props.info.name } </h4>
        <p> Category: { this.props.info.type } </p>

        <img className="info-img" alt={ this.props.info.name } src={ this.props.info.imgUrl }/>

      </div>
    );
  }
}
