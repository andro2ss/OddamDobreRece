import { Decoration } from "../../common/decorations/Decoration";
import React, { useState } from "react";
import { sendForms } from "../../../functions/SendForms";
import { validationEmail } from "../../../functions/ValidationEmail";
import { validationName } from "../../../functions/ValidationName";
import { validationMessage } from "../../../functions/ValidationMessage";
import LinearIndeterminate from "../../common/Spinners";
import { handleSubmitBtn } from "../../../functions/HandleSubmitBtn";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({
    name: "nok",
    email: "nok",
    message: "nok",
  });
  const [spinner, setSpinner] = useState(0);

  const validateName = validationName(status, setStatus);
  const validateMessage = validationMessage(status, setStatus);
  const validateEmail = validationEmail(status, setStatus);
  const sendForm = sendForms(setName, setEmail, setMessage, setSpinner);
  const handleSubmit = handleSubmitBtn(
    validateName,
    name,
    validateEmail,
    email,
    validateMessage,
    message,
    status,
    setSpinner,
    sendForm
  );

  return (
    <div id="contact">
      <div className="section__container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h2 className="section__title">Skontaktuj się z nami</h2>
          <Decoration />
          <span className="success__message">
            Wiadomość została wysłana!
            <br />
            Wkrótce się skontaktujemy
          </span>
          <div className="form__box">
            <div className="input__box">
              <label htmlFor="form__name">Wpisz swoje imię</label>
              <input
                type="text"
                id="form__name"
                name="form__name"
                placeholder="Krzysztof"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={() => validateName(name)}
              />
              <span className="error__message">
                Podane imię jest nieprawidłowe!
              </span>
            </div>
            <div className="input__box">
              <label htmlFor="form__email">Wpisz swój email</label>
              <input
                value={email}
                id="form__email"
                name="form__email"
                placeholder="abc@xyz.pl"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={() => validateEmail(email)}
              />
              <span className="error__message">
                Podany&nbsp;email&nbsp;jest&nbsp;nieprawidłowy!
              </span>
            </div>
          </div>
          <div className="form__message">
            <label htmlFor="form__message">Wpisz swoją wiadomość</label>
            <textarea
              id="form__message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onBlur={() => validateMessage(message)}
              name="form__message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <span className="error__message">
              Wiadomość musi mieć conajmniej 120 znaków!
            </span>
          </div>
          <button className="btn__submit">
            Wyślij
            {spinner === 1 ? <LinearIndeterminate /> : ""}
          </button>
        </form>
      </div>
    </div>
  );
}
