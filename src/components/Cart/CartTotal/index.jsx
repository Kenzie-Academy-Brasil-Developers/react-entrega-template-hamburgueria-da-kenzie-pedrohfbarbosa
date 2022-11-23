import React from "react";
import styles from "./style.module.css";
import { ButtonStyled } from "../../../styles/ButtonStyled";

export const CartTotal = ({ cartTotal, clearCard }) => {
  return (
    <div className={`${styles.cartTotal} bg-color-gray-0`}>
      <div>
        <h4 className="text-bold color-gray-100">Total</h4>
        <span className="text-bold color-gray-50">{cartTotal}</span>
      </div>
      <ButtonStyled
        handleClick={clearCard}
        height
        width="100%"
        color="gray-50"
        bg="gray-20"
      >
        Remover todos
      </ButtonStyled>
    </div>
  );
};
