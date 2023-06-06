import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const haveToken = !!token;
  if (token) {
    api.defaults.headers.common['Authorization'] = `${token}`;
  }
  const [auth, setAuth] = useState(haveToken);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const handleLogin = async ({ email, password }) => {
    const payload = { email, password };

    try {
      setLoading(true);
      const { data } = await api.post("/sessions", payload);
      const {user, token} = data

      user.isAdmin = user.isAdmin === 1

      setAuth(true);

      localStorage.setItem("token", `Bearer ${token}`);

      setLoading(false);
    } catch (error) {
      if (error.response) {
        alert("Algo de errado aconteceu");
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
    const { data } = await api.get("/users/my-infos");

    if (!!token) {
      setUser({ token, user: data.user });
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
