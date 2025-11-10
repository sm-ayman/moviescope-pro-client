import React, { useEffect, useState } from "react";

const AllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => {
        setAllMovies(data);
      })
      .catch((err) => {
        console.error("Failed to fetch recent movies:", err);
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
              className="bg-white/5 dark:bg-gray-800 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {movie.title} ({movie.releaseYear})
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Genre:</strong> {movie.genre}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Director:</strong> {movie.director}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Cast:</strong> {movie.cast}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Duration:</strong> {movie.duration} mins
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Language:</strong> {movie.language}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Country:</strong> {movie.country}
                </p>
                <p className="text-sm text-yellow-400 font-medium mb-2">
                  ⭐ {movie.rating}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  {movie.plotSummary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllMovies;
