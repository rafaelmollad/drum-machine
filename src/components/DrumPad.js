import React, { Component } from "react";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: new Audio(this.props.url)
    };
  }
  render() {
    return (
      <div
        onClick={() => this.props.playMusic(this.state.audio)}
        className="drum-pad"
        id={this.props.id}
      >
        {this.props.keyName}
      </div>
    );
  }
}

export default DrumPad;
