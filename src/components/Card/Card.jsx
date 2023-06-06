import React from "react";
import { useAuthContext } from "../../providers/auth";
import Button from "../Button";
import plateHolder from "../../assets/plateHolder.png"

import {BsPencilSquare} from "react-icons/bs"

import { Container } from "./styles";
import { useOrderContext } from "../../providers/orders";
import currencyFormater from "../../utils/currencyFormater";

import { api } from "../../services/api";
import { Link } from "react-router-dom";


const Card = ({ data, ...rest }) => {
  const { user } = useAuthContext();
  const { handleAddPlateOrder } = useOrderContext();

  const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}`: plateHolder

  return (
    <Container {...rest}>
      {user.user.isAdmin ? (
        <button >
          <Link to={`/edit/${data.id}`}>
              <BsPencilSquare size={25} />
          </Link>
        </button>
      ) : null}

      <Link to={`/details/${data.id}`}>
        <img src={imageURL} alt={data.title} />
        <h3>
          {data.name}
        </h3>
        <p>{data.description}</p>
        <strong>{currencyFormater(data.price)}</strong>
      </Link>
      {!user.user.isAdmin && (
        <div>
          <Button
            title="incluir"
            onClick={() => handleAddPlateOrder(data, imageURL)}
          />
        </div>
      )}
    </Container>
  );
};

export default Card;
