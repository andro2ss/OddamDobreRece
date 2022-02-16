import React from "react";
import { Link } from "react-scroll";

function Button_backTop() {
  let btnMoveTop = document.querySelector(".btn__moveTop");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnMoveTop.style.display = "block";
    } else {
      btnMoveTop.style.display = "none";
    }
  }

  return (
    <Link
      className="btn__moveTop"
      to="top"
      spy={true}
      smooth={true}
      duration={300}
    >
      Powrót na górę
    </Link>
  );
}

export default Button_backTop;
