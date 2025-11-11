import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { AuthContext } from "../../contexts/AuthContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const AllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => setAllMovies(data))
      .catch((err) => console.error("Failed to fetch movies:", err));
  }, []);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  const toggleWatchlist = (movie) => {
    let updatedWatchlist;

    if (watchlist.some((m) => m._id === movie._id)) {
      updatedWatchlist = watchlist.filter((m) => m._id !== movie._id);
    } else {
      updatedWatchlist = [...watchlist, movie];
    }

    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-base-100 dark:bg-gray-900 transition-colors duration-300">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-base-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* ✅ Search Bar */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
          All Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie._id}
              className="relative bg-white/5 dark:bg-gray-800 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer flex flex-col"
            >
              {/* ✅ Heart Icon */}
              <button
                onClick={() => toggleWatchlist(movie)}
                className="absolute top-3 right-3 text-white text-2xl hover:scale-110 transition"
              >
                {watchlist.some((m) => m._id === movie._id) ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
              </button>

              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold light:text-gray-900 dark:text-white mb-1">
                    {movie.title} ({movie.releaseYear})
                  </h3>
                  <p className="text-sm light:text-gray-700 dark:text-gray-300 mb-1">
                    <strong>Genre:</strong> {movie.genre}
                  </p>
                  <p className="text-sm text-yellow-400 font-medium mb-2">
                    ⭐ {movie.rating}
                  </p>
                </div>

                <Link
                  to={`/movies/${movie._id}`}
                  className="mt-4 inline-block px-4 py-2 text-white dark:text-white bg-primary rounded-lg hover:bg-primary/90 dark:hover:bg-primary/80 text-center transition"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-300 mt-10 text-lg">
            No movies found.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllMovies;
