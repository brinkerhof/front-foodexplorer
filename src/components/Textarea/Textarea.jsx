import React from "react";

import { Container, TextareaInput } from "./styles";

const Textarea = ({ label, title, value, ...rest }) => {
  return (
    <Container>
      <label htmlFor={label}>{title}</label>
      <TextareaInput id={label} {...rest}>
        {value}
      </TextareaInput>
    </Container>
  );
};

export default Textarea;
