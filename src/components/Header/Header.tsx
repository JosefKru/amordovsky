import React, { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(scrollY < lastScrollY || scrollY < 50);
          setLastScrollY(scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="logo">
        <span className="mask"></span>
        <span className="letter-a">A</span>
        <span className="letter-m">M</span>
        <span className="dot">.</span>
      </div>

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
