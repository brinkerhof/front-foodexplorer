import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  > img {
    width: 7.2rem;
    height: 7.2rem;
  }
  .ingredient-name {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  @media (max-width: 768px) {
    gap: 1rem;
    .ingredients-wrapper {
      gap: 1rem;

      > img {
        width: 5rem;
        height: 5rem;
      }
      > span {
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }
  }
`;
