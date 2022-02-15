import { Link } from "react-router-dom";
import React from "react";

export function Button_OddajRzecz({ extraClass }) {
  if (!extraClass) extraClass = "";
  let tempClassName = "btn__link " + extraClass;
  return (
    <Link to="logowanie" className={tempClassName}>
      <span>ODDAJ</span>
      <span>RZECZY</span>
    </Link>
  );
}
