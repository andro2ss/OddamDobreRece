import React from "react";
import { Decoration } from "../../common/decorations/Decoration";
import { Button_OddajRzecz } from "../../common/buttons/Button_OddajRzecz";
import { Button_ZorganizujZbiorke } from "../../common/buttons/Button_ZorganizujZbiorke";

export function Start() {
  return (
    <div id="start">
      <img
        src={require("../../../assets/Home-Hero-Image.jpg")}
        alt="Losowe przedmioty do oddania"
        className="home__image"
      />
      <div className="start__container--right">
        <h2 className="section__title">
          Zacznij pomagać!
          <br />
          Oddaj niechciane rzeczy w zaufane ręce
        </h2>
        <Decoration />
        <div className="button__container">
          <Button_OddajRzecz />
          <Button_ZorganizujZbiorke />
        </div>
      </div>
    </div>
  );
}