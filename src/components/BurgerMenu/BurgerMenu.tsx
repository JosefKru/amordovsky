import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/close-burger-menu.png";
import OpenIcon from "../../assets/icons/open-burger-menu.png";
import "./BurgerMenu.scss";

const menuVariants = {
  open: { x: "0%", opacity: 1, transition: { duration: 0 } },
  closed: { x: "-100%", transition: { duration: 0.1 } },
};

const linkVariants = {
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.3 },
  }),
  // closed: { y: 20 },
};

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Projects", "About", "Contact", "Rus"];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <nav className="burger-menu">
      <button
        className="burger-icon"
        onClick={() => setIsOpen((state) => !state)}
      >
        {isOpen ? (
          <img src={CloseIcon} className="close-icon" />
        ) : (
          <img src={OpenIcon} className="menu-icon" />
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
                onClick={() => setIsOpen(false)}
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
