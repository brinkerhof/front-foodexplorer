import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuthContext } from "../../providers/auth";
import { Container, Form } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, loading } = useAuthContext();

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
        <legend>Faça login</legend>
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
          title={loading ? "Entrando" : "Entrar"}
          onClick={() => handleLogin({ email, password })}
          disabled={loading}
        />
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
};

export default Login;
