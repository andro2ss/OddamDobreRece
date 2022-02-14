import React, { useState } from "react";
import { Decoration } from "./common/decorations/Decoration";
import { Link } from "react-router-dom";
import { errorHandler } from "../functions/accountSection/ErrorHandler";

function Login(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([0, 0]);
  const errorsHandler = errorHandler(error, login, password, setError);

  return (
    <div className="account__container">
      <h2 className="section__title"> Zaloguj się</h2>
      <Decoration />
      <form
        className="account__form"
        onSubmit={(e) => {
          e.preventDefault();
          errorsHandler();
        }}
      >
        <button style={{ display: "none" }}>send</button>
        <div className="box__account">
          <label htmlFor="login__email">Email</label>
          <input
            type="email"
            id="login__email"
            name="login__email"
            className="input__account"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <span className="error__message" id="login__email--error">
            Podano nieprawidłowy email!
          </span>

          <label htmlFor="login__password">Hasło</label>
          <input
            type="password"
            id="login__password"
            name="login__password"
            className="input__account"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span className="error__message" id="login__password--error">
            Zbyt krótkie hasło! (min. 6 znaków)
          </span>
        </div>
      </form>
      <div className="btn__box">
        {" "}
        <Link to="../rejestracja" className="btn__account">
          Załóż konto
        </Link>{" "}
        <button className="btn__account frame" onClick={() => errorsHandler()}>
          Zaloguj się
        </button>
      </div>
    </div>
  );
}

export default Login;
