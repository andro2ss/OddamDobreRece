import React from "react";

export function InputPasswordRepeat({
  password2,
  onChange,
  onBlur,
  errorPassword2,
}) {
  return (
    <>
      <label htmlFor="input__password2">Powtórz hasło</label>
      <input
        type="password"
        id="input__password2"
        name="input__password2"
        className="input__account"
        value={password2}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className="error__message" id="input__password2--error">
        {errorPassword2 === 2
          ? "Hasła różnią się od siebie!"
          : "Zbyt krótkie hasło! (min. 6 znaków)"}
      </span>
    </>
  );
}
