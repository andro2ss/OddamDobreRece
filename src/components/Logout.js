import React from "react";
import { Decoration } from "./common/decorations/Decoration";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <div className="account__container">
      <h2 className="section__title">
        Wylogowanie nastąpiło
        <br />
        pomyślnie!
      </h2>
      <Decoration />
      <div className="btn__box">
        <Link to="../" className="btn__account frame center">
          Strona główna
        </Link>
      </div>
    </div>
  );
}

export default Logout;
