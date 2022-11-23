import React from "react";
import styles from "./style.module.css";

export const CartTotal = ({ cartTotal, clearCard }) => {
  return (
    <div className={`${styles.cartTotal} bg-color-gray-0`}>
      <div>
        <h4 className="text-bold color-gray-100">Total</h4>
        <span className="text-bold color-gray-50">{cartTotal}</span>
      </div>
      <button
        onClick={clearCard}
        className="btn btn-default text-bold bg-color-gray-20 color-gray-50"
      >
        Remover todos
      </button>
    </div>
  );
};
