import React from "react";
import { Decoration } from "./common/decorations/Decoration";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="account__container">
      <h2 className="section__title"> Zaloguj się</h2>
      <Decoration />
      <form className="account__form">
        <div className="box__account">
          <label htmlFor="login__email">Email</label>
          <input
            type="text"
            id="login__email"
            name="login__email"
            className="input__account"
            onChange={(e) => {}}
          />
          <label htmlFor="login__password">Hasło</label>
          <input
            type="password"
            id="login__password"
            name="login__password"
            className="input__account"
            onChange={(e) => {}}
          />
        </div>
      </form>
      <div className="btn__box">
        {" "}
        <Link to="../rejestracja" className="btn__account">
          Załóż konto
        </Link>{" "}
        <button className="btn__account frame">Zaloguj się</button>
      </div>
    </div>
  );
}

export default Login;
