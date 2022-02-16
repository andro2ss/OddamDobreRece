import { Link } from "react-router-dom";
import React from "react";

export function Button_OddajRzecz({ extraClass, logUser }) {
  if (!extraClass) extraClass = "";
  let tempClassName = "btn__link " + extraClass;
  return (
    <>
      {logUser.email !== "init" ? (
        <Link to="oddaj-rzeczy" className={tempClassName}>
          <span>ODDAJ</span>
          <span>RZECZY</span>
        </Link>
      ) : (
        <Link to="logowanie" className={tempClassName}>
          <span>ODDAJ</span>
          <span>RZECZY</span>
        </Link>
      )}
    </>
  );
}
