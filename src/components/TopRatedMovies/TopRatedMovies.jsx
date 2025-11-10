import React from "react";
import { FaStar } from "react-icons/fa";

const topRatedMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    rating: 9.3,
    poster: "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_SY679_.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    rating: 9.2,
    poster: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/51EbJwl0SkL._AC_SY679_.jpg",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    rating: 8.9,
    poster: "https://m.media-amazon.com/images/I/51V5ZpFyaFL._AC_.jpg",
  },
  {
    id: 5,
    title: "Forrest Gump",
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_SY679_.jpg",
  },
];

const TopRatedMovies = () => {
  return (
    <section className="w-full py-16 bg-base-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-10 text-center">
          Top Rated Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topRatedMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white/5 dark:bg-gray-800 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <span className="font-bold text-gray-900 dark:text-white">
                    {movie.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedMovies;
