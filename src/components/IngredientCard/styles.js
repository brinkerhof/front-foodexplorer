import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  height: 3.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : `${theme.COLORS.GRAY_500}`};

  outline: none;

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : 'none'};

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  > button {
    background: none;
    > svg {
      width: 100%;
      height: 100%;
      color: ${({ theme, isNew }) =>
        !isNew ? `${theme.COLORS.WHITE}` : `${theme.COLORS.GRAY_500}`};
      &:hover {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
  }
`;