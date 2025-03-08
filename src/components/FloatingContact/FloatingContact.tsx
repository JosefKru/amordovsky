import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";
import "./FloatingContact.scss";

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  if (location.pathname === "/contact") return null;

  const variants = {
    circle: {
      width: 80,
      height: 80,
      borderRadius: 100,
      opacity: 1,
      transition: { type: "easeInOut", duration: 0.2 },
      background: "white",
    },
    pill: {
      width: 260,
      height: 80,
      borderRadius: 100,
      opacity: 1,
      transition: { type: "easeInOut", duration: 0.2 },
      background: "black",

    },
    expanded: {
      width: 260,
      height: 316,
      borderRadius: 32,
      transition: { type: "easeInOut", duration: 0.2 },
      boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.1)",
      background: "white",
      color: "black",
    },
  };

  return (
    <motion.div
      className="floating-contact"
      initial="circle"
      animate={isOpen ? "expanded" : "circle"}
      whileHover={isOpen ? "expanded" : "pill"}
      variants={variants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setIsOpen(true)}
    >
      {isOpen ? (
        <div className="contact-details">
          <div className="contact-header">
            <img src={avatar} alt="Avatar" className="avatar-img" />
            <h2>Contact me</h2>
            <button
              className="close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              ✕
            </button>
          </div>

          <div className="contact-info">
            <p>
              <strong>Phone</strong>
              <br />
              +7 926 082 53 10
            </p>
            <p>
              <strong>E-mail</strong>
              <br />
              Andrei@gmail.com
            </p>
            <Link to="https://t.me/AndreyUX" className="telegram-btn">
              Write to telegram
            </Link>
          </div>
        </div>
      ) : (
        <div className="circle-content">
          <img src={avatar} alt="Avatar" className="avatar-img" />

          <AnimatePresence>
            {hovered && (
              <motion.span
                key="contact-me"
                className="contact-me"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                Contact me
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

export default FloatingContact;
