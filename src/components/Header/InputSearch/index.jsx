import React, { useState } from "react";
import styles from "./style.module.css";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { InputStyled } from "../../../styles/InputStyled";

export const InputSearch = ({ handleSearch }) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputSearch);
    setInputSearch("");
  };

  const handleChange = (e) => setInputSearch(e.target.value);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputStyled
        handleChange={handleChange}
        name="inputSearch"
        placeholder="Digitar pesquisa"
        value={inputSearch}
      />

      <ButtonStyled height="medium" position type="submit">
        Pesquisar
      </ButtonStyled>
    </form>
  );
};
