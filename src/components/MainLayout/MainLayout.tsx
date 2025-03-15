import { Outlet } from "react-router-dom";
import { AnimatedWrapper } from "../AnimatedWrapper/AnimatedWrapper";
import FloatingContact from "../FloatingContact/FloatingContact";
import Header from "../Header/Header";

export const pageVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

function MainLayout() {
  return (
    <>
      <Header />
      <FloatingContact />

      <AnimatedWrapper>
        <Outlet />
      </AnimatedWrapper>
    </>
  );
}

export default MainLayout;
