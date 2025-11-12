import React from "react";
import { motion } from "framer-motion";
import { FaFilm, FaLaugh, FaHeart, FaRobot, FaGhost } from "react-icons/fa";

const genres = [
  { id: 1, name: "Action", icon: <FaFilm />, color: "text-red-500" },
  { id: 2, name: "Drama", icon: <FaHeart />, color: "text-blue-500" },
  { id: 3, name: "Comedy", icon: <FaLaugh />, color: "text-yellow-400" },
  { id: 4, name: "Sci-Fi", icon: <FaRobot />, color: "text-purple-500" },
  { id: 5, name: "Horror", icon: <FaGhost />, color: "text-base-content" },
  { id: 6, name: "Romance", icon: <FaHeart />, color: "text-pink-500" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const GenreSection = () => {
  return (
    <motion.section
      className="w-full py-16 bg-base-100 text-base-content transition-all"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-xl md:text-2xl font-bold text-primary mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Movie Genres
        </motion.h2>

        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {genres.map((genre) => (
            <motion.div
              key={genre.id}
              className="flex flex-col items-center justify-center gap-2 bg-base-200 rounded-xl py-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
              variants={itemVariants}
            >
              <div className={`text-3xl ${genre.color}`}>{genre.icon}</div>
              <span className="font-semibold">{genre.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GenreSection;
