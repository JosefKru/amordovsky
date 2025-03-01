import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import burgerIcon from "../../assets/icons/burgerIcon.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";
import { NavItem, navItems } from "../../lib/navigationConfig";
import "./BurgerMenu.scss";

interface BurgerMenuProps {
  language: "en" | "ru";
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

const BurgerMenu: React.FC<BurgerMenuProps> = ({ language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLangClick = () => {
    toggleLanguage();
    closeMenu();
  };

  const renderMenuItem = (item: NavItem, i: number) => {
    if (item.isLangSwitcher) {
      return (
        <motion.li key={item.label} custom={i} variants={linkVariants}>
          <Link to={"#"} onClick={handleLangClick}>
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
        </motion.li>
      );
    }

    return (
      <motion.li key={item.label} custom={i} variants={linkVariants}>
        <Link
          to={item.to!}
          onClick={() => {
            closeMenu();
          }}
        >
          {item.label}
        </Link>
      </motion.li>
    );
  };

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
        <ul>
          {navItems.map((item, i) => renderMenuItem(item, i))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default BurgerMenu;
