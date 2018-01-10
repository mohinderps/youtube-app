import React, { Component } from 'react';
import bands from './bands';
import './App.css';

class App extends Component {


  render() {
    this.elements = this.props.bands.map(band => {
      return (
        <div key={band.id} className="Cover">{band.name}</div>
      )
    });
    return (
      <div className="App">
        {this.elements}
      </div>
    );
  }
}

App.defaultProps = {
  bands: bands
}

export default App;
