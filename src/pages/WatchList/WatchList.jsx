import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaTrash } from "react-icons/fa";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  const removeFromWatchlist = (_id) => {
    const updated = watchlist.filter((movie) => movie._id !== _id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <section className="w-full py-16 bg-base-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
          My Watchlist
        </h2>

        {watchlist.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
            Your watchlist is empty ❤️
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {watchlist.map((movie) => (
              <div
                key={movie._id}
                className="w-full flex items-center gap-4 bg-white/5 dark:bg-gray-800 rounded-xl p-4 shadow-md hover:bg-white/10 dark:hover:bg-gray-700 transition"
              >
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-24 h-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {movie.title} ({movie.releaseYear})
                  </h3>
                  <p className="text-sm dark:text-gray-300">
                    <strong>Genre:</strong> {movie.genre}
                  </p>
                  <p className="text-sm text-yellow-400 font-medium">
                    ⭐ {movie.rating}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/movies/${movie._id}`}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
                  >
                    Details
                  </Link>

                  <button
                    onClick={() => removeFromWatchlist(movie._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                  >
                    <FaTrash size={14} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WatchList;
