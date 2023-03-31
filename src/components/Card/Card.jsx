import React, { useState } from "react";
import { useAuthContext } from "../../providers/auth";
import Button from "../Button";

import { FaAngleRight, FaTrashAlt } from "react-icons/fa";

import { Container } from "./styles";
import { useOrderContext } from "../../providers/orders";
import currencyFormater from "../../utils/currencyFormater";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Card = ({ data, ...rest }) => {
  const { user } = useAuthContext();

  const { handleAddPlateOrder } = useOrderContext();
  const navigate = useNavigate();

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`;

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }
  function handleEditDish(id) {
    navigate(`/edit/${id}`);
  }

  async function handleRemovePlate() {
    await api.delete(`/plates/${data.id}`);
    location.reload();
  }
  return (
    <Container {...rest}>
      {!!user.isAdmin ? (
        <button onClick={() => handleRemovePlate(data.id)}>
          <FaTrashAlt size={25} />
        </button>
      ) : null}

      <div>
        <img src={imageURL} alt={data.title} />
      </div>

      <a
        type="button"
        onClick={
          !!user.isAdmin
            ? () => handleEditDish(data.id)
            : () => handleDetails(data.id)
        }
      >
        <h3>
          {data.name} <FaAngleRight />
        </h3>
      </a>

      <p>{data.description}</p>
      <strong>{currencyFormater(data.price)}</strong>
      {!!user.isAdmin ? (
        <div></div>
      ) : (
        <div>
          <Button title="incluir" onClick={() => handleAddPlateOrder(data)} />
        </div>
      )}
    </Container>
  );
};

export default Card;
