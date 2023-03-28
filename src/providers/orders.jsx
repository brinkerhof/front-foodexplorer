import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";
import currencyFormater from "../utils/currencyFormater";

export const OrderContext = createContext({});

export const useOrderContext = () => useContext(OrderContext);

export const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const handleAddPlateOrder = (data) => {
    const { id, name, image, price } = data;

    const newOrder = { id, name, image, price };

    setOrders((oldValue) => [...oldValue, newOrder]);
  };

  const handleSendOrders = async () => {
    //   const payload = item
    try {
      const { data } = await api.post("/orders", orders);
    } catch (error) {}
  };

  return (
    <OrderContext.Provider
      value={{ orders, setOrders, handleSendOrders, handleAddPlateOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
