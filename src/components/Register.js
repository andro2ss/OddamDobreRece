import React from "react";
import { Decoration } from "./common/decorations/Decoration";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <div className="account__container">
      <h2 className="section__title"> Załóż konto</h2>
      <Decoration />
      <form className="account__form">
        <div className="box__account">
          <label htmlFor="register__email">Email</label>
          <input
            type="text"
            id="register__email"
            name="register__email"
            className="input__account"
            onChange={(e) => {}}
          />
          <label htmlFor="register__password">Hasło</label>
          <input
            type="password"
            id="register__password"
            name="register__password"
            className="input__account"
            onChange={(e) => {}}
          />
          <label htmlFor="register__password--repeat">Powtórz hasło</label>
          <input
            type="password"
            id="register__password--repeat"
            name="register__password--repeat"
            className="input__account"
            onChange={(e) => {}}
          />
        </div>
      </form>
      <div className="btn__box">
        {" "}
        <Link to="../logowanie" className="btn__account">
          Zaloguj się
        </Link>{" "}
        <button className="btn__account frame">Załóż konto</button>
      </div>
    </div>
  );
}

export default Register;
