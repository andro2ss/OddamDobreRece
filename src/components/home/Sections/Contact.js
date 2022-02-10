import { Decoration } from "../../common/decorations/Decoration";
import React, { useEffect, useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorCode, setErrorCode] = useState(0);
  const [status, setStatus] = useState({
    name: "nok",
    email: "nok",
    message: "nok",
  });

  const validateName = (name) => {
    let tempStatus = status;
    if (name.split(" ").length > 1) {
      tempStatus.name = "error";
    } else if (!name) {
      tempStatus.name = "nok";
    } else {
      tempStatus.name = "ok";
    }
    setStatus(tempStatus);
  };

  const validateMessage = (message) => {
    let tempStatus = status;
    let messageLength = message.split("").length;
    if (1 <= messageLength && messageLength < 120) {
      tempStatus.message = "error";
    } else if (!message) {
      tempStatus.message = "nok";
    } else {
      tempStatus.message = "ok";
    }
    setStatus(tempStatus);
  };

  const validateEmail = (email) => {
    const emailCheck =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    let tempStatus = status;
    if (!emailCheck.test(email) && email.length) {
      tempStatus.email = "error";
    } else if (!email) {
      tempStatus.email = "nok";
    } else {
      tempStatus.email = "ok";
    }
    setStatus(tempStatus);
  };

  useEffect(() => {
    validateName(name);
    validateEmail(email);
    validateMessage(message);
    console.log(errorCode);
    console.log(status);
  }, [name, email, message, errorCode]);

  return (
    <div id="contact">
      <div className="section__container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            let tempErrorCode = 0;
            if (status.name !== "ok") tempErrorCode += 1;
            if (status.email !== "ok") tempErrorCode += 10;
            if (status.message !== "ok") tempErrorCode += 100;
            setErrorCode(tempErrorCode);
          }}
        >
          <h2 className="section__title">Skontaktuj się z nami</h2>
          <Decoration />
          <div className="input__box">
            <div className="form__name">
              <label htmlFor="form__name">Wpisz swoje imię</label>
              <input
                type="text"
                id="form__name"
                name="form__name"
                placeholder="Krzysztof"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {errorCode > 0 ? "Error" : ""}
            </div>
            <div className="form__email">
              <label htmlFor="form__email">Wpisz swój email</label>
              <input
                // type="email"
                id="form__email"
                name="form__email"
                placeholder="abc@xyz.pl"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={() => {}}
              />{" "}
            </div>
          </div>
          <div className="form__message">
            <label htmlFor="form__message">Wpisz swoją wiadomość</label>
            <textarea
              id="form__message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="form__message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
          <button className="btn__submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
}
