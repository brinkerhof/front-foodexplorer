import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  input {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    padding: 1.2rem 1.4rem;
    border: none;
    border-radius: 0.8rem;
    transition: outline 300ms;

    &:disabled {
      cursor: not-allowed;
    }
    &:focus {
      outline: 2px solid ${({ theme }) => theme.COLORS.CAKE_200};
    }
    

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;