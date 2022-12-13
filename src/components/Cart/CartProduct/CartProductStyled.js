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

  & .btns-wrapper > button {
    background-color: transparent;
    border: none;
    height: fit-content;
    font-size: var(--font-size-6);
    padding: 0;
  }

  & .btns-wrapper > button:hover {
    text-decoration: underline;
  }

  & .btns-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .btns-wrapper > div {
    display: flex;
    align-items: center;
    border-radius: var(--radius-1);
    gap: 0.5rem;
  }

  & .btns-wrapper > div > button {
    background-color: transparent;
    border: none;
    height: fit-content;
    font-size: var(--font-size-6);
    padding: 0.5rem;
  }

  & .btns-wrapper > div > button:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
