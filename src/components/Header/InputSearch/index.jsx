import React, { useState } from "react";

export const InputSearch = ({ handleSearch }) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputSearch);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInputSearch(e.target.value)}
        name="inputSearch"
        type="text"
        placeholder="Digitar pesquisa"
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
};
