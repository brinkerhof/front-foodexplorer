import React from "react";
import ReactDOM from "react-dom/client";
import Pages from "./pages";
import Providers from "./providers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <Pages />
    </Providers>
  </React.StrictMode>
);
