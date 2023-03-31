import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

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
  AllIngredientCards,
  ButtonBack,
  Content,
  Info,
} from "./styles";
import { useOrderContext } from "../../providers/orders";
import { useAuthContext } from "../../providers/auth";

const Details = () => {
  const [plate, setPlate] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const { handleAddPlateOrder } = useOrderContext();
  const params = useParams();
  const { user } = useAuthContext();

  const imageURL = plate && `${api.defaults.baseURL}/files/${plate.image}`;

  const getPlateIngredients = async () => {
    try {
      const { data } = await api.get(`/plates/${params.id}`);
      setPlate(data);
      setIngredients(data.ingredients);
    } catch (error) {}
  };
  function handleEditDish(id) {
    navigate(`/edit/${id}`);
  }

  useEffect(() => {
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
        {plate && (
          <Main>
            <div>
              <img src={imageURL} />
            </div>
            <div>
              <h1>{plate.name}</h1>
              <p>{plate.description}</p>
              <AllIngredientCards>
                {ingredients.map((ingredient) => (
                  <Ingredient
                    key={String(ingredient.id)}
                    ingredient={ingredient.name}
                  />
                ))}
              </AllIngredientCards>
              <Info>
                <strong>{currencyFormater(plate.price)}</strong>
                {!user.isAdmin ? (
                  <div>
                    <Button
                      title="Incluir"
                      onClick={() => handleAddPlateOrder(plate, imageURL)}
                    />
                  </div>
                ) : (
                  <Button
                    title="Editar prato"
                    onClick={() => handleEditDish(plate.id)}
                  />
                )}
              </Info>
            </div>
          </Main>
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default Details;
