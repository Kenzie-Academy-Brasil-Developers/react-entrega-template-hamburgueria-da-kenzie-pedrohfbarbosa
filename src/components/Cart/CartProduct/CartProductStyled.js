import styled from "styled-components";

export const CartProductStyled = styled.li`
  padding: 0.5rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  border: 1px solid transparent;
  border-radius: var(--radius-2);
  transition: all 0.5s ease;

  &:hover {
    border-color: var(--color-gray-20);
  }

  & > figure {
    height: 5rem;
    min-height: 5rem;
    width: 5rem;
    min-width: 5rem;
    overflow: hidden;
    object-fit: cover;
    background-color: var(--color-gray-20);
    border-radius: var(--radius-2);
  }

  & > figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & button {
    background-color: transparent;
    border: none;
    height: fit-content;
    font-size: var(--font-size-6);
    padding: 0;
  }

  & button:hover {
    text-decoration: underline;
  }
`;
