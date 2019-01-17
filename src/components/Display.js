import React from "react";
import "./Display.css";

function Display(props) {
  return (
    <div id="display">
      <p>{props.displayText}</p>
    </div>
  );
}

export default Display;
