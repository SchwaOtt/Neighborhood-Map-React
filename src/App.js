import React, { Component } from 'react';
import Map from './Map';
import './App.css';
import * as Data from './markers'
import AdditionalData from './AdditionalData'

class App extends Component {

  state = {

    places: [],
    center: {lat: 47.598000, lng: 19.055000},
    zoom: 15,
    info: {},
    query: ''

  }

  componentDidMount() {

    this.setState({ places: Data })

  }

  showInfoWindow = (marker) => {

    this.setState({ info: marker })

  }

  updateQuery = (query) => {

    this.setState({ query: query.trim() })

    if (query) {

      this.setState({ places: Data.filter(place => (place.name.toUpperCase().includes(query.toUpperCase()) || place.type.toUpperCase().includes(query.toUpperCase()))) })

    } else {

      this.setState({ places: Data })

    }
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Childhood places</h1>
        </header>

        <div className="container">
          <aside>
            <div  className="sidebar">

              <input className="sidebar-input" type="text" placeholder="Search by Name or Category" value={ this.state.query } onChange={(event) => (this.updateQuery(event.target.value))} />
              <ul className="sidebar-list">

                {this.state.places.map((marker) => (
                  <li role="link" key={ marker.id } tabIndex="0" info={ this.state.info } onClick={() => (this.showInfoWindow(marker))}>{ marker.name }</li>
                ))}

              </ul>
            </div>
          </aside>

          <Map center={ this.state.center } zoom={ this.state.zoom } data={this.state.places} info={ this.state.info } onShowInfoWindow={ this.showInfoWindow }/>

        </div>

        <footer className="app-footer">
          <div>
            Fotos present by FourSquare.com
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
