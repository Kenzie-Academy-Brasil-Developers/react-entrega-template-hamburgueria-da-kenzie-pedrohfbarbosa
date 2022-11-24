import styled from "styled-components";

export const ProductStyled = styled.li`
  width: 18.75rem;
  height: 21.625rem;
  border-radius: var(--radius-2);
  border: 2px solid var(--color-gray-0);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  &:hover {
    border-color: var(--color-gray-100);
  }

  & figure {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 44%;
    background-color: var(--color-gray-0);
    overflow: hidden;
    object-fit: cover;
  }

  & figure img {
    object-fit: cover;
  }

  & div {
    width: 100%;
    height: 56%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    justify-content: space-between;
  }
`;
