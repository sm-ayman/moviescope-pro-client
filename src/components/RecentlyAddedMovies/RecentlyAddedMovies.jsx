import React from "react";

const recentlyAddedMovies = [
  {
    id: 1,
    title: "Dune",
    poster: "https://m.media-amazon.com/images/I/91EJ7+GQvIL._AC_SY679_.jpg",
  },
  {
    id: 2,
    title: "No Time to Die",
    poster: "https://m.media-amazon.com/images/I/81eE1lB4JwL._AC_SY679_.jpg",
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    poster: "https://m.media-amazon.com/images/I/71b7LMJvJvL._AC_SY679_.jpg",
  },
  {
    id: 4,
    title: "The Batman",
    poster: "https://m.media-amazon.com/images/I/81H1W2z3Y3L._AC_SY679_.jpg",
  },
  {
    id: 5,
    title: "Doctor Strange in the Multiverse of Madness",
    poster: "https://m.media-amazon.com/images/I/81B+uFZY+NL._AC_SY679_.jpg",
  },
  {
    id: 6,
    title: "Thor: Love and Thunder",
    poster: "https://m.media-amazon.com/images/I/81r+Vhft9rL._AC_SY679_.jpg",
  },
];

const RecentlyAddedMovies = () => {
  return (
    <section className="w-full py-16 bg-base-100 text-base-content transition-all">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-10 text-center">
          Recently Added Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentlyAddedMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-base-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg md:text-xl font-semibold">
                  {movie.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedMovies;
