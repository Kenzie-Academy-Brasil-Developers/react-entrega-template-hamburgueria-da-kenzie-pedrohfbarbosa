import React from "react";

export const Logo = ({ resetToAllProducts }) => {
  return (
    <div onClick={resetToAllProducts}>
      <h1>Burger Kenzie</h1>
    </div>
  );
};
