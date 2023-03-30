import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Details from "../pages/Details";
import NewPlate from "../pages/NewPlate";
import Edit from "../pages/Edit";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/newplate" element={<NewPlate />} />
    </Routes>
  );
};

export default AppRoutes;
