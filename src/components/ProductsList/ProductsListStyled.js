import styled from "styled-components";

export const ProductsListStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  gap: 1rem;

  & h2 {
    align-self: flex-start;
  }

  & > ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18.75rem, auto));
    grid-gap: 1rem;
  }

  @media (max-width: 56.25rem) {
    width: 100%;

    & > ul {
      display: flex;
      align-items: center;
      overflow-x: auto;
    }
  }
`;
