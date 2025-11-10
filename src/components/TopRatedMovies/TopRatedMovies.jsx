import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/top-rated-movies")
      .then((res) => res.json())
      .then((data) => {
        setTopRatedMovies(data);
      })
      .catch((err) => {
        console.error("Failed to fetch recent movies:", err);
      });
  }, []);
  return (
    <section className="w-full py-16 bg-base-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-10 text-center">
          Top Rated Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topRatedMovies.map((movie) => (
            <Link
              to={`/movies/${movie._id}`}
              key={movie.id}
              className="bg-white/5 dark:bg-gray-800 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-64 object-cover"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedMovies;
