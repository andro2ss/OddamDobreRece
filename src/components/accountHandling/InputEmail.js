import React from "react";

export function InputEmail({ email, onChange, onBlur }) {
  return (
    <>
      <label htmlFor="input__email">Email</label>
      <input
        type="email"
        id="input__email"
        name="input__email"
        className="input__account"
        value={email}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className="error__message" id="input__email--error">
        Podano nieprawidłowy email!
      </span>
    </>
  );
}
