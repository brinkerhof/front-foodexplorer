import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { api } from "../../services/api";

import { Container, Form } from "./styles";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
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

      <Form>
        <legend>Crie sua conta</legend>
        <Input
          type="text"
          label="name"
          title="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          type="email"
          label="email"
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          label="password"
          title="Senha"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
          required
        />

        <Button
          title={loading ? "Cadastrando" : "Criar conta"}
          onClick={handleRegister}
          disabled={loading}
        />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
};

export default Register;
