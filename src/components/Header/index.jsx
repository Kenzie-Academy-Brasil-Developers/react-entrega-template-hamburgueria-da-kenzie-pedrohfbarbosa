import React from "react";
import { Logo } from "./Logo";
import { InputSearch } from "./InputSearch";

export const Header = ({resetToAllProducts, handleSearch}) => {
  return (
    <header>
      <div>
        <Logo resetToAllProducts={resetToAllProducts} />
        <InputSearch handleSearch={handleSearch} />
      </div>
    </header>
  );
};
