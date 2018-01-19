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
      height: '80%',
      width: '80%',
      videoId: 'UprcpdwuwCg',
      events: {
        'onReady': this.onPlayerReady
      }
    });
  }

  onPlayerReady(event) {
    debugger
    //event.target.playVideo();
  }

  init() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
  }

  render() {
    debugger
    return (
      <div id="player"></div>
    )
  }
}

export default Player
