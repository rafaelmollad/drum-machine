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
        // When a component is clicked, playMusic will be called
        onClick={() => this.props.playMusic(this.state.audio)}
        className="drum-pad"
        id={this.props.id}
      >
        {this.props.id}
      </div>
    );
  }
}

export default DrumPad;
