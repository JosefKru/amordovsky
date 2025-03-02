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
      width: 60,
      height: 60,
      borderRadius: 60,
      transition: { type: "spring", stiffness: 400, damping: 30 },
    },
    pill: {
      width: 160,
      height: 60,
      borderRadius: 30,
      transition: { type: "spring", stiffness: 400, damping: 30 },
    },
    expanded: {
      width: 300,
      height: 400,
      borderRadius: 32,
      transition: { type: "spring", stiffness: 50, damping: 15 },
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
      onClick={() => setIsOpen(!isOpen)}
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
