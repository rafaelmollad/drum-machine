import React, { Component } from "react";
import "./App.css";
import DrumPad from "./components/DrumPad";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPads: [
        {
          id: "heater-1",
          key: "Q",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
          id: "heater-2",
          key: "W",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
          id: "heater-3",
          key: "E",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
          id: "kick-and-hat",
          key: "A",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
          id: "kick",
          key: "S",
          url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
          id: "chord-1",
          key: "D",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
        },
        {
          id: "chord-2",
          key: "Z",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
        },
        {
          id: "punchy-kick",
          key: "X",
          url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
        },
        {
          id: "side-stick",
          key: "C",
          url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
        }
      ]
    };
  }

  playMusic = audio => {
    audio.play();
  };

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <DrumPad id="display" />
          {this.state.drumPads.map(drumPad => (
            <DrumPad
              id={drumPad.id}
              key={drumPad.id}
              keyName={drumPad.key}
              url={drumPad.url}
              playMusic={this.playMusic}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
