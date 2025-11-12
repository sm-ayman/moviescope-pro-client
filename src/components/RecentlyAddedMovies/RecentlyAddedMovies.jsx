import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const RecentlyAddedMovies = () => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    fetch("https://moviescope-pro-server.vercel.app/recent-movies")
      .then((res) => res.json())
      .then((data) => setRecentMovies(data))
      .catch((err) => console.error("Failed to fetch recent movies:", err));
  }, []);

  // animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="w-full py-16 bg-base-100 text-base-content transition-all"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-xl md:text-2xl font-bold text-primary mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Recently Added Movies
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {recentMovies.map((movie) => (
            <motion.div key={movie._id} variants={itemVariants}>
              <Link
                to={`/movies/${movie._id}`}
                className="bg-base-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer"
              >
                <motion.img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {movie.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default RecentlyAddedMovies;
