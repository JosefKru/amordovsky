import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import closeIcon from "../../assets/icons/closeIcon.svg";
import avatar from "../../assets/images/avatar.jpg";
import "./FloatingContact.scss";

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const location = useLocation();

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClosing(true);
    setIsOpen(false);
  };

  if (location.pathname === "/contact") return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="floating-contact"
        initial="circle"
        animate={isOpen ? "expanded" : "circle"}
        whileHover={isOpen ? "expanded" : "pill"}
        variants={{
          circle: {
            width: 80,
            height: 80,
            borderRadius: 100,
            transition: { type: "easeInOut", duration: 0.2 },
            background: "white",
          },
          pill: {
            width: 260,
            height: 80,
            borderRadius: 100,
            transition: { type: "easeInOut", duration: 0.2 },
            background: isClosing ? "white" : "black",
            color: "white",
          },
          expanded: {
            width: 260,
            height: 316,
            borderRadius: 32,
            transition: { type: "easeInOut", duration: 0.3 },
            boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.1)",
            background: "white",
            color: "black",
          },
        }}
        onClick={() => setIsOpen(true)}
        exit={{ x: 100, y: -100, opacity: 0, transition: { duration: 0.3 } }}
        onAnimationComplete={() => {
          setTimeout(() => setIsClosing(false), 100);
        }}
      >
        <div
          className={`contact-details ${isOpen || isClosing ? "open " : ""}`}
          ref={ref}
        >
          <div className="contact-header">
            <img src={avatar} alt="Avatar" className="avatar-img" />
            <h2>Contact&nbsp;me</h2>
            {(isOpen || isClosing) && (
              <img
                src={closeIcon}
                className="close-btn"
                onClick={handleClose}
                alt="Close menu icon"
              />
            )}
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <p className="contact-type">Phone</p>
              <p className="contact">+7 926 082 53 10</p>
            </div>

            <div className="contact-item">
              <p className="contact-type">E-mail</p>
              <p className="contact">Andrei@gmail.com</p>
            </div>

            <Link to="https://t.me/AndreyUX" className="telegram-btn">
              Write to telegram
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingContact;
