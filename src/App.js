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
  	var id = setInterval(frame, 1);
    function frame() {
      if (document.body.scrollTop <= 0) {
        clearInterval(id);
      } else {
      document.body.scrollTop = document.body.scrollTop - 1;
      }
    }
  }

  selectBand(band) {
    this.setState({
      showPlayer: true,
      band: band
    });
  }

  showPlayerHolder() {
    this.setState({
      showPlayerHolder: true
    })
    this.scrollToTop();
  }

  handleScroll() {
    // if(window.scrollY)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    this.covers = this.props.bands.map(band => (
        <div key={band.id} className="Cover" onClick={() => this.showPlayerHolder()}>
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
