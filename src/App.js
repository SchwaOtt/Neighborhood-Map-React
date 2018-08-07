import React, { Component } from 'react';
import Map from './Map';
import './App.css';
import * as Data from './markers'
import { additionalData } from './AdditionalData'
import noPic from './img/nopic.jpg'

class App extends Component {

  state = {

    places: [],
    center: {lat: 47.598000, lng: 19.055000},
    zoom: 12,
    info: {},
    query: ''

  }

  componentDidMount() {

    Data.forEach(place => additionalData(place)

      .then(response => {response ? place.imgUrl = response.PhotoUrl : place.imgUrl = noPic}))

    this.setState({ places: Data })

  }

  showInfoWindow = (marker) => {

    this.setState({ info: marker })

  }

  updateQuery = (query) => {

    this.setState({ query: query.trim() })

    if (query) {

      this.setState({ places: Data.filter(place => (place.name.toUpperCase().includes(query.toUpperCase()) || place.type.toUpperCase().includes(query.toUpperCase()))) })

      this.showInfoWindow('')

    } else {

      this.setState({ places: Data })

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
