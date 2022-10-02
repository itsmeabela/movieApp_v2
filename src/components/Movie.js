import React from "react";
import { useParams } from "react-router-dom";
//image
import noImage from "../images/no_image.jpg";
//consfig
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

//hook
import { useMovieFetch } from "../Hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie);
  if (loading) return <Spinner />;
  if (error) return <div>Something went Wrong...</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => {
          console.log(actor);
          return (
            <Actor
              key={actor.cast_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : noImage
              }
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Movie;
