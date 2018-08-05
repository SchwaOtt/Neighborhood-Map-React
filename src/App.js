import React, { Component } from 'react';
import Map from './Map';
import './App.css';
import * as Data from './markers'

class App extends Component {

  state = {

    center: {lat: 47.598000, lng: 19.055000},
    zoom: 16,
    info: {}

  }

  showInfoWindow = (marker) => {

    this.setState({ info: marker })

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
              <input className="sidebar-input">

              </input>

              <ul className="sidebar-list">

                {Data.map((marker) => (
                  <li role="link" key={ marker.id } tabIndex="0" info={ this.state.info } onClick={() => (this.showInfoWindow(marker))}>{ marker.name }</li>
                ))}

              </ul>
            </div>
          </aside>

          <Map center={ this.state.center } zoom={ this.state.zoom } data={Data} info={ this.state.info } onShowInfoWindow={ this.showInfoWindow }/>

        </div>

        <footer className="app-footer">
          <div>
            Created by Me
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
