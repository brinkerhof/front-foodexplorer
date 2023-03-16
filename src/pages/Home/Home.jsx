import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { api } from "../../services/api";

import cover from "../../assets/cover.png";
import { Container, Content, Slogan } from "./styles";

const Home = () => {
  const [plates, setPlates] = useState([]);
  const [search, setSearch] = useState("");

  const getPlates = async () => {
    try {
      const { data } = await api.get("/plates");
      setPlates(data);
    } catch (error) {}
  };
  useEffect(() => {
    getPlates();
  }, []);

  return (
    <Container>
      <Header search={setSearch} />
      <Content>
        <Slogan>
          <img src={cover} alt="Food floating" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Slogan>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
