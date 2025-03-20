import { Outlet } from "react-router-dom";
import { AnimatedWrapper } from "../AnimatedWrapper/AnimatedWrapper";
import FloatingContact from "../FloatingContact/FloatingContact";
import Header from "../Header/Header";

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
