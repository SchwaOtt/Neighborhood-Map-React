import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import InfoWindow from './InfoWindow'

export default class Map extends Component {

  render() {

    const { info } = this.props

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
            <Marker key={ marker.id } lat={ marker.lat } lng={ marker.lng } marker={ marker } info={ info } onShowInfoWindow={this.props.onShowInfoWindow} />
          ))}

          {info.name ? <InfoWindow key={ info.id } lat={ info.lat } lng={ info.lng } info={ info } onShowInfoWindow={this.props.onShowInfoWindow} /> : ''}


        </GoogleMapReact>
      </div>
    );
  }
}
