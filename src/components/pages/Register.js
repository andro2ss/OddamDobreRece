import React, { useEffect, useState } from "react";
import { Decoration } from "../common/decorations/Decoration";
import { Link } from "react-router-dom";
import { InputEmail } from "../accountHandling/InputEmail";
import { InputPassword } from "../accountHandling/InputPassword";
import { InputPasswordRepeat } from "../accountHandling/InputPasswordRepeat";
import { accountEmailValidation } from "../../functions/accountSection/accountEmailValidation";
import { accountPasswordValidation } from "../../functions/accountSection/accountPasswordValidation";
import { accountPasswordValidation2 } from "../../functions/accountSection/accountPassword2Validation";
import { createNewUser } from "../../functions/accountSection/accountRegisterUser";

function Register({ loadedUsers }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorEmail, setErrorEmail] = useState(0);
  const [errorPassword, setErrorPassword] = useState(0);
  const [errorPassword2, setErrorPassword2] = useState(0);
  const [sendRequest, setSendRequest] = useState(0);

  function validation() {
    accountEmailValidation(login, setErrorEmail);
    accountPasswordValidation(password, setErrorPassword);
    accountPasswordValidation2(password, password2, setErrorPassword2);
  }
  function submit() {
    validation();
    setSendRequest(1);
  }
  useEffect(() => {
    if (
      errorEmail + errorPassword + errorPassword2 === 0 &&
      sendRequest === 1
    ) {
      let tempUser = loadedUsers.filter((element) => {
        return element.email === login;
      });
      if (tempUser.length > 0) {
        if (!!tempUser[0].email) {
          alert("Błąd! Email jest już używany!");
        }
      } else {
        createNewUser(login, password);
      }
      setSendRequest(0);
    } else {
      setSendRequest(0);
    }
  }, [sendRequest]);
  return (
    <div className="account__container">
      <h2 className="section__title"> Załóż konto</h2>
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
          <InputPasswordRepeat
            password2={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            onBlur={() => {
              accountPasswordValidation2(
                password,
                password2,
                setErrorPassword2
              );
            }}
            errorPassword2={errorPassword2}
          />
        </div>
      </form>
      <div className="btn__box">
        <Link to="../logowanie" className="btn__account">
          Zaloguj się
        </Link>
        <button
          className="btn__account frame"
          onClick={() => {
            submit();
          }}
        >
          Załóż konto
        </button>
      </div>
    </div>
  );
}

export default Register;
