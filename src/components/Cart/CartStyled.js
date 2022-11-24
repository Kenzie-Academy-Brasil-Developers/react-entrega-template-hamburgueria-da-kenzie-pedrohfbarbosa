import styled from "styled-components";

export const CartStyled = styled.aside`
  width: 100%;
  max-width: 22.6875rem;

  & .cartTitle {
    height: 4.0625rem;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    background-color: var(--color-primary);
    justify-content: center;
  }

  & .emptyCart {
    height: 9.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: var(--color-gray-0);
  }

  & .cartProducts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 20.1875rem;
    overflow-y: auto;
    border-bottom: 2px solid var(--color-gray-20);
    padding: 1.25rem 0.625rem;
    background-color: var(--color-gray-0);
  }
`;
