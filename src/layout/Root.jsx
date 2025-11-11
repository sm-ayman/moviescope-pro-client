import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
