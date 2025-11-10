import React, { useEffect, useState, use } from "react";
import { useParams, Link } from "react-router";

import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { AuthContext } from "../../contexts/AuthContext";

const MovieDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch movie:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl text-red-500">
        Movie not found
      </div>
    );
  }

  const isOwner = user?.email === movie.addedBy;

  return (
    <section className="w-full min-h-screen bg-base-100 dark:bg-gray-900 pb-16">
      {/* Hero Image */}
      <div
        className="w-full h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${movie.posterUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg opacity-80">
            {movie.genre} | {movie.releaseYear} | ⭐ {movie.rating}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="bg-white/10 dark:bg-gray-800 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Movie Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {movie.plotSummary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Detail label="Genre" value={movie.genre} />
            <Detail label="Release Year" value={movie.releaseYear} />
            <Detail label="Director" value={movie.director} />
            <Detail label="Cast" value={movie.cast} />
            <Detail label="Duration" value={`${movie.duration} mins`} />
            <Detail label="Language" value={movie.language} />
            <Detail label="Country" value={movie.country} />
            <Detail label="Added By" value={movie.addedBy} />
          </div>

          {isOwner && (
            <div className="flex gap-4 mt-8">
              <Link
                to={`/movies/update/${movie._id}`}
                className="btn btn-primary"
              >
                Edit
              </Link>
              <button className="btn btn-error">Delete</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    <p className="text-lg text-gray-900 dark:text-white font-semibold">
      {value}
    </p>
  </div>
);

export default MovieDetails;
