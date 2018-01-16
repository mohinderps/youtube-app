import React, {Component} from 'react';
import './player.css';

class Player extends Component {
  constructor(props) {
    super(props);
    this.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
    this.init();
  }

  onYouTubeIframeAPIReady() {
    this.player = new window['YT'].Player('player', {
      height: '75%',
      width: '75%',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': this.onPlayerReady
      }
    });
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  init() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
  }

  render() {
    return (
      <div id="player"></div>
    )
  }
}

export default Player
