import React from "react";

const MovieCard = ({ movie }) => {
  const { title, posterUrl, genre, releaseYear, rating, duration, director } =
    movie;

  return (
    <div className="bg-base-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition transform cursor-pointer">
      {/* Movie Poster */}
      <img src={posterUrl} alt={title} className="w-full h-64 object-cover" />

      {/* Movie Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Genre:</span> {genre}
        </p>

        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Release Year:</span> {releaseYear}
        </p>

        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Director:</span> {director}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-medium text-yellow-400">
            ⭐ {rating}
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {duration} min
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
