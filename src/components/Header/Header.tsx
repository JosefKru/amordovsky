import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavItem, getNavigation } from "../../config/navigationConfig";
import useFadeAnimation from "../../hooks/useFadeAnimation";
import { useHeaderVisibility } from "../../hooks/useHeaderVisibility";
import { AnimatedWrapper } from "../AnimatedWrapper/AnimatedWrapper";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.scss";

const Header: React.FC = React.memo(() => {
  const [shouldAnimateLogo, setShouldAnimateLogo] = useState(false);
  const firstLoad = useRef(true);
  const { i18n, t } = useTranslation();

  const navigate = useNavigate();
  const navigation = getNavigation(t);

  const isVisible = useHeaderVisibility();
  const { startFade } = useFadeAnimation(0);
  
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const currentLang = i18n.language;



  const toggleLanguage = () => {
    setShouldAnimateLogo(true);

    startFade(() => {
      const newLang = currentLang === "en" ? "ru" : "en";
      i18n.changeLanguage(newLang);
      localStorage.setItem("language", newLang);
      navigate("/");
    });
  };

  const handleClick = (isActive: boolean) => {
    if (!isActive) startFade();
    setShouldAnimateLogo(false);
  };

  const renderMenuItem = (item: NavItem) => {
    const isActive = location.pathname === item.to;

    if (item.isLangSwitcher) {
      return (
        <Link to="#" onClick={toggleLanguage} className="lang-switcher">
          {currentLang === "en" ? "Rus" : "Eng"}
        </Link>
      );
    }

    return (
      <Link to={item.to!} onClick={() => handleClick(isActive)}>
        {t(item.label)}
      </Link>
    );
  };

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
    }
  }, []);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <AnimatedWrapper>
        <Link to={"/"} className="logo-link">
          {isHomePage ? (
            <div
              className={`logo ${
                firstLoad.current || shouldAnimateLogo ? "animated" : "static"
              }`}
            >
              <span className="mask"></span>
              <span className="letter-a">A</span>
              <span className="letter-m">M</span>
              <span className="dot">.</span>
            </div>
          ) : (
            <div className="logo static">AM.</div>
          )}
        </Link>
      </AnimatedWrapper>

      <AnimatedWrapper>
        <nav className="main-menu" role="navigation">
          <ul role="menu">
            {navigation.map((item) => (
              <li key={item.label} role="menuitem">
                {renderMenuItem(item)}
              </li>
            ))}
          </ul>
        </nav>
      </AnimatedWrapper>

      <BurgerMenu
        currentLang={currentLang}
        toggleLanguage={toggleLanguage}
        setShouldAnimateLogo={setShouldAnimateLogo}
      />
    </header>
  );
});

export default Header;
