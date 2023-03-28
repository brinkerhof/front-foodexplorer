import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
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
  };

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
      value={{
        auth,
        setAuth,
        handleLogin,
        handleLogout,
        loading,
        user,
        setUser,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
