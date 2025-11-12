import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthContext";
import { use } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const AddMovie = () => {
  const { user } = use(AuthContext);
  const email = user?.email || "";

  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    director: "",
    cast: "",
    rating: "",
    duration: "",
    plotSummary: "",
    posterUrl: "",
    language: "",
    country: "",
    addedBy: email,
  });

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie Added:", movieData);

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Movie Added: ", data);
        toast.success("🎬 Movie added successfully!");
        setTimeout(() => navigate("/my-collection"), 1500);
      })
      .catch((err) => {
        console.error("Failed to add movie:", err);
        toast.error("❌ Failed to add movie");
      });
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-base-100 shadow-xl rounded-2xl mt-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 130 }}
      >
        Add a New Movie
      </motion.h2>
      {/* movie-added-toast */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={movieData.title}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="Inception"
            required
          />
        </div>

        {/* Genre */}
        <div>
          <label className="font-semibold">Genre</label>
          <input
            type="text"
            name="genre"
            value={movieData.genre}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="Sci-Fi"
            required
          />
        </div>

        {/* Release Year */}
        <div>
          <label className="font-semibold">Release Year</label>
          <input
            type="number"
            name="releaseYear"
            value={movieData.releaseYear}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="2010"
            required
          />
        </div>

        {/* Director */}
        <div>
          <label className="font-semibold">Director</label>
          <input
            type="text"
            name="director"
            value={movieData.director}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="Christopher Nolan"
          />
        </div>

        {/* Cast */}
        <div>
          <label className="font-semibold">Cast</label>
          <input
            type="text"
            name="cast"
            value={movieData.cast}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="Leonardo DiCaprio, Joseph Gordon-Levitt"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="font-semibold">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            value={movieData.rating}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="8.8"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label className="font-semibold">Duration (minutes)</label>
          <input
            type="number"
            name="duration"
            value={movieData.duration}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="148"
          />
        </div>

        {/* Plot Summary */}
        <div>
          <label className="font-semibold">Plot Summary</label>
          <textarea
            name="plotSummary"
            value={movieData.plotSummary}
            onChange={handleChange}
            className="textarea textarea-bordered w-full mt-1"
            placeholder="A thief who steals corporate secrets..."
            rows="4"
          ></textarea>
        </div>

        {/* Poster URL */}
        <div>
          <label className="font-semibold">Poster URL</label>
          <input
            type="text"
            name="posterUrl"
            value={movieData.posterUrl}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="https://shorturl.at/XdLbB"
          />
        </div>

        {/* Language */}
        <div>
          <label className="font-semibold">Language</label>
          <input
            type="text"
            name="language"
            value={movieData.language}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="English"
          />
        </div>

        {/* Country */}
        <div>
          <label className="font-semibold">Country</label>
          <input
            type="text"
            name="country"
            value={movieData.country}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
            placeholder="USA"
          />
        </div>

        {/* Added By */}
        <div>
          <label className="font-semibold">Added By</label>
          <input
            type="email"
            name="addedBy"
            value={email}
            readOnly
            className="input input-bordered w-full mt-1 light:bg-gray-200 dark:bg-gray-800 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary w-full mt-4"
        >
          Add Movie
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddMovie;
