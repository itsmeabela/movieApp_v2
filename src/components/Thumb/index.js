import React from "react";
import { Link } from "react-router-dom";
//styles
import { Image } from "./Thumb.style";

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movies-tumb" />
        </Link>
      ) : (
        <Image src={image} alt="movies-tumb" />
      )}
    </div>
  );
};
export default Thumb;
