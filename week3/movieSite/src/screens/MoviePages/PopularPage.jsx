import React from "react";
import RenderMovies from "../../components/RenderMovies";

const PopularPage = () => {
  return <RenderMovies fetchUrl='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' />;
};

export default PopularPage;
