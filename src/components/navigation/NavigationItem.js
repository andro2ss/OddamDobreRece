import React from "react";
import { Link } from "react-scroll";
function NavigationItem({ content, to }) {
  return (
    <Link
      className="nav__item"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      onClick={(e) => {
        let activeItem = document.querySelector(".nav__page .active");
        if (activeItem) {
          activeItem.classList.remove("active");
        }
        e.target.parentElement.classList.add("active");
      }}
    >
      {content}
    </Link>
  );
}

export default NavigationItem;
