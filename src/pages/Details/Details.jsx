import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { api } from "../../services/api";
import plateHolder from "../../assets/plateHolder.png"
import {IoReceiptOutline} from "react-icons/io5"

import {
  Container,
  Content,
} from "./styles";
import { useOrderContext } from "../../providers/orders";
import { useAuthContext } from "../../providers/auth";
import Ingredient from "../../components/Ingredient";

const Details = () => {
  const [plate, setPlate] = useState({});
  const { handleAddPlateOrder } = useOrderContext();
  const params = useParams();
  const { user } = useAuthContext();

  const imageURL = plate.image ?`${api.defaults.baseURL}/files/${plate.image}`: plateHolder

  const getPlate = async () => {
    try {
      const { data } = await api.get(`/plates/${params.id}`);
      console.log(data)
      setPlate(data);

    } catch (error) {}
  };

  useEffect(() => {
    getPlate();
  }, []);

  return (
    <Container>
    <Header />

    <div className="wrapper">
      <Link to={-1}><FiChevronLeft size={25}/></Link>
    </div>

    <main>
      <Content
        isAdmin={user.user.isAdmin}
        Numberingredients={plate.ingredients?.length}
      >
        {console.log(imageURL)}
        <img src={imageURL} alt="" />
        <div>
          <h2>{plate.name}</h2>
          <p>{plate.description ? plate.description : ''}</p>

          <ul>
            {plate.ingredients &&
              plate.ingredients.map((ingredient) => (
                <Ingredient
                  key={String(ingredient.id)}
                  name={ingredient.name}
                />
              ))}
          </ul>

          <div>
            <Link to={user.user.isAdmin ? `/edit/${plate.id}` : ''}>
              <Button
                onClick={user.user.isAdmin ? () => {} : ()=>handleAddPlateOrder(plate, imageURL)}
                title={
                  user.isAdmin
                    ? 'Editar prato'
                    : 'incluir'
                }
              />
            </Link>
          </div>
        </div>
      </Content>
    </main>
    <Footer />
  </Container>
  );
};

export default Details;
