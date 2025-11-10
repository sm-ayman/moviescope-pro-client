import React, { useEffect, useState } from "react";
import { FaFilm, FaUsers } from "react-icons/fa";
import LoadingSpinner from "../Spinner/LoadingSpinner"; // adjust the path if needed

const MovieStatistics = () => {
  const [stats, setStats] = useState({ totalMovies: 0, totalUsers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/stats");
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
    <section className="w-full py-16 bg-base-100 text-base-content transition-all">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-10">
          Moviescope Statistics
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {statItems.map((stat) => (
            <div
              key={stat.id}
              className="bg-base-200 rounded-xl p-6 md:p-10 flex-1 shadow-md hover:shadow-xl hover:scale-105 transition flex flex-col items-center"
            >
              <div className="text-primary mb-4">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                {stat.value.toLocaleString()}
              </h3>
              <p className="text-lg md:text-xl font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieStatistics;
