import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    fetch("https://moviescope-pro-server.vercel.app/top-rated-movies")
      .then((res) => res.json())
      .then((data) => setTopRatedMovies(data))
      .catch((err) => {
        console.error("Failed to fetch top-rated movies:", err);
      });
  }, []);

  // motion variants for container and items
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
      className="w-full py-16 bg-base-100 dark:bg-gray-900 transition-colors duration-300"
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
          Top Rated Movies
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
        >
          {topRatedMovies.map((movie) => (
            <motion.div key={movie._id} variants={itemVariants}>
              <Link
                to={`/movies/${movie._id}`}
                className="bg-white/5 dark:bg-gray-800 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
              >
                <motion.img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-semibold light:text-gray-900 dark:text-white text-center mb-2">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    <span className="font-bold light:text-gray-900 dark:text-white">
                      {movie.rating}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default TopRatedMovies;
