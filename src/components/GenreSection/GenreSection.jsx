import React from "react";
import { FaFilm, FaLaugh, FaHeart, FaRobot, FaGhost } from "react-icons/fa";

const genres = [
  { id: 1, name: "Action", icon: <FaFilm />, color: "text-red-500" },
  { id: 2, name: "Drama", icon: <FaHeart />, color: "text-blue-500" },
  { id: 3, name: "Comedy", icon: <FaLaugh />, color: "text-yellow-400" },
  { id: 4, name: "Sci-Fi", icon: <FaRobot />, color: "text-purple-500" },
  { id: 5, name: "Horror", icon: <FaGhost />, color: "text-base-content" },
  { id: 6, name: "Romance", icon: <FaHeart />, color: "text-pink-500" },
];

const GenreSection = () => {
  return (
    <section className="w-full py-16 bg-base-100 text-base-content transition-all">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-10 text-center">
          Movie Genres
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="flex flex-col items-center justify-center gap-2 bg-base-200 rounded-xl py-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <div className={`text-3xl ${genre.color}`}>{genre.icon}</div>
              <span className="font-semibold">{genre.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreSection;
