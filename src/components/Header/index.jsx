import React from "react";
import { Logo } from "./Logo";
import { InputSearch } from "./InputSearch";
import styles from "./style.module.css";

export const Header = ({ resetToAllProducts, handleSearch }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Logo resetToAllProducts={resetToAllProducts} />
        <InputSearch handleSearch={handleSearch} />
      </div>
    </header>
  );
};
