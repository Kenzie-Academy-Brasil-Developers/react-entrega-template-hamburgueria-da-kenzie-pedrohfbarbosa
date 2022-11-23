import React from "react";
import { HeaderStyled } from "./HeaderStyled";
import { Logo } from "./Logo";
import { InputSearch } from "./InputSearch";
import { Container } from "../../styles/Container";

export const Header = ({ resetToAllProducts, handleSearch }) => {
  return (
    <HeaderStyled>
      <Container>
        <Logo resetToAllProducts={resetToAllProducts} />
        <InputSearch handleSearch={handleSearch} />
      </Container>
    </HeaderStyled>
  );
};
