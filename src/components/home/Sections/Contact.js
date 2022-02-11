import { Decoration } from "../../common/decorations/Decoration";
import React, { useEffect, useState } from "react";
import axios from "axios";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({
    name: "nok",
    email: "nok",
    message: "nok",
  });

  const validateName = (name) => {
    let tempStatus = status;
    const domObject = document.getElementById("form__name");
    if (name.split(" ").length > 1) {
      tempStatus.name = "error";
      domObject.classList.add("error");
      domObject.parentElement.lastElementChild.classList.add("visible");
    } else if (!name) {
      tempStatus.name = "nok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    } else {
      tempStatus.name = "ok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    }
    setStatus(tempStatus);
  };

  const validateMessage = (message) => {
    let tempStatus = status;
    let messageLength = message.split("").length;
    const domObject = document.getElementById("form__message");
    if (1 <= messageLength && messageLength < 120) {
      tempStatus.message = "error";
      domObject.classList.add("error");
      domObject.parentElement.lastElementChild.classList.add("visible");
    } else if (!message) {
      tempStatus.message = "nok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    } else {
      tempStatus.message = "ok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    }
    setStatus(tempStatus);
  };

  const validateEmail = (email) => {
    const emailCheck =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    let tempStatus = status;
    const domObject = document.getElementById("form__email");
    if (!emailCheck.test(email) && email.length) {
      tempStatus.email = "error";
      domObject.classList.add("error");
      domObject.parentElement.lastElementChild.classList.add("visible");
    } else if (!email) {
      tempStatus.email = "nok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    } else {
      tempStatus.email = "ok";
      domObject.classList.remove("error");
      domObject.parentElement.lastElementChild.classList.remove("visible");
    }
    setStatus(tempStatus);
  };

  useEffect(() => {}, [name, email, message]);

  return (
    <div id="contact">
      <div className="section__container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            validateName(name);
            validateEmail(email);
            validateMessage(message);
            if (status.name !== "ok") {
              let domObject = document.getElementById("form__name");
              domObject.classList.add("error");
              domObject.parentElement.lastElementChild.classList.add("visible");
            }
            if (status.email !== "ok") {
              let domObject = document.getElementById("form__email");
              domObject.classList.add("error");
              domObject.parentElement.lastElementChild.classList.add("visible");
            }
            if (status.message !== "ok") {
              let domObject = document.getElementById("form__message");
              domObject.classList.add("error");
              domObject.parentElement.lastElementChild.classList.add("visible");
            }
            if (
              status.message === "ok" &&
              status.name === "ok" &&
              status.email === "ok"
            ) {
              let axisConfig = {
                headers: { "Content-Type": "application/json" },
              };
              const postData = {
                name: name,
                email: email,
                message: message,
              };
              axios
                .post(
                  "https://fer-api.coderslab.pl/v1/portfolio/contact",
                  postData,
                  axisConfig
                )
                .then((res) => {
                  console.log("RESPONSE RECEIVED: ", res);
                  document
                    .querySelector(".success__message")
                    .classList.add("visible");
                })
                .catch((err) => {
                  console.log("AXIOS ERROR: ", err);
                  alert("Coś poszło nie tak, spróbuj ponownie później.");
                });
            } else {
              document
                .querySelector(".success__message")
                .classList.remove("visible");
            }
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
                // type="email"
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
          <button className="btn__submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
}
