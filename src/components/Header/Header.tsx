import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { NavItem, navItems } from "../../lib/navigationConfig";
import { useHeaderVisibility } from "../../hooks/useHeaderVisibility"; // <-- импорт кастомного хука
import "./Header.scss";

const Header: React.FC = React.memo(() => {
  const isVisible = useHeaderVisibility();

  const [language, setLanguage] = useState<"en" | "ru">("en");

  const firstLoad = useRef(true);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      firstLoad.current = false;
    }
  }, [isHomePage]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  };

  const renderMenuItem = (item: NavItem) => {
    if (item.isLangSwitcher) {
      return (
        <button onClick={toggleLanguage}>
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {language === "en" ? "Rus" : "Eng"}
            </motion.span>
          </AnimatePresence>
        </button>
      );
    }

    return <Link to={item.to!}>{item.label}</Link>;
  };

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      {isHomePage ? (
        <div className={`logo ${firstLoad.current ? "animated" : "static"}`}>
          <span className="mask"></span>
          <span className="letter-a">A</span>
          <span className="letter-m">M</span>
          <span className="dot">.</span>
        </div>
      ) : (
        <div className="logo static">AM.</div>
      )}

      <nav className="main-menu" role="navigation">
        <ul role="menu">
          {navItems.map((item) => (
            <li key={item.label} role="menuitem">
              {renderMenuItem(item)}
            </li>
          ))}
        </ul>
      </nav>

      <BurgerMenu language={language} toggleLanguage={toggleLanguage} />
    </header>
  );
});

export default Header;
