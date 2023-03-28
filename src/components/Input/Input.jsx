import React from "react";
import { Container } from "./styles";

const Input = ({ label, title, ...rest }) => {
  return (
    <Container>
      <label htmlFor={label}>{title}</label>
      <input id={label} {...rest} />
    </Container>
  );
};

export default Input;
