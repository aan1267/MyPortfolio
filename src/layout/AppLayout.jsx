import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import ThemeProvider from "../context/ThemeContext";


function AppLayout() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default AppLayout;
