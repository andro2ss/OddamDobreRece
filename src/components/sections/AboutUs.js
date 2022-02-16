import { Decoration } from "../common/decorations/Decoration";
import React from "react";

export function AboutUs() {
  return (
    <div id="aboutUs">
      <div className="container--left">
        <h2 className="section__title">O nas</h2>
        <Decoration />
        <span className="text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </span>
        <img
          className="img--sign"
          src={require("../../assets/Signature@2x.png")}
          alt="podpis"
        />
      </div>
      <div className="img__container">
        <img
          className="img--people"
          src={require("../../assets/People.jpg")}
          alt="ludzie"
        />
      </div>
    </div>
  );
}
