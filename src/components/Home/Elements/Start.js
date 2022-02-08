import { Link } from "react-router-dom";
import React from "react";

export function Start() {
  return (
    <div id="start">
      <img
        src={require("../../../assets/Home-Hero-Image.jpg")}
        alt="Losowe przedmioty do oddania"
        className="home__image"
      />
      <div className="start__container--right">
        <div className="">
          <span>
            Zacznij pomagać!
            <br />
            Oddaj niechciane rzeczy w zaufane ręce
          </span>
        </div>
        <img
          src={require("../../../assets/Decoration@2x.png")}
          alt="Decoration"
        />
        <div className="button__container">
          <Link to="logowanie" className="link">
            ODDAJ <br />
            RZECZY
          </Link>
          <Link to="logowanie" className="link">
            ZORGANIZUJ <br />
            ZBIÓRKĘ
          </Link>
        </div>
      </div>
    </div>
  );
}
