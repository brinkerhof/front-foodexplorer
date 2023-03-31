import React from "react";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Order from "../../components/Order";
import { useOrderContext } from "../../providers/orders";
import currencyFormater from "../../utils/currencyFormater";
import { Container, Content } from "./styles";

const Orders = () => {
  const { orders, handleSendOrders } = useOrderContext();

  const sum = orders.reduce((value, order) => {
    return value + Number(order.price);
  }, 0);

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h3>Meu pedido</h3>
          <div className="section-order">
            {orders &&
              orders.map((item, index) => (
                <Order
                  key={`${item.id}-${String(index)}`}
                  data={item}
                  index={index}
                />
              ))}
          </div>
          <div className="result">
            <p>
              Total:<span>{currencyFormater(sum)}</span>
            </p>
          </div>
          <div className="div-Button">
            <Button
              title="Finalizar pedido"
              onClick={() => handleSendOrders()}
            />
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default Orders;
