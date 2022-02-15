import React from "react";

export function InputPassword({ password, onChange, onBlur }) {
  return (
    <>
      <label htmlFor="input__password">Hasło</label>
      <input
        type="password"
        id="input__password"
        name="input__password"
        className="input__account"
        value={password}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className="error__message" id="input__password--error">
        Zbyt krótkie hasło! (min. 6 znaków)
      </span>
    </>
  );
}
