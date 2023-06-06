import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  > svg {
    font-size: 3rem;
  }
`;