import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const MovieDetails = () => {
  const { id } = useParams(); // get movie id from route
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // current logged-in user
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch movie details
  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch movie:", err));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      fetch(`http://localhost:5000/movies/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => navigate("/all-movies"))
        .catch((err) => console.error("Failed to delete movie:", err));
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!movie) return <p className="text-center py-10">Movie not found.</p>;

  const isOwner = user?.email === movie.addedBy;

  return (
    <section className="w-full py-16 bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 bg-white/5 dark:bg-gray-800 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
          {/* Poster */}
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full md:w-1/3 h-auto object-cover"
          />

          {/* Movie Details */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
              <p className="text-sm text-yellow-400 font-medium mb-2">
                ⭐ {movie.rating}
              </p>
              <p className="mb-1">
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p className="mb-1">
                <strong>Release Year:</strong> {movie.releaseYear}
              </p>
              <p className="mb-1">
                <strong>Director:</strong> {movie.director}
              </p>
              <p className="mb-1">
                <strong>Cast:</strong> {movie.cast}
              </p>
              <p className="mb-1">
                <strong>Duration:</strong> {movie.duration} mins
              </p>
              <p className="mb-1">
                <strong>Language:</strong> {movie.language}
              </p>
              <p className="mb-1">
                <strong>Country:</strong> {movie.country}
              </p>
              <p className="mt-4">{movie.plotSummary}</p>
            </div>

            {/* Buttons for owner */}
            {isOwner && (
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => navigate(`/edit-movie/${movie.id}`)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
