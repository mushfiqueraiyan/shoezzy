import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className=" py-5  max-w-[1600px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
