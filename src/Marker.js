import React, { Component } from 'react';

export default class Marker extends Component {

  render() {

    const { marker, info } = this.props

    return (

      <div className={`marker marker-${info.name ? marker.id === info.id ? "selected" : "unselected" : "unselected"}`}
        onClick={() => (this.props.onShowInfoWindow(marker))}>

          { marker.name }

      </div>
    );
  }
}
