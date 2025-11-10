import React, { useEffect, useState, use } from "react";
import { Link } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { AuthContext } from "../../contexts/AuthContext";

const MyCollection = () => {
  const { user, loading } = use(AuthContext);
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetch(
      `http://localhost:5000/movies?addedBy=${encodeURIComponent(user.email)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyMovies(data);
      })
      .catch((err) => {
        console.error("Failed to fetch user movies:", err);
      });
  }, [user]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this movie?")) return;

    fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setMyMovies((prev) => prev.filter((movie) => movie._id !== id));
      })
      .catch((err) => console.error("Failed to delete movie:", err));
  };

  if (!user) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl text-red-500">
        Please log in to view your collection.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-base-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
          My Collection
        </h2>

        {myMovies.length === 0 ? (
          <p className="text-center text-gray-700 dark:text-gray-300">
            You have not added any movies yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {myMovies.map((movie) => (
              <div
                key={movie._id}
                className="bg-white/5 dark:bg-gray-800 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 flex flex-col"
              >
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
                    <p className="text-sm light:text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Genre:</strong> {movie.genre}
                    </p>
                    <p className="text-sm text-yellow-400 font-medium mb-2">
                      ⭐ {movie.rating}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Link
                      to={`/movies/update/${movie._id}`}
                      className="flex-1 px-3 py-2 bg-primary text-white rounded-lg text-center hover:bg-primary/80 transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(movie._id)}
                      className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyCollection;
