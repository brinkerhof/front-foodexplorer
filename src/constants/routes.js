import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
  { name: "home", path: "/home", isPrivate: true, component: Home },
  { name: "login", path: "/", isPrivate: false, component: Login },
  {
    name: "register",
    path: "/register",
    isPrivate: false,
    component: Register,
  },
];

export default routes;
