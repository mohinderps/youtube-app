import React, { Component } from 'react';
import bands from './bands';
import './App.css';

class App extends Component {

  render() {
    this.covers = this.props.bands.map(band => (
        <div key={band.id} className="Cover">
          <div className="Cover-Image">
            <img src={band.cover} width="100%" height="100%"/>
          </div>
        </div>
      )
    );
    return (
      <div className="App">
        {this.covers}
      </div>
    );
  }
}

App.defaultProps = {
  bands: bands
}

export default App;
