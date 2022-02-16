import { Decoration } from "../common/decorations/Decoration";
import { Button_OddajRzecz } from "../common/buttons/Button_OddajRzecz";
import React from "react";

export function SimpleSteps({ logUser }) {
  return (
    <div id="simpleSteps">
      <h2 className="section__title">Wystarczą 4 proste kroki</h2>
      <Decoration />
      <div className="box">
        <div>
          <img src={require("../../assets/Icon1@2x.png")} alt="koszulka" />
          <span className="subtitle">Wybierz&nbsp;rzeczy</span>
          <span className="description">
            ubrania,&nbsp;zabawki,
            <br />
            sprzęt&nbsp;i&nbsp;inne
          </span>
        </div>
        <div>
          <img src={require("../../assets/Icon2@2x.png")} alt="koszulka" />
          <span className="subtitle">Spakuj&nbsp;je</span>
          <span className="description">
            skorzystaj&nbsp;z
            <br />
            worków&nbsp;na&nbsp;śmieci
          </span>
        </div>
        <div>
          <img src={require("../../assets/Icon3@2x.png")} alt="koszulka" />
          <span className="subtitle">
            Zdecyduj&nbsp;komu
            <br />
            chcesz&nbsp;pomóc
          </span>
          <span className="description">
            wybierz&nbsp;zaufane
            <br />
            miejsce
          </span>
        </div>
        <div>
          <img src={require("../../assets/Icon4@2x.png")} alt="koszulka" />{" "}
          <span className="subtitle">Zamów&nbsp;kuriera</span>
          <span className="description">
            kurier&nbsp;przyjedzie
            <br />
            w&nbsp;dogodnym&nbsp;terminie
          </span>
        </div>
      </div>
      <Button_OddajRzecz logUser={logUser} />
    </div>
  );
}
