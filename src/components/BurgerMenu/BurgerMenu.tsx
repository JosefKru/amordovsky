import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import burgerIcon from "../../assets/icons/burgerIcon.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";
import { NavItem, getNavigation } from "../../config/navigationConfig";
import { AnimatedWrapper } from "../AnimatedWrapper/AnimatedWrapper";
import "./BurgerMenu.scss";

interface BurgerMenuProps {
  currentLang: string;
  toggleLanguage: () => void;
}

const menuVariants = {
  open: { x: "0%", opacity: 1, transition: { duration: 0.1 } },
  closed: { x: "-100%", opacity: 1, transition: { duration: 0.1 } },
};

const BurgerMenu: FC<BurgerMenuProps> = ({
  currentLang: language,
  toggleLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  const navigation = getNavigation(t);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleChangeLanguage = () => {
    toggleLanguage();
    closeMenu();
  };

  const renderMenuItem = (item: NavItem) => {
    if (item.isLangSwitcher) {
      return (
        <li key={item.label}>
          <Link to="#" onClick={handleChangeLanguage}>
            {language === "en" ? "Rus" : "Eng"}
          </Link>
        </li>
      );
    }

    return (
      <li key={item.label}>
        <Link to={item.to!} onClick={closeMenu}>
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <nav className="burger-menu">
      <AnimatedWrapper>
        <button
          className="burger-icon"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? closeIcon : burgerIcon}
            className={isOpen ? "closeMenu" : "openMenu"}
          />
        </button>
      </AnimatedWrapper>

      <motion.div
        className="menu"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <AnimatedWrapper>
          <ul>{navigation.map((item) => renderMenuItem(item))}</ul>
        </AnimatedWrapper>
      </motion.div>
    </nav>
  );
};

export default BurgerMenu;
