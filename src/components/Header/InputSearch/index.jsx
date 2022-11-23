import React, { useState } from "react";
import styles from "./style.module.css";

export const InputSearch = ({ handleSearch }) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputSearch);
    setInputSearch("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInputSearch(e.target.value)}
        name="inputSearch"
        type="text"
        placeholder="Digitar pesquisa"
        className="input-search"
        value={inputSearch}
      />
      <button
        className="btn btn-medium bg-color-primary text-bold color-gray-0"
        type="submit"
      >
        Pesquisar
      </button>
    </form>
  );
};
