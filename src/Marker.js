import React, { Component } from 'react';

export default class Marker extends Component {

  render() {

    const { marker } = this.props

    return (

      <div className={`marker marker-${this.props.info.name ? marker.id === this.props.info.id ? "selected" : "unselected" : "unselected"}`}
        onClick={() => (this.props.onShowInfoWindow(marker))}>

        { marker.name }

      </div>
    );
  }
}
