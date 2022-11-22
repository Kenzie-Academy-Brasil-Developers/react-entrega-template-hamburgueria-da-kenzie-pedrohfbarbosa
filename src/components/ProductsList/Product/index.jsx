import React from "react";

export const Product = ({
  image,
  name,
  category,
  price,
  handleAddToCart,
  product,
}) => {
  return (
    <li>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
        <button onClick={() => handleAddToCart(product)}>Adicionar</button>
      </div>
    </li>
  );
};
