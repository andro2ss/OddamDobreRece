import React, { useEffect, useState } from "react";
import { Decoration } from "./common/decorations/Decoration";
import { Link } from "react-router-dom";
import { InputEmail } from "./accountHandling/InputEmail";
import { InputPassword } from "./accountHandling/InputPassword";
import { accountEmailValidation } from "../functions/accountSection/accountEmailValidation";
import { accountPasswordValidation } from "../functions/accountSection/accountPasswordValidation";

function Login(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(0);
  const [errorPassword, setErrorPassword] = useState(0);
  function validation() {
    accountEmailValidation(login, setErrorEmail);
    accountPasswordValidation(password, setErrorPassword);
  }
  function submit() {
    validation();
    if (errorEmail + errorPassword === 0) {
      console.log("no error");
    } else {
      console.log("error in form");
    }
  }
  useEffect(() => {
    console.log(errorEmail);
  }, [errorEmail]);
  return (
    <div className="account__container">
      <h2 className="section__title"> Zaloguj się</h2>
      <Decoration />
      <form
        className="account__form"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <button style={{ display: "none" }}>send</button>
        <div className="box__account">
          <InputEmail
            email={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            onBlur={() => {
              accountEmailValidation(login, setErrorEmail);
            }}
          />
          <InputPassword
            password={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={() => {
              accountPasswordValidation(password, setErrorPassword);
            }}
          />
        </div>
      </form>
      <div className="btn__box">
        <Link to="../rejestracja" className="btn__account">
          Załóż konto
        </Link>
        <button
          className="btn__account frame"
          onClick={() => {
            submit();
          }}
        >
          Zaloguj się
        </button>
      </div>
    </div>
  );
}

export default Login;
