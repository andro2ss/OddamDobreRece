import React from "react";

function InfoBar({ text }) {
  return (
    <div className="InfoBar">
      <h3>Ważne</h3>
      <span>{text}</span>
    </div>
  );
}

export default InfoBar;
