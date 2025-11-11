import React, { use, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import MovieStatistics from "../../components/MovieStatistics/MovieStatistics";
import TopRatedMovies from "../../components/TopRatedMovies/TopRatedMovies";
import About from "../../components/About/About";
import RecentlyAddedMovies from "../../components/RecentlyAddedMovies/RecentlyAddedMovies";
import GenreSection from "../../components/GenreSection/GenreSection";
import { AuthContext } from "../../contexts/AuthContext";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

const Home = () => {
  const { loading } = use(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  return (
    <div>
      <Hero></Hero>
      <div className="md:mx-10 mx-5">
        <MovieStatistics></MovieStatistics>
        <TopRatedMovies></TopRatedMovies>
        <RecentlyAddedMovies></RecentlyAddedMovies>
        <GenreSection></GenreSection>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
