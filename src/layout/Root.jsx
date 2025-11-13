import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop />
      <Outlet></Outlet>
      <Footer></Footer>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Root;
