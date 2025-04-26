import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import burgerIcon from "../../assets/icons/burgerIcon.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";
import { NavItem, getNavigation } from "../../config/navigationConfig";
import useFadeAnimation from "../../hooks/useFadeAnimation";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { AnimatedWrapper } from "../AnimatedWrapper/AnimatedWrapper";
import "./BurgerMenu.scss";

interface Props {
  currentLang: string;
  toggleLanguage: () => void;
  onToggle?: (open: boolean) => void;
}

const slideX = {
  open: { x: "0%", transition: { duration: 0.25 } },
  closed: { x: "-100%", transition: { duration: 0.25 } },
};

const BurgerMenu: FC<Props> = ({ currentLang, toggleLanguage, onToggle }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const nav = getNavigation(t);

  useLockBodyScroll(open);

  const { startFade } = useFadeAnimation(0);

  const switchLang = () => {
    toggleLanguage();
    startFade();
  };

  const toggle = (next = !open) => {
    setOpen(next);
    onToggle?.(next)
  };

  const renderItem = (item: NavItem) =>
    item.isLangSwitcher ? (
      <li key="lang">
        <Link to="#" onClick={() => {
          switchLang();
          toggle(false);
        }}>
          {currentLang === "en" ? "Rus" : "Eng"}
        </Link>
      </li>
    ) : (
      <li key={item.label}>
          <Link to={item.to!} onClick={() => toggle(false)}>
          {item.label}
        </Link>
      </li>
    );

  return (
    <AnimatedWrapper className="burger-menu">
      <button className="burger-icon" onClick={() => toggle()}>
        <img
          src={open ? closeIcon : burgerIcon}
          className={open ? "closeMenu" : "openMenu"}
        />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.aside
              className="burger-overlay"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <motion.nav
                className="menu"
                variants={slideX}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <ul>{nav.map(renderItem)}</ul>
              </motion.nav>
            </motion.aside>
          )}
        </AnimatePresence>,
        document.body
      )}
    </AnimatedWrapper>
  );
};

export default BurgerMenu;
