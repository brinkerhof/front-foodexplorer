import { Route, Routes } from "react-router-dom";
import routes from "../constants/routes";
import { useAuthContext } from "../providers/auth";

export default function Pages() {
  return (
    <Routes>
      {routes.map((route) =>
        RouteValidation({
          path: route.path,
          element: <route.component />,
          isPrivate: route.isPrivate,
        })
      )}
    </Routes>
  );
}

const RouteValidation = ({ isPrivate, ...props }) => {
  const { auth } = useAuthContext();

  if (isPrivate && auth) {
    return <Route {...props} />;
  }
  if (!isPrivate) {
    return <Route {...props} />;
  }
  return null;
};
