import styled from "styled-components";

export const HeadingOne = styled.h1`
  font-weight: 700;
  font-size: var(--font-size-1);
  color: ${(props) =>
    props.color ? `var(--color-${props.color})` : "var(--color-gray-100)"};
`;

export const HeadingTwo = styled.h2`
  font-weight: 700;
  font-size: var(--font-size-2);
  color: ${(props) =>
    props.color ? `var(--color-${props.color})` : "var(--color-gray-100)"};
`;

export const HeadingThree = styled.h3`
  font-weight: 700;
  font-size: var(--font-size-3);
  color: ${(props) =>
    props.color ? `var(--color-${props.color})` : "var(--color-gray-100)"};
`;

export const HeadingFour = styled.h4`
  font-weight: 700;
  font-size: var(--font-size-5);
  color: ${(props) =>
    props.color ? `var(--color-${props.color})` : "var(--color-gray-100)"};
`;

export const Text = styled.span`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};

  font-size: ${(props) =>
    props.fontSize
      ? `var(--font-size-${props.fontSize})`
      : "var(--font-size-4)"};

  color: ${(props) =>
    props.color ? `var(--color-${props.color})` : "var(--color-gray-100)"};
`;
