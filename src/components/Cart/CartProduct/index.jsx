import React from "react";

export const CartProduct = ({
  image,
  name,
  category,
  handleRemoveFromCart,
  id
}) => {
  return (
    <li>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <h3>{name}</h3>
        <span>{category}</span>
      </div>
      <button onClick={() => handleRemoveFromCart(id)}>Remover</button>
    </li>
  );
};
