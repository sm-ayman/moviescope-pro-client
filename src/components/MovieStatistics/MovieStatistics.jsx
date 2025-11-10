import React from "react";
import { FaFilm, FaUsers } from "react-icons/fa";

const MovieStatistics = () => {
  // Static data (replace with database values later)
  const stats = [
    { id: 1, label: "Total Movies", value: 1240, icon: <FaFilm size={40} /> },
    { id: 2, label: "Total Users", value: 875, icon: <FaUsers size={40} /> },
  ];

  return (
    <section className="w-full py-16 bg-base-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Moviescope Statistics
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/5 dark:bg-gray-800 backdrop-blur-md rounded-xl p-6 md:p-10 flex-1 shadow-lg hover:shadow-xl transition flex flex-col items-center"
            >
              <div className="text-primary mb-4">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                {stat.value.toLocaleString()}
              </h3>
              <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieStatistics;
