import React from "react";
import { Link } from "react-router-dom";
//images
import RMDBLogo from "../../images/two_face.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
//styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="RMDB-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);
export default Header;
