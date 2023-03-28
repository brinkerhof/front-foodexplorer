import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiLogOut, FiMenu, FiX } from "react-icons/fi";

import header from "../../assets/header.svg";
import receipt from "../../assets/receipt.svg";

import { useAuthContext } from "../../providers/auth";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
  Logo,
  Nav,
  NewPlate,
  Search,
  Button,
  Logout,
} from "./styles.js";

const Header = (search) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const { handleLogout, user } = useAuthContext();

  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo>
            <img src={header} alt="polígono azul" />
            <strong>food explorer</strong>
          </Logo>
        </Link>
        <Nav isVisible={menuIsVisible}>
          {user.isAdmin ? (
            <Link to={"/new"}>
              <NewPlate>+ Adicionar novo prato</NewPlate>
            </Link>
          ) : null}

          <Search>
            {<FiSearch size={20} />}
            <input
              type="text"
              placeholder="Busque pelas opções de pratos"
              onChange={(e) => {
                search(e.target.value);
              }}
            />
          </Search>

          {user.isAdmin ? (
            <Button type="button">
              <img src={receipt} alt="receipt" />
              pedidos<span>({orders.length})</span>
            </Button>
          ) : (
            <Button type="button">
              <img src={receipt} alt="receipt" />
              Meu pedido <span></span>
            </Button>
          )}
          <Link to={"/"}>
            <Logout onClick={handleLogout}>
              <FiLogOut />
            </Logout>
          </Link>
        </Nav>

        <button type="button" onClick={() => setMenuIsVisible(!menuIsVisible)}>
          {menuIsVisible ? <FiX /> : <FiMenu />}
        </button>
      </Content>
    </Container>
  );
};

export default Header;
