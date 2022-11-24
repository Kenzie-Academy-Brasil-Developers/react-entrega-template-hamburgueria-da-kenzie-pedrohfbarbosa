import styled from "styled-components";

export const CartTotalStyled = styled.div`
  height: 8.75rem;
  padding: 1.25rem 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-gray-0);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
