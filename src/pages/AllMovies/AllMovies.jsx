import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => {
        setAllMovies(data);
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
      });
  }, []);

  return (
    <section className="w-full py-16 bg-base-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
          All Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white/5 dark:bg-gray-800 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer flex flex-col"
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {movie.title} ({movie.releaseYear})
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                    <strong>Genre:</strong> {movie.genre}
                  </p>
                  <p className="text-sm text-yellow-400 font-medium mb-2">
                    ⭐ {movie.rating}
                  </p>
                </div>
                <Link
                  to={`/movies/${movie._id}`}
                  className="mt-4 inline-block px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/90 text-center"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllMovies;
