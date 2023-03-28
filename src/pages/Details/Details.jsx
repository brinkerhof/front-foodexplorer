import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiMinus, FiPlus, FiChevronLeft } from "react-icons/fi";

import currencyFormater from "../../utils/currencyFormater";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Ingredient from "../../components/Ingredient";
import { api } from "../../services/api";

import receipt from "../../assets/receipt.svg";

import {
  Container,
  Main,
  Ingredients,
  ButtonBack,
  Content,
  Info,
} from "./styles";
import { useOrderContext } from "../../providers/orders";

const Details = () => {
  const [plate, setPlate] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const { handleAddPlateOrder } = useOrderContext;
  const params = useParams();

  const getPlateIngredients = async () => {
    try {
      const { data } = await api.get(`/plates/${params.id}/ingredients`);
      setIngredients(data);
    } catch (error) {}
  };

  const getPlate = async () => {
    try {
      const { data } = await api.get("/plates");
      setPlate(data);
    } catch (error) {}
  };

  useEffect(() => {
    getPlate();
    getPlateIngredients();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <ButtonBack>
          <Link to="/">
            <FiChevronLeft size={30} />
            Voltar
          </Link>
        </ButtonBack>
        <Main>
          <div>
            <img src={plate.image} />
          </div>
          <div>
            <h1>{plate.name}</h1>
            <p>{plate.description}</p>
            <Ingredients>
              {ingredients.map((ingredient) => (
                <Ingredient
                  key={String(ingredient.id)}
                  ingredient={ingredient.name}
                />
              ))}
            </Ingredients>
            <Info>
              <strong>R$ {currencyFormater(plate.price)}</strong>
              <div>
                <Button
                  title="incluir"
                  image={receipt}
                  onClick={() => handleAddPlateOrder(plate)}
                />
              </div>
            </Info>
          </div>
        </Main>
      </Content>
      <Footer />
    </Container>
  );
};

export default Details;
