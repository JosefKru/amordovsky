import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import burgerIcon from "../../assets/icons/burgerIcon.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";
import "./BurgerMenu.scss";

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

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Projects", "About", "Contact", "Rus"];

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="burger-menu">
      <button
        className="burger-icon"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <img src={closeIcon} className="closeMenu" alt="Open menu icon" />
        ) : (
          <img src={burgerIcon} className="openMenu" alt="Close menu icon" />
        )}
      </button>

      <motion.div
        className="menu"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul>
          {menuItems.map((item, i) => (
            <motion.li key={item} custom={i} variants={linkVariants}>
              <a
                href={`/${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                }}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default BurgerMenu;
