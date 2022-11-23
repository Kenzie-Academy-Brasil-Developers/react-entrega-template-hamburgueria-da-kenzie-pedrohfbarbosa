import React from "react";
import styles from "./style.module.css";
import { ButtonStyled } from "../../../styles/ButtonStyled";

export const CartProduct = ({
  image,
  name,
  category,
  handleRemoveFromCart,
  id,
}) => {
  return (
    <li className={styles.cartProduct}>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <div>
          <h3 className="title title-4 color-gray-100">{name}</h3>
          <span className="text text-3 color-gray-50">{category}</span>
        </div>
        <ButtonStyled
          color="gray-100"
          handleClick={() => handleRemoveFromCart(id)}
        >
          Remover
        </ButtonStyled>
      </div>
    </li>
  );
};
