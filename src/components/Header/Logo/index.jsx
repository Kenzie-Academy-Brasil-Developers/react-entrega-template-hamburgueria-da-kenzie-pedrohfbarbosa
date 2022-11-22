import React from "react";
import styles from "./style.module.css";

export const Logo = ({ resetToAllProducts }) => {
  return (
    <div className={styles.logo} onClick={resetToAllProducts}>
      <h1 className="title title-1 color-gray-100">
        Burger <span className="title title-3 color-secondary">Kenzie</span>
      </h1>
    </div>
  );
};
