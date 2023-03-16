import React from "react";

import footer from "../../assets/footer.svg";

import { Container, Content } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Content>
        <div>
          <img src={footer} alt="Logo" />
          <span>food explorer</span>
        </div>
        <p>© 2022 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  );
};

export default Footer;
