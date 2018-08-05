import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import InfoWindow from './InfoWindow'

export default class Map extends Component {

  render() {

    const Marker = ({ marker }) => <div className="marker" onClick={() => (<InfoWindow info={ marker } />)}>{marker.name}</div>;

    return (

      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyC70Kw0w1_0xCxM6KmvA1Sc6Q9tEb7E3RY'}}
          center={ this.props.center }
          zoom={ this.props.zoom }
          role="application"
          aria-labelledby="map-aria-description"
          tabIndex="-1">

          <label id="map-aria-description" className="info-label">Google map application</label>

          {this.props.data.map((marker) => (
            <Marker key={ marker.id } lat={ marker.lat } lng={ marker.lng } marker={ marker }/>
          ))}

        </GoogleMapReact>
      </div>
    );
  }
}
