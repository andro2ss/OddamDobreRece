import { Link } from "react-router-dom";
import React from "react";

export function Button_ZorganizujZbiorke() {
  return (
    <Link to="logowanie" className="btn__link">
      ZORGANIZUJ <br />
      ZBIÓRKĘ
    </Link>
  );
}
