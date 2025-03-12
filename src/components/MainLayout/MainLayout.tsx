import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import FloatingContact from "../FloatingContact/FloatingContact";
import Header from "../Header/Header";

export const pageVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

function MainLayout() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  return (
    <>
      <Header />
      <FloatingContact />

      <motion.div
        key={`${location.pathname}-${currentLang}`}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
      >
        <Outlet />
      </motion.div>
    </>
  );
}

export default MainLayout;
