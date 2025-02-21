import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.scss";

const menuItems = [
  { to: "/", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/rus", label: "Rus" },
];

const Header: React.FC = React.memo(() => {
  return (
    <header className="header">
      <div className="logo">AM.</div>

      <nav className="main-menu" role="navigation">
        <ul role="menu">
          {menuItems.map((item) => (
            <li key={item.to} role="menuitem">
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <BurgerMenu />
    </header>
  );
});

export default Header;
