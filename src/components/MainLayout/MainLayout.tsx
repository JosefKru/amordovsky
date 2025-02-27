import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "../Header/Header.scss";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
