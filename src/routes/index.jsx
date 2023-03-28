import { BrowserRouter } from "react-router-dom";
import { useAuthContext } from "../providers/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { user } = useAuthContext();

  const userEmpty = Object.keys(user).length > 0;

  return (
    <BrowserRouter>{userEmpty ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};

export default Routes;
