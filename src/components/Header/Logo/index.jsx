import React from "react";
import { LogoStyled } from "./LogoStyled";
import { HeadingOne } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";

export const Logo = ({ resetToAllProducts }) => {
  return (
    <LogoStyled onClick={resetToAllProducts}>
      <HeadingOne>
        Burger{" "}
        <Text fontWeight="700" fontSize="3" color="secondary">
          Kenzie
        </Text>
      </HeadingOne>
    </LogoStyled>
  );
};
