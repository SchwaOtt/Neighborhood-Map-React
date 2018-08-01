import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

export default class Map extends Component {

  render() {
    return (
      <div className="map-container">
        <GoogleMap
          bootstrapURLKeys={{key: 'AIzaSyCn8tVADq4NBqfTvAegW7KG7DoBOvfxc_o'}}
          center={ this.props.center }
          zoom={ this.props.zoom }>
        </GoogleMap>
      </div>
    );
  }
}
