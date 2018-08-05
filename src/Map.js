import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class Map extends Component {

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyC70Kw0w1_0xCxM6KmvA1Sc6Q9tEb7E3RY'}}
          center={ this.props.center }
          zoom={ this.props.zoom }>
        </GoogleMapReact>
      </div>
    );
  }
}
