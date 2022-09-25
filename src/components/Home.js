import React from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//components
import HeroImage from "./HeroImage/Index";
import Grid from "./Grid/index";
import Thumb from "./Thumb/index";
import Spinner from "./Spinner/index";
import SearchBar from "./SearchBar/index";
//images
import NoImage from "../images/no_image.jpg";
//custom Hook
import { useHomeFetch } from "../Hooks/useHomeFetch";

const Home = () => {
  const { state, loading, error, setSearchTerm } = useHomeFetch();
  console.log(state);
  return (
    <>
      {state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={"Popular Movies"}>
        {state.results.map((movie, index) => {
          return (
            <Thumb
              key={index}
              clickable={true}
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              movieId={movie.id}
            />
          );
        })}
      </Grid>
      <Spinner />
    </>
  );
};
export default Home;
