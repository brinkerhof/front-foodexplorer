import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../providers/auth";
import Button from "../Button";

import { FaAngleRight, FaTrashAlt } from "react-icons/fa";

import { Container } from "./styles";
import { useOrderContext } from "../../providers/orders";
import currencyFormater from "../../utils/currencyFormater";

const Card = ({ data, ...rest }) => {
  const { user } = useAuthContext();

  const { handleAddPlateOrder } = useOrderContext();

  const navigate = useNavigate();

  function handleDetails(id) {
    console.log("Details");
  }

  function handleEditPlate(id) {
    console.log("editPlate");
  }

  async function handleRemovePlate() {
    await api.delete(`/plates/${data.id}`);
    location.reload();
  }
  return (
    <Container {...rest}>
      {user.isAdmin ? (
        <button onClick={() => handleRemovePlate(data.id)}>
          <FaTrashAlt size={25} />
        </button>
      ) : null}

      <div>
        <img src={data.image} alt={data.title} />
      </div>

      <a
        type="button"
        onClick={
          user.isAdmin
            ? () => handleEditPlate(data.id)
            : () => handleDetails(data.id)
        }
      >
        <h3>
          {data.name} <FaAngleRight />
        </h3>
      </a>

      <p>{data.description}</p>
      <strong>{currencyFormater(data.price)}</strong>
      {user.isAdmin ? (
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
