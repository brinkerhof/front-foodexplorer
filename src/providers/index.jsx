import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global.js";
import { AuthContextProvider } from "./auth";
import theme from "../styles/theme";
import Routes from "../routes/index.jsx";
import { OrderContextProvider } from "./orders.jsx";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthContextProvider>
        <OrderContextProvider>
          <Routes />
        </OrderContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
