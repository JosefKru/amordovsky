import { motion } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FloatingContact from "../FloatingContact/FloatingContact";
import Header from "../Header/Header";

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <FloatingContact />

      <motion.div
        key={location.pathname}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={pageVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Outlet />
      </motion.div>
    </>
  );
}

export default MainLayout;
