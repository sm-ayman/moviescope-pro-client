import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample featured movies data
const featuredMovies = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through dream-sharing technology.",
    poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space to save humanity.",
    poster: "https://m.media-amazon.com/images/I/81H4vM7VZ-L._AC_SL1500_.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "Batman battles the Joker in Gotham City, facing chaos and moral dilemmas.",
    poster: "https://m.media-amazon.com/images/I/51EbJwl0SkL._AC_SY679_.jpg",
    link: "#",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const heroMovies = featuredMovies;

  useEffect(() => {
    if (heroMovies.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroMovies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroMovies]);

  return (
    <div className="w-full overflow-hidden relative h-96 md:h-[570px] bg-black">
      <AnimatePresence initial={false} mode="wait">
        {heroMovies.map(
          (movie, idx) =>
            idx === current && (
              <motion.div
                key={movie.id}
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6 md:p-12 text-white">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-xl md:text-3xl font-bold mb-2"
                  >
                    {movie.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-sm md:text-lg mb-4 w-11/12 md:w-1/2"
                  >
                    {movie.description}
                  </motion.p>
                  <motion.a
                    href={movie.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="hover:scale-110 duration-200 px-4 py-2 bg-primary rounded-md text-white font-semibold hover:opacity-90 transition"
                  >
                    Watch Now
                  </motion.a>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroMovies.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === idx
                ? "bg-primary shadow-md"
                : "bg-white/50 hover:bg-white"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.2 }}
          ></motion.button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
