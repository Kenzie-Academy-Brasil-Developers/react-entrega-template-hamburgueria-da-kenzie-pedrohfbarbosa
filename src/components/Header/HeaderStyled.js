import styled from "styled-components";

export const HeaderStyled = styled.header`
  min-height: 5rem;
  background-color: var(--color-gray-0);
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 56.25rem) {
    & > div {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
