import React from "react";
import { Container } from "./styles";

const Button = ({ title, image, isInvisible = false, ...rest }) => {
  return (
    <Container type="button" isInvisible={isInvisible} {...rest}>
      {image ? <img src={image} alt="ícone do botão" /> : ""}
      {title}
    </Container>
  );
};

export default Button;
