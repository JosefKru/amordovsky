import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import useFadeAnimation from "../../hooks/useFadeAnimation";
import { useHeaderVisibility } from "../../hooks/useHeaderVisibility";
import { NavItem, getNavigation } from "../../lib/navigationConfig";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { pageVariants } from "../MainLayout/MainLayout";
import "./Header.scss";

const Header: React.FC = React.memo(() => {
  const isVisible = useHeaderVisibility();
  const { i18n, t } = useTranslation();
  const firstLoad = useRef(true);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [currentLang, setCurrentLang] = useState(i18n.language);

  const { startFade } = useFadeAnimation(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    firstLoad.current = false;
  }, []);

  const toggleLanguage = () => {
    startFade(() => {
      const newLang = currentLang === "en" ? "ru" : "en";
      i18n.changeLanguage(newLang);
      localStorage.setItem("language", newLang);
    });
  };

  const renderMenuItem = (item: NavItem) => {
    const isActive = location.pathname === item.to;

    if (item.isLangSwitcher) {
      return (
        <Link to={"#"} onClick={toggleLanguage} className="lang-switcher">
          {currentLang === "en" ? "Rus" : "Eng"}
        </Link>
      );
    }

    return (
      <Link
        to={item.to!}
        onClick={() => {
          if (!isActive) startFade();
        }}
      >
        {t(item.label)}
      </Link>
    );
  };

  const navigation = getNavigation(t);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <Link to={"/"} className="logo-link">
        <motion.div
          key={`${location.pathname}-${currentLang}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={pageVariants}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          {isHomePage ? (
            <div
              className={`logo ${firstLoad.current ? "animated" : "static"}`}
            >
              <span className="mask"></span>
              <span className="letter-a">A</span>
              <span className="letter-m">M</span>
              <span className="dot">.</span>
            </div>
          ) : (
            <div className="logo static">AM.</div>
          )}
        </motion.div>
      </Link>

      <motion.div
        key={`${location.pathname}-${currentLang}`}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
      >
        <nav className="main-menu" role="navigation">
          <ul role="menu">
            {navigation.map((item) => (
              <li key={item.label} role="menuitem">
                {renderMenuItem(item)}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
      <BurgerMenu currentLang={currentLang} toggleLanguage={toggleLanguage} />

    </header>
  );
});

export default Header;
