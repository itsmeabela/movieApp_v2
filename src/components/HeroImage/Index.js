import React from "react";

import { Wrapper, Content, Text } from "./HeroImage.style";

export const HeroImage = ({ image, title, text }) => {
  //   console.log(image, title, text);
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
