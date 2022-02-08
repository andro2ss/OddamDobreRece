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
          <NavigationItem content="Start" to="home" />
        </li>
        <li>
          <NavigationItem content="O&nbsp;co&nbsp;chodzi?" to="threeColumns" />
        </li>
        <li>
          <NavigationItem content="O&nbsp;nas" to="home" />
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