import React from "react";
import styles from "./style.module.css";
import { ButtonStyled } from "../../../styles/ButtonStyled";

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
        <ButtonStyled
          height="medium"
          handleClick={() => handleAddToCart(product)}
        >
          Adicionar
        </ButtonStyled>
      </div>
    </li>
  );
};
