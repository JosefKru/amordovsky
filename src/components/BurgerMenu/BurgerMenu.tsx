import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import burgerIcon from "../../assets/icons/burgerIcon.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";
import useFadeAnimation from "../../hooks/useFadeAnimation";
import { NavItem, getNavigation } from "../../lib/navigationConfig";
import "./BurgerMenu.scss";

interface BurgerMenuProps {
  currentLang: string;
  toggleLanguage: () => void;
}

const menuVariants = {
  open: { x: "0%", opacity: 1, transition: { duration: 0 } },
  closed: { x: "-100%", opacity: 1, transition: { duration: 0 } },
};

const linkVariants = {
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.3 },
  }),
};

const BurgerMenu: FC<BurgerMenuProps> = ({
  currentLang: language,
  toggleLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleScroll = setTimeout(() => {
      document.body.classList.toggle("no-scroll", isOpen);
    }, 300);

    return () => clearTimeout(toggleScroll);
  }, [isOpen]);

  const { t } = useTranslation();

  const { startFade } = useFadeAnimation(0);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLangClick = () => {
    startFade(() => {
      toggleLanguage();
      closeMenu();
    });
  };

  const renderMenuItem = (item: NavItem, i: number) => {
    if (item.isLangSwitcher) {
      return (
        <motion.li key={item.label} custom={i} variants={linkVariants}>
          <Link to="" onClick={handleLangClick}>
            {language === "en" ? "Rus" : "Eng"}
          </Link>
        </motion.li>
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

  const navigation = getNavigation(t);

  return (
    <nav className="burger-menu">
      <button
        className="burger-icon"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <img src={closeIcon} className="closeMenu" alt="Close menu icon" />
        ) : (
          <img src={burgerIcon} className="openMenu" alt="Open menu icon" />
        )}
      </button>
      <motion.div
        className="menu"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul>{navigation.map((item, i) => renderMenuItem(item, i))}</ul>
      </motion.div>
    </nav>
  );
};

export default BurgerMenu;
