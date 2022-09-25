import { useState, useEffect } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//components
import HeroImage from "./HeroImage/Index";
import { Grid } from "./Grid/index";
//images
import NoImage from "../images/no_image.jpg";
//custom Hook
import { useHomeFetch } from "../Hooks/useHomeFetch";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);
  return (
    <>
      {
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      }
      <Grid header={"Popular Movies"}>
        {state.results.map((movie) => {
          return <div key={movie.id}>{movie.title}</div>;
        })}
      </Grid>
    </>
  );
};
export default Home;
