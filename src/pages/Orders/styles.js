import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  max-width: 136.8rem;
  padding-inline: 4rem;
  margin-inline: auto;
  > div {
    padding-top: 3.4rem;
    width: 100%;
    p {
      padding-bottom: 2rem;
    }

    h3 {
      font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
      margin-bottom: 3rem;
    }

    .section-order {
      height: 40rem;
      padding-right: 4rem;
      overflow-y: auto;
      width: max-content;
    }

    .result {
      font-size: 2rem;
      margin-top: 1rem;
    }
    .div-Button {
      width: 170px;
      max-width: 170px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding-inline: 12.3rem;
    justify-content: space-between;
    width: 100%;
  }
`;
