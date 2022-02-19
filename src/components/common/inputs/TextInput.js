import React from "react";

function TextInput({ label, value, setValue }) {
  return (
    <div className="textInput">
      <label htmlFor={label.replace(/\s/g, "")}>{label}</label>
      <input
        type="text"
        id={label.replace(/\s/g, "")}
        name={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
