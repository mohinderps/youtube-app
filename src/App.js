import React, { Component } from 'react';
import bands from './bands';
import './App.css';
import Player from './player';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPlayerHolder: false,
      showPlayer: false,
      band: null
    }
  }

  scrollToTop() {
  	let id = setInterval(frame, 4);
    let previousScrollTopPosition = document.body.scrollTop;
    function frame() {
      console.log("Scroll: ", document.body.scrollTop);
      if (document.body.scrollTop <= 0 || document.body.scrollTop > previousScrollTopPosition) {
        clearInterval(id);
      }
      else {
        document.body.scrollTop = document.body.scrollTop - 8;
        previousScrollTopPosition = document.body.scrollTop;
      }
    }
  }

  selectBand(band) {
    this.setState({
      showPlayerHolder: true,
      band: band
    });
    this.scrollToTop();
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
        <div className="Scroller" data-showplayerholder={this.state.showPlayerHolder? 1: 0}>
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
