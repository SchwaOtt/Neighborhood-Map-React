import React, { Component } from 'react';

export default class InfoWindow extends Component {

  render() {

    return (

      <div className="info-container">
        <button className="close" onClick={() => (this.props.onShowInfoWindow(''))}>x</button>

        <p> { this.props.info.name } </p>
        <p> Category: { this.props.info.type } </p>

      </div>
    );
  }
}
