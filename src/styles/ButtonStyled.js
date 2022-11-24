import styled, { css } from "styled-components";
import { Button } from "./components/Button";

export const ButtonStyled = styled(Button)`
  cursor: pointer;
  border-radius: var(--radius-1);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  font-weight: 600;
  font-size: var(--font-size-5);

  color: ${(props) =>
    props.color ? `var(--color-${props.color})` : "var(--color-white)"};

  background-color: ${(props) =>
    props.bg ? `var(--color-${props.bg})` : "var(--color-primary)"};

  height: ${(props) => (props.height === "medium" ? "2.5rem" : "3.75rem")};

  width: ${(props) => (props.width ? props.width : "fit-content")};

  ${(props) =>
    props.position &&
    css`
      position: absolute;
      right: 0.5rem;
    `};

  &:hover {
    opacity: 0.7;
  }

  ${(props) =>
    props.hover &&
    css`
      &:hover {
        background-color: ${(props) =>
          props.bgHover
            ? `var(--color-${props.bgHover})`
            : "var(--color-primary)"};
        color: ${(props) =>
          props.colorHover
            ? `var(--color-${props.colorHover})`
            : "var(--color-white)"};
        opacity: 1;
      }
    `}
`;
