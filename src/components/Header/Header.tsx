import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">AM.</div>

      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/rus">Rus</Link>
          </li>
        </ul>
      </nav>

      <BurgerMenu />
    </header>
  );
};

export default Header;
