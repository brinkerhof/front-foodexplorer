import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Form } from "./styles";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = ({ name, email, password }) => {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    if (password.length < 6) {
      return alert("A senha deve conter no mínimo 6 caracteres!");
    }
    setLoading(true);
    const payload = { name, email, password };
    api
      .post("/users/", payload)
      .then(() => {
        alert("Usuario cadastrado");
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
        setLoading(false);
      });
  };
  return (
    <Container>
      <div>
        <svg
          width="44"
          height="48"
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z"
            fill="#065E7C"
          />
        </svg>
        <h1>food explorer</h1>
      </div>

      <Form></Form>
    </Container>
  );
};

export default Register;
