import React from "react";
import { Link } from "react-router-dom";
import NavigationItem from "./NavigationItem";

function Navigation() {
  return (
    <div className="nav__container">
      <div className="nav__user">
        <Link to="logowanie" className="link">
          Zaloguj
        </Link>
        <Link to="rejestracja" className="link active">
          Załóż konto
        </Link>
      </div>
      <ul className="nav__page">
        <li className="active">
          {/*<NavigationItem content="Start" to="home" />*/}
          <Link
            to="/"
            style={{ textDecoration: "none", color: `black` }}
            className="nav__item"
            onClick={(e) => {
              let activeItem = document.querySelector(".nav__page .active");
              if (activeItem) {
                activeItem.classList.remove("active");
              }
              e.target.parentElement.classList.add("active");
            }}
          >
            Start
          </Link>
        </li>
        <li>
          <NavigationItem content="O&nbsp;co&nbsp;chodzi?" to="simpleSteps" />
        </li>
        <li>
          <NavigationItem content="O&nbsp;nas" to="aboutUs" />
        </li>
        <li>
          <NavigationItem
            content="Fundacja&nbsp;i&nbsp;organizacje"
            to="home"
          />
        </li>
        <li>
          <NavigationItem content="Kontakt" to="home" />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
