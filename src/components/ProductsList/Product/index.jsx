import React from "react";
import styles from "./style.module.css";

export const Product = ({
  image,
  name,
  category,
  price,
  handleAddToCart,
  product,
}) => {
  return (
    <li className={styles.card}>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <h3 className="title title-3 color-gray-100">{name}</h3>
        <p className="text text-3 color-gray-50">{category}</p>
        <span className="text-bold color-primary">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
        <button
          className="btn btn-medium bg-color-primary text-bold color-gray-0"
          onClick={() => handleAddToCart(product)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
