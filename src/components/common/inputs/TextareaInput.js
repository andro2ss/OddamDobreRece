import React from "react";

function TextareaInput({ label, value, setValue }) {
  return (
    <div className="textareaInput">
      <label htmlFor={label.replace(/\s/g, "")}>{label}</label>
      <textarea
        id={label.replace(/\s/g, "")}
        name={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextareaInput;
