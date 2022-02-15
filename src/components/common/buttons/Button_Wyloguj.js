import { Link } from "react-router-dom";
import React from "react";

export function Button_Wyloguj({ extraClass, setLogUser }) {
  if (!extraClass) extraClass = "";
  let tempClassName = "btn__link " + extraClass;
  return (
    <Link
      to="wylogowano"
      className={tempClassName}
      onClick={() => {
        setLogUser({
          email: "init",
          password: "init",
          id: "init",
        });
        localStorage.clear();
      }}
    >
      Wyloguj
    </Link>
  );
}
