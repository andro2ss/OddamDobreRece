import { Decoration } from "../../common/decorations/Decoration";
import React from "react";

export function Contact() {
  return (
    <div id="contact">
      <div className="section__container">
        <form className="form">
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
              />
            </div>
            <div className="form__email">
              <label htmlFor="form__email">Wpisz swój email</label>
              <input
                type="email"
                id="form__email"
                name="form__email"
                placeholder="abc@xyz.pl"
              />{" "}
            </div>
          </div>
          <div className="form__message">
            <label htmlFor="form__message">Wpisz swoją wiadomość</label>
            <textarea
              id="form__message"
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
