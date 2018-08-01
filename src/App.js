import React, { Component } from 'react';
import Map from './Map';
import './App.css';

class App extends Component {

  state = {
    center: {lat: 47.601059, lng: 19.054357},
    zoom: 18
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Childhood places</h1>
        </header>
        <Map center={ this.state.center } zoom={ this.state.zoom } />
      </div>
    );
  }
}

export default App;
