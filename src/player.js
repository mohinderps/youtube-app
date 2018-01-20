import React, {Component} from 'react';
import './player.css';

class Player extends Component {
  constructor(props) {
    super(props);
    this.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
  }

  componentDidMount() {
    this.setupPlayer();
  }

  setupPlayer() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
  }

  onYouTubeIframeAPIReady() {
    this.player = new window['YT'].Player('player', {
      height: '80%',
      width: '80%',
      events: {
        'onReady': this.onPlayerReady
      }
    });
  }

  onPlayerReady(event) {
    this.player.loadPlaylist(this.transformPlaylist(this.props.playlist));
  }

  transformPlaylist(playlist) {
    return playlist.reduce((res, val) => {
      res.push(val.videoId);
      return res;
    }, []);
  }

  componentDidUpdate() {
    this.player.loadPlaylist(this.transformPlaylist(this.props.playlist));
  }

  render() {
    return (
      <div id="player"></div>
    )
  }
}

export default Player
