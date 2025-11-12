import React, { useEffect, useState } from "react";
import { FaFilm, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import LoadingSpinner from "../Spinner/LoadingSpinner";

const MovieStatistics = () => {
  const [stats, setStats] = useState({ totalMovies: 0, totalUsers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("https://moviescope-pro-server.vercel.app/stats");
        const data = await res.json();
        setStats({
          totalMovies: data.totalMovies,
          totalUsers: data.totalUsers,
        });
      } catch (err) {
        console.error("Failed to fetch statistics:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  const statItems = [
    {
      id: 1,
      label: "Total Movies",
      value: stats.totalMovies,
      icon: <FaFilm size={40} />,
    },
    {
      id: 2,
      label: "Total Users",
      value: stats.totalUsers,
      icon: <FaUsers size={40} />,
    },
  ];

  return (
    <motion.section
      className="w-full py-16 bg-base-100 text-base-content transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-xl md:text-2xl font-bold text-primary mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Moviescope Statistics
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-base-200 rounded-xl p-6 md:p-10 flex-1 shadow-md hover:shadow-xl hover:scale-105 transition flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, 
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.07, rotate: 1 }}
            >
              <motion.div
                className="text-primary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                className="text-4xl md:text-5xl font-extrabold text-primary mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                {stat.value.toLocaleString()}
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MovieStatistics;
