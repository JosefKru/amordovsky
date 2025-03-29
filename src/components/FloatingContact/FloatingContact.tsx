import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import closeIcon from "../../assets/icons/closeIcon.svg";
import avatar from "../../assets/images/avatar.jpg";
import "./FloatingContact.scss";

const ANIMATION_DURATION = 0.2;

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [disableHover, setDisableHover] = useState(false);

  const { i18n, t } = useTranslation();
  const { pathname } = useLocation();

  const language = i18n.language;
  const resetKey = `${pathname}-${language}`;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDisableHover(true);
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => setDisableHover(false), 300);
    }, 0);
  };

  useEffect(() => {
    const warn = console.warn;
    console.warn = (...args) => {
      if (args[0] && args[0].includes("You are trying to animate background")) {
        return;
      }
      warn(...args);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        setIsClosing(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, [resetKey]);

  if (pathname === "/contact") return null;

  return (
    <motion.div
      key={resetKey}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: ANIMATION_DURATION, ease: "easeInOut", delay: 1 }}
    >
      <motion.div
        className="floating-contact"
        initial="circle"
        animate={isOpen ? "expanded" : "circle"}
        whileHover={!disableHover && !isOpen ? "pill" : "open"}
        variants={{
          circle: {
            width: 80,
            height: 80,
            padding: 4,
            borderRadius: 100,
            transition: { type: "easeInOut", duration: ANIMATION_DURATION },
            background: "rgb(255, 255, 255, 1)",
            color: "rgb(255, 255, 255)",
          },
          pill: {
            width: 260,
            height: 80,
            borderRadius: 100,
            padding: 4,
            transition: { type: "easeInOut", duration: ANIMATION_DURATION },
            // background: isClosing ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
            background: isClosing ? "rgb(255, 255, 255)" : "black",
            color: "rgb(255, 255, 255)",
            cursor: "pointer",
          },
          expanded: {
            width: 260,
            height: 316,
            padding: 12,
            borderRadius: 32,
            transition: { type: "easeInOut", duration: ANIMATION_DURATION },
            boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.1)",
            background: "rgb(255, 255, 255)",
            color: "rgb(0, 0, 0)",
          },
        }}
        onClick={() => setIsOpen(true)}
        exit={{
          x: 100,
          y: -100,
          opacity: 0,
          transition: { duration: ANIMATION_DURATION },
        }}
        onAnimationComplete={() => {
          setTimeout(() => setIsClosing(false), 300);
        }}
      >
        <motion.div
          className={`contact-details`}
          layout
          transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
        >
          <div className="contact-header">
            <img src={avatar} alt="Avatar" className="avatar-img" />

            <motion.div
              initial={{ opacity: 1 }}
              animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
            >
              <h2>{t("contactMe")}</h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isOpen
                ? { opacity: 1, pointerEvents: "auto" }
                : { opacity: 0, pointerEvents: "none" }
            }
            transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
            className="close-btn"
          >
            <img src={closeIcon} onClick={handleClose} alt="Close menu icon" />
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
          >
            <div className="contact-item">
              <p className="contact-type">{t("phone")}</p>
              <Link to="tel:+79361996669" className="contact">
                +7 936 199 66 69
              </Link>
            </div>

            <div className="contact-item">
              <p className="contact-type">{t("email")}</p>
              <Link to="mailto:hello@amordovski.com" className="contact">
                hello@amordovski.com
              </Link>
            </div>

            <Link
              to="https://t.me/amordovskoi"
              className="telegram-btn"
              target="_blank"
            >
              {t("telegram")}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingContact;
