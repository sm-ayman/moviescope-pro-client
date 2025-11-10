import React from "react";
import { FaFilm, FaStar, FaUsers, FaBolt } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Vast Movie Library",
    description: "Access thousands of movies across all genres and eras.",
    icon: <FaFilm />,
    color: "text-primary",
  },
  {
    id: 2,
    title: "Top Ratings",
    description: "Only the highest-rated movies for quality viewing.",
    icon: <FaStar />,
    color: "text-yellow-400",
  },
  {
    id: 3,
    title: "Community",
    description: "Join a community of movie lovers and share your collections.",
    icon: <FaUsers />,
    color: "text-green-500",
  },
  {
    id: 4,
    title: "Fast Streaming",
    description: "Enjoy smooth playback with fast and reliable servers.",
    icon: <FaBolt />,
    color: "text-red-500",
  },
];

const About = () => {
  return (
    <section className="w-full py-16 bg-base-100 text-base-content transition-all">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
          About Moviescope Pro
        </h2>

        <p className="text-sm opacity-80 mb-12 md:w-2/4 mx-auto">
          Moviescope Pro is your ultimate platform to explore, track, and enjoy
          movies. Discover top-rated films, create collections, and be part of a
          passionate movie community all in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center gap-4 bg-base-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              <div className={`text-4xl ${feature.color}`}>{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="opacity-80 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
