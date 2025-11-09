import React from "react";
import Hero from "../../components/Hero/Hero";
import MovieStatistics from "../../components/MovieStatistics/MovieStatistics";
import TopRatedMovies from "../../components/TopRatedMovies/TopRatedMovies";
import About from "../../components/About/About";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <MovieStatistics></MovieStatistics>
      <TopRatedMovies></TopRatedMovies>
      <About></About>
    </div>
  );
};

export default Home;
