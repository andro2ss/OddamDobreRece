import React from "react";
import { Decoration } from "../common/decorations/Decoration";

function OddajRzeczyIntro(props) {
  return (
    <section id="OddajRzeczyIntro">
      <img
        src={require("../../assets/Form-Hero-Image.jpg")}
        alt="Losowe przedmioty do oddania"
        className="start__image"
      />
      <div className="start__container--right">
        <h2 className="section__title multipleLines">
          <span>Oddaj rzeczy, których już nie chcesz</span>
          <span>POTRZEBUJĄCYM</span>
        </h2>
        <Decoration />
        <span className="subtitle">Wystarczą 4 proste kroki:</span>
        <div className="boxes__container">
          <box className="box">
            <div className="text__container">
              <span>1</span>
              <span className="text">Wybierz rzeczy</span>
            </div>
          </box>
          <box className="box">
            <div className="text__container">
              <span>2</span>
              <span className="text">Spakuj je w worki</span>
            </div>
          </box>
          <box className="box">
            <div className="text__container">
              <span>3</span>
              <span className="text">Wybierz fundację</span>
            </div>
          </box>
          <box className="box">
            <div className="text__container">
              <span>4</span>
              <span className="text">Zamów kuriera</span>
            </div>
          </box>
        </div>
      </div>
    </section>
  );
}

export default OddajRzeczyIntro;
