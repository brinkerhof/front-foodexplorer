import React from "react";
import { useOrderContext } from "../../providers/orders";
import currencyFormater from "../../utils/currencyFormater";
import { Container, Content } from "./styles";

const Order = ({ data, index }) => {
  const { handleRemovePlateFromOrder } = useOrderContext();
  return (
    <Container>
      <div>
        <img src={data.image} alt="imagem do prato" />
      </div>
      <Content>
        <div>
          <span>{data.name}</span>
          <strong>{currencyFormater(data.price)}</strong>
        </div>
        <button type="button" onClick={() => handleRemovePlateFromOrder(index)}>
          Excluir
        </button>
      </Content>
    </Container>
  );
};

export default Order;
