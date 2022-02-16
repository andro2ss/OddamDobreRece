import React from "react";

function InfoBar({ text }) {
  return (
    <div id="infoBar">
      <h3>Ważne!</h3>
      <span>{text}</span>
    </div>
  );
}

export default InfoBar;
