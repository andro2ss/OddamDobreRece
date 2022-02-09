import { Link } from "react-router-dom";
import React from "react";

export function Button_OddajRzecz() {
  return (
    <Link to="logowanie" className="btn__link">
      ODDAJ <br />
      RZECZY
    </Link>
  );
}
