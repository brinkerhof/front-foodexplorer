import React from "react";

const Input = ({ label, title, ...rest }) => {
  return (
    <Container>
      <label htmlFor={label}>{title}</label>
      <input id={label} {...rest} />
    </Container>
  );
};

export default Input;
