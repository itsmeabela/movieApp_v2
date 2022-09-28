import React from "react";
import { useParams } from "react-router-dom";
//consfig
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
//images
import NoImage from "../images/no_image.jpg";
//hook
import { useMovieFetch } from "../Hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie);
  console.log(loading);
  if (loading) return <Spinner />;
  if (error) return <div>Something went Wrong...</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
    </>
  );
};

export default Movie;
