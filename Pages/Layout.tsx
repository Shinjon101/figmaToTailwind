import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="p-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
