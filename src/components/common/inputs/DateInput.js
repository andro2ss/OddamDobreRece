import React from "react";

function DateInput({ label, value, setValue }) {
  return (
    <div className="dateInput">
      <label htmlFor={label.replace(/\s/g, "")}>{label}</label>
      <input
        type="date"
        id={label.replace(/\s/g, "")}
        name={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default DateInput;
