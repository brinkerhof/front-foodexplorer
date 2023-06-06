import styled from 'styled-components';

export const Container = styled.li`
  background-color: '#192227';
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;

  padding: 4px 0.8rem;
  min-width: 6rem;
  border-radius: 5px;

  list-style: none;
`;