import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detais from "../pages/Details";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detais/:id" element={<Detais />} />
    </Routes>
  );
};

export default AppRoutes;
