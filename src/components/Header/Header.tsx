import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useHeaderVisibility } from "../../hooks/useHeaderVisibility";
import { NavItem, getNavigation } from "../../lib/navigationConfig";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.scss";
import useFadeAnimation from "../../hooks/useFadeAnimation";
import { pageVariants } from "../MainLayout/MainLayout";

const Header: React.FC = React.memo(() => {
  const isVisible = useHeaderVisibility();
  const { i18n, t } = useTranslation();
  const language = i18n.language === "ru" ? "ru" : "en";
  const firstLoad = useRef(true);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [currentLang, setCurrentLang] = useState(i18n.language);

  const {isFading, startFade} = useFadeAnimation(800)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    startFade(() => {
      const newLang = language === "en" ? "ru" : "en";
      i18n.changeLanguage(newLang);
      localStorage.setItem("language", newLang);
    }); 
  };

  const renderMenuItem = (item: NavItem) => {
    if (item.isLangSwitcher) {
      return (
        <Link to={"#"} onClick={toggleLanguage} className="lang-switcher">
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
        </Link>
      );
    }

    return <Link to={item.to!} onClick={() => startFade()}>{t(item.label)}</Link>;
  };

  const navigation = getNavigation(t);

  return (
    <>
      {/* Затемнение экрана */}
      {isFading && (
        <motion.div
          className="fade-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
        />
      )}

      <header className={`header ${isVisible ? "visible" : "hidden"}`}>
        <Link to={"/"} className="logo-link">
        <motion.div
              key={`${location.pathname}-${currentLang}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={pageVariants}
              transition={{ duration: 0.5, ease: "easeInOut", delay: isFading ? 0.8 : 0 }} // Задержка анимации
            >
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
          </motion.div>
        </Link>

            {/* Основной контент с задержкой анимации */}
            <motion.div
              key={`${location.pathname}-${currentLang}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={pageVariants}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8}} // Задержка анимации
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

        <BurgerMenu language={language} toggleLanguage={toggleLanguage} />
      </header>
    </>
  );
});

export default Header;
