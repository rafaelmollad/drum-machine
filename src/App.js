import React, { Component } from "react";
import "./App.css";

import DrumPad from "./components/DrumPad";
import Display from "./components/Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPads: [
        {
          name: "heater-1",
          id: "Q",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
          name: "heater-2",
          id: "W",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
          name: "heater-3",
          id: "E",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
          name: "kick-and-hat",
          id: "A",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
          name: "kick",
          id: "S",
          url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
          name: "chord-1",
          id: "D",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
        },
        {
          name: "chord-2",
          id: "Z",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
        },
        {
          name: "punchy-kick",
          id: "X",
          url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
        },
        {
          name: "side-stick",
          id: "C",
          url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
        }
      ],
      audio: "",
      displayText: ""
    };
  }

  // Plays audio each time a component is clicked
  playMusic = audio => {
    audio.play();
  };

  handleKeyPress = e => {
    // Get the drumPad corresponding to the key pressed
    const element = this.state.drumPads.filter(
      drumPad => drumPad.id == e.key.toUpperCase()
    );

    // Define variables to store the drumPad url and name
    let elementUrl;
    let elementName;

    // Check that the key pressed is a valid key
    if (element[0] !== undefined) {
      elementUrl = element[0]["url"];
      elementName = element[0]["name"];

      // Call handleUpdate
      this.handleUpdate(elementName, elementUrl);
    }
  };

  // Update audio and display text
  handleUpdate = (text, url) => {
    this.setState(
      {
        audio: new Audio(url),
        displayText: text
      },
      () => this.playMusic(this.state.audio)
    );
  };

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <Display displayText={this.state.displayText} />
          <div id="drumpads-container">
            {this.state.drumPads.map(drumPad => (
              <DrumPad
                id={drumPad.id}
                key={drumPad.id}
                url={drumPad.url}
                name={drumPad.name}
                handleUpdate={this.handleUpdate}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
