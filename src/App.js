import React, { Component } from 'react';
import bands from './bands';
import './App.css';
import Player from './player';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPlayer: false,
      band: null
    }
  }

  selectBand(band) {
    this.setState({
      showPlayer: true,
      band: band
    });
    document.body.scrollTop = 0;
    // window.scroll({
    //   top: 0,
    //   behavior: 'smooth'
    // });
  }

  render() {
    this.covers = this.props.bands.map(band => (
        <div key={band.id} className="Cover" onClick={() => this.selectBand(band)}>
          <div className="Cover-Image">
            <img src={band.cover} width="100%" height="100%"/>
          </div>
        </div>
      )
    );
    return (
      <div className="App">
        <div className="Scroller" data-showplayer={this.state.showPlayer? 1: 0}>
          <div className="Player-Container"
            style={this.state.band ? {
              backgroundImage: `url(${this.state.band.cover})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }: null}>
            {/* {this.state.showPlayer && <Player />} */}
          </div>
          <div className="Covers-Container">
            {this.covers}
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  bands: bands
}

export default App;
