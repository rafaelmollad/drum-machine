import React from "react";

function DrumPad(props) {
  return (
    <div
      // When a component is clicked, playMusic will be called
      onClick={() => props.handleUpdate(props.name, props.url)}
      className="drum-pad"
      id={props.id}
    >
      {props.id}
    </div>
  );
}

export default DrumPad;
