import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const pageVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

export const AnimatedWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
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
    <motion.div
      key={`${location.pathname}-${currentLang}`}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
