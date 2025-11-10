import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RecentlyAddedMovies = () => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recent-movies")
      .then((res) => res.json())
      .then((data) => {
        setRecentMovies(data);
      })
      .catch((err) => {
        console.error("Failed to fetch recent movies:", err);
      });
  }, []);

  return (
    <section className="w-full py-16 bg-base-100 text-base-content transition-all">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-10 text-center">
          Recently Added Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentMovies.map((movie) => (
            <Link
              to={`/movie/${movie._id}`}
              key={movie.id}
              className="bg-base-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg md:text-xl font-semibold">
                  {movie.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedMovies;
