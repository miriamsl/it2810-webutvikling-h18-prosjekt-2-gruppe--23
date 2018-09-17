import React, {Component} from 'react';
import './Sound.css'

class Sound extends Component{
  constructor(props) {
        super(props)

        this.state = {
            sound: "",
        }

        this.doSomething = this.doSomething.bind(this);
        this.onPauseClick = this.onPauseClick.bind(this);
    }

    doSomething() {
      this.playAudio.pause()
      this.playAudio.load()
      this.playAudio.play()
    }

    onPauseClick(){
      this.playAudio.pause()
    }

  render(){
    console.log(this.props.tabnr)
    return (
      <div className="soundContainer">
        <audio ref={(playAudio) => {this.playAudio = playAudio;}}>
          <source type="audio/mp3" src={"Lyder/" + this.props.category + "/" + this.props.tabnr + ".mp3"} />
          Your browser does not support the audio element.
        </audio>
        <button class="soundBtn" onClick={this.doSomething}>Spill av lyd</button>
        <button class="soundBtn" onClick={this.onPauseClick}>Stopp lyd</button>
      </div>
    );
  }
}

export default Sound;
