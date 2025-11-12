import React, { useEffect, useState, use } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { AuthContext } from "../../contexts/AuthContext";

const MovieDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://moviescope-pro-server.vercel.app/movies/${id}`)
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

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this movie?")) return;

    fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/my-collection"); // ✅ redirect after delete
      })
      .catch((err) => console.error("Failed to delete movie:", err));
  };

  return (
    <section className="w-full min-h-screen bg-base-100 dark:bg-gray-900 pb-16 transition-colors">
      {/* Hero (unchanged) */}
      <div
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{ backgroundImage: `url(${movie.posterUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg opacity-80">
            {movie.genre} | {movie.releaseYear} | ⭐ {movie.rating}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 mt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl shadow-lg p-8 bg-white dark:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-primary mb-4"
          >
            Summary
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
          >
            {movie.plotSummary}
          </motion.p>

          {/* Staggered Detail Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              ["Genre", movie.genre],
              ["Release Year", movie.releaseYear],
              ["Director", movie.director],
              ["Cast", movie.cast],
              ["Duration", `${movie.duration} mins`],
              ["Language", movie.language],
              ["Country", movie.country],
              ["Added By", movie.addedBy],
            ].map(([label, value], idx) => (
              <DetailMotion key={idx} label={label} value={value} />
            ))}
          </motion.div>

          {/* Buttons */}
          {isOwner && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4 mt-10"
            >
              <Link
                to={`/movies/update/${movie._id}`}
                className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
              >
                Edit
              </Link>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(movie._id);
                }}
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

const DetailMotion = ({ label, value }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5 }}
    className="flex flex-col"
  >
    <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
      {label}
    </span>
    <span className="text-lg text-gray-900 dark:text-gray-100 font-semibold mt-1">
      {value}
    </span>
  </motion.div>
);

export default MovieDetails;
