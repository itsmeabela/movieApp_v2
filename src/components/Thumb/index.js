import React from "react";
//styles
import { Image } from "./Thumb.style";

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      <Image src={image} alt="movies-tumb" />
    </div>
  );
};
export default Thumb;
