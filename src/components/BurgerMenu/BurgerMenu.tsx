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
  setShouldAnimateLogo: (value: boolean) => void;
}

const slideX = {
  open: { x: "0%", transition: { duration: 0.25 } },
  closed: { x: "-100%", transition: { duration: 0.25 } },
};

const BurgerMenu: FC<Props> = ({
  currentLang,
  toggleLanguage,
  setShouldAnimateLogo,
}) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const nav = getNavigation(t);

  const toggle = (next = !open) => {
    setOpen(next);
  };

  useLockBodyScroll(open);

  const switchLang = () => {
    toggleLanguage();
    setOpen(false);
    window.scrollTo(0, 0);
  };

  const handleClick = () => {
    setShouldAnimateLogo?.(false);
    setOpen(false);
  }

  const renderItem = (item: NavItem) =>
    item.isLangSwitcher ? (
      <li key="lang">
        <Link to="#" onClick={switchLang}>
          {currentLang === "en" ? "Rus" : "Eng"}
        </Link>
      </li>
    ) : (
      <li key={item.label}>
        <Link
          to={item.to!}
          onClick={handleClick}
        >
          {item.label}
        </Link>
      </li>
    );

  return (
    <div className="burger-menu">
      <AnimatedWrapper>
        <button className="burger-icon" onClick={() => toggle()}>
          <img
            src={open ? closeIcon : burgerIcon}
            className={open ? "closeMenu" : "openMenu"}
          />
        </button>
      </AnimatedWrapper>

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
    </div>
  );
};

export default BurgerMenu;
