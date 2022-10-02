import PropTypes from "prop-types";
//style
import { Wrapper, Image } from "./Actor.style";

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="movies-tumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);
Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default Actor;
