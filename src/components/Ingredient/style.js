import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  .ingredients-wrapper {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > img {
      width: 6rem;
      height: 6rem;
    }
    > span {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    .ingredients-wrapper {
      gap: 1rem;

      > img {
        width: 2rem;
        height: 2rem;
      }
      > span {
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }
  }
`;
