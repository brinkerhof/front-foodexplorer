import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiLogOut, FiMenu, FiX } from "react-icons/fi";

import header from "../../assets/header.svg";
import receipt from "../../assets/receipt.svg";

import { useAuthContext } from "../../providers/auth";

import {
  Container,
  Content,
  Logo,
  Nav,
  NewPlate,
  Search,
  Button,
  Logout,
} from "./styles";

const Header = (search) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const { handleLogout, user } = useAuthContext();
  const { orders } = useOrderContext();

  const navigate = useNavigate();

  const handleGoToOrders = () => {
    navigate("/orders");
  };
  const handleGoToHome = () => {
    navigate("/home");
  };
  const handleNewPlate = () => {
    navigate("/new");
  };
  return (
    <Container>
      <Content>
        <Logo onClick={handleGoToHome}>
          <img src={header} alt="polígono azul" />
          <strong>food explorer</strong>
        </Logo>

        <Nav isVisible={menuIsVisible}>
          {user.isAdmin ? (
            <NewPlate onClick={handleNewPlate}>+ Adicionar novo prato</NewPlate>
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
            <Button type="button" onClick={handleGoToOrders}>
              <img src={receipt} alt="receipt" />
              pedidos<span>({orders.length})</span>
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleGoToCart}
              disabled={isCartIsEmpty}
            >
              <img src={receipt} alt="receipt" />
              Meu pedido <span>({cart.length})</span>
            </Button>
          )}

          <Logout onClick={handleLogout}>
            <FiLogOut />
          </Logout>
        </Nav>

        <button type="button" onClick={() => setMenuIsVisible(!menuIsVisible)}>
          {menuIsVisible ? <FiX /> : <FiMenu />}
        </button>
      </Content>
    </Container>
  );
};

export default Header;
