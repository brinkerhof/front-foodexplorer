import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global.js";
import { AuthContextProvider } from "./auth";
import theme from "../styles/theme";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AuthContextProvider>{children}</AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Providers;
