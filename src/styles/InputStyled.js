import styled from "styled-components";
import { Input } from "./components/Input";

export const InputStyled = styled(Input)`
  outline: none;
  height: 3.75rem;
  border-radius: var(--radius-1);
  border: 1px solid var(--color-gray-20);
  padding: 0 0.625rem 0 1.25rem;
  color: var(--color-gray-50);
  font-size: var(--font-size-4);
  width: 100%;

  &::placeholder {
    color: var(--color-gray-20);
    font-size: var(--font-size-4);
  }

  &:focus {
    border-color: var(--color-gray-100);
  }

  &:focus::placeholder {
    color: var(--color-gray-50);
  }
`;
