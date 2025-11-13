import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import logo from "/logo.png";

const MovieNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col items-center justify-center bg-base-100 text-base-content px-4">
      {/* Logo Animation */}
      <motion.img
        src={logo}
        alt="Moviescope Pro"
        className="w-20 mb-8"
        animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-primary mb-4 text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        Movie Not Found
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-center text-base-content/70 mb-8 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        We couldn’t find the movie you’re looking for. It might have been
        removed or is temporarily unavailable.
      </motion.p>

      {/* Go Back Button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Go Back
        </button>
      </motion.div>
    </div>
  );
};

export default MovieNotFound;
