import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};
export default Thumb;
