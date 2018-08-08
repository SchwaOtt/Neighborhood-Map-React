import React, { Component } from 'react';
import Map from './Map';
import './App.css';
import * as Data from './markers'
import { getAdditionalData } from './AdditionalData'
import noPic from './img/nopic.jpg'

class App extends Component {

  state = {

    places: [],
    center: {lat: 47.560000, lng: 19.055000},
    zoom: 12,
    info: {},
    query: ''

  }

  componentDidMount() {

//Data from FourSquare.
    Data.forEach(place => getAdditionalData(place)

      .then(response => {response ? place.imgUrl = response.PhotoUrl : place.imgUrl = noPic}))

    this.setState({ places: Data })

  }

//Handling of InfoWindow.
  showInfoWindow = (marker) => {

    let latlng = {}

//Pos and zoom.
    latlng.lat = marker.lat+0.000350
    latlng.lng = marker.lng

    this.setState({

      info: marker,
      center: latlng,
      zoom: 16 })

  }

  updateQuery = (query) => {

    this.setState({ query: query.trim() })

    if (query) {

//Filtering.
      this.setState({ places: Data.filter(place => (place.name.toUpperCase().includes(query.toUpperCase()) || place.type.toUpperCase().includes(query.toUpperCase()))) })

//Close Info.
      this.showInfoWindow('')

    } else {

//Reset...
      this.setState({

        places: Data,
        center: {lat: 47.560000, lng: 19.055000},
        zoom: 12

      })

    }
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title" tabIndex="0">Childhood places</h1>
        </header>

        <div className="container">
          <aside>
            <div  className="sidebar">

              <input
                className="sidebar-input"
                type="text"
                placeholder="Search by Name or Category"
                aria-labelledby="input-aria-description"
                value={ this.state.query }
                onChange={(event) => (this.updateQuery(event.target.value))} />

              <label id="input-aria-description" className="info-label">Searching field</label>

              <ul className="sidebar-list">

                {this.state.places.map((marker) => (

                  <li
                    aria-label={ marker.name }
                    key={ marker.id }
                    tabIndex="0"
                    info={ this.state.info }
                    onClick={() => (this.showInfoWindow(marker))}>{ marker.name }
                  </li>

                ))}

              </ul>
            </div>
          </aside>

          <Map
            role="application"
            aria-labelledby="map-aria-description"
            center={ this.state.center }
            zoom={ this.state.zoom }
            data={this.state.places}
            info={ this.state.info }
            onShowInfoWindow={ this.showInfoWindow }
          />

        </div>

        <footer className="app-footer" tabIndex="0">
          Fotos present by FourSquare.com
        </footer>

      </div>
    );
  }
}

export default App;
