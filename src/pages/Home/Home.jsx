import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { api } from "../../services/api";

import cover from "../../assets/cover.png";
import { Container, Content, Slogan } from "./styles";
import Section from "../../components/Section";
import Card from "../../components/Card/";
import Loading from "../../components/Loading";

const Home = () => {
  const [plates, setPlates] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getPlates = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await api.get(`/plates?name=${search}`);
        setPlates(data);
        setLoading(false);
      }, 3000);
    } catch (error) {}
  };

  useEffect(() => {
    getPlates();
  }, [search]);

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
        {plates.filter((plate) => plate.category == "salgados").length > 0 && (
          <Section title="Salgados">
            {plates
              .filter((plate) => plate.category == "salgados")
              .map((plate) => (
                <Card key={String(plate.id)} data={plate} />
              ))}
          </Section>
        )}
        {loading && <Loading />}
        {plates.filter((plate) => plate.category == "doces").length > 0 && (
          <Section title="Doces">
            {plates
              .filter((plate) => plate.category == "doces")
              .map((plate) => (
                <Card key={String(plate.id)} data={plate} />
              ))}
          </Section>
        )}
        {plates.filter((plate) => plate.category == "bebidas").length > 0 && (
          <Section title="Bebidas">
            {plates
              .filter((plate) => plate.category == "bebidas")
              .map((plate) => (
                <Card key={String(plate.id)} data={plate} />
              ))}
          </Section>
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
