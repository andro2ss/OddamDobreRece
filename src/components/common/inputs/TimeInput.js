import React from "react";

function TimeInput({ label, value, setValue }) {
  return (
    <div className="timeInput">
      <label htmlFor={label.replace(/\s/g, "")}>{label}</label>
      <input
        type="time"
        id={label.replace(/\s/g, "")}
        name={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TimeInput;
