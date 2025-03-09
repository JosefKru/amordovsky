import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useHeaderVisibility } from "../../hooks/useHeaderVisibility";
import { NavItem, getNavigation } from "../../lib/navigationConfig";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.scss";

const Header: React.FC = React.memo(() => {
  const isVisible = useHeaderVisibility();
  const { i18n, t } = useTranslation();
  const language = i18n.language === "ru" ? "ru" : "en";
  const firstLoad = useRef(true);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      firstLoad.current = false;
    }
  }, [isHomePage]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
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

    return <Link to={item.to!}>{t(item.label)}</Link>;
  };

  const navigation = getNavigation(t);





    const [currentLang, setCurrentLang] = useState(i18n.language);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  
    useEffect(() => {
      setCurrentLang(i18n.language);
    }, [i18n.language]);

    const pageVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    };

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <Link to={"/"} className="logo-link">
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
      </Link>


      <motion.div
        key={`${location.pathname}-${currentLang}`}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={pageVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
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
  );
});

export default Header;
