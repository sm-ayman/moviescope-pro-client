import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import logo from "/logo.png";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content px-4">
      {/* Logo */}
      <motion.img
        src={logo}
        alt="Moviescope Pro"
        className="w-24 mb-8"
        animate={{ rotate: [0, 15, -15, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* 404 Animation */}
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold text-primary mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        className="text-center text-base-content/70 mb-8 max-w-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </motion.p>

      {/* Button with hover animation */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/"
          className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Error404;
