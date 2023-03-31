import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const OrderContext = createContext({});

export const useOrderContext = () => useContext(OrderContext);

export const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  const handleAddPlateOrder = (data, image) => {
    const { id, name, price } = data;

    const newOrder = { id, name, image, price };

    setOrders((oldValue) => [...oldValue, newOrder]);
  };

  const handleRemovePlateFromOrder = (itemIndex) => {
    const itemsWithoutItem = orders.filter(
      (order, index) => index !== itemIndex
    );
    setOrders(itemsWithoutItem);
  };

  const handleSendOrders = async () => {
    //   const payload = item
    try {
      await api.post("/orders", orders, {
        headers: {
          Authorization: token,
        },
      });
      alert("Order created");
      window.location.reload(false);
    } catch (error) {}
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
        handleSendOrders,
        handleAddPlateOrder,
        handleRemovePlateFromOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
