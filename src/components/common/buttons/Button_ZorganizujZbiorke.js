import { Link } from "react-router-dom";
import React from "react";

export function Button_ZorganizujZbiorke({ logUser }) {
  return (
    <>
      {logUser.email !== "init" ? (
        <Link to="zorganizuj-zbiorke" className="btn__link">
          ZORGANIZUJ <br />
          ZBIÓRKĘ
        </Link>
      ) : (
        <Link to="logowanie" className="btn__link">
          ZORGANIZUJ <br />
          ZBIÓRKĘ
        </Link>
      )}
    </>
  );
}
