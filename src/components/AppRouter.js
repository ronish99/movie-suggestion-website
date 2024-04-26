import React from "react";
import { Route, Routes } from "react-router-dom"; // Remove BrowserRouter import

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieList from "./Lists/MovieList";
import AnimeList from "./Lists/AnimeList";
import TVSeries from "./Lists/TVShowList";
import MovieDetail from "./pages/MovieDetail";
import AnimeDetail from "./pages/AnimeDetail";
import TVShowDetail from "./pages/TVShowDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movielist" element={<MovieList />} />
      <Route path="/animelist" element={<AnimeList />} />
      <Route path="/serieslist" element={<TVSeries />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/anime/:id" element={<AnimeDetail />} />
      <Route path="/show/:id" element={<TVShowDetail />} />
    </Routes>
  );
};

export default AppRouter;
