import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const haveToken = !!token;

  const [auth, setAuth] = useState(haveToken);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const handleLogin = async ({ email, password }) => {
    const payload = { email, password };

    try {
      setLoading(true);
      const { data } = await api.post("/sessions", payload);

      setAuth(true);

      localStorage.setItem("token", `Bearer ${data.token}`);

      setLoading(false);
      navigate("/home");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Algo de errado aconteceu");
      }
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setAuth(false);
    setUser({});
    localStorage.setItem("token", "");
    navigate("/");
  };

  console.log(user);

  const handleGetMyInfos = async () => {
    const { data } = await api.get("/users/my-infos", {
      headers: {
        Authorization: token,
      },
    });

    if (!!token) {
      setUser({ token, resUser: data });
    }
  };

  useEffect(() => {
    if (auth) {
      handleGetMyInfos();
    }
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, handleLogin, handleLogout, user, setUser, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
