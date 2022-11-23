import React from "react";
import { Product } from "./Product";
import styles from "./style.module.css";

export const ProductsList = ({
  filteredWord,
  products,
  filteredProducts,
  handleAddToCart,
}) => {
  return (
    <main className={styles.main}>
      {filteredWord && (
        <h2 className="title title-1 color-gray-100">
          Resultados para:{" "}
          <span className="title title-1 color-gray-50">{filteredWord}</span>
        </h2>
      )}
      <ul className={styles.productsList}>
        {filteredProducts
          ? filteredProducts.map((e) => (
              <Product
                key={e.id}
                product={e}
                image={e.img}
                name={e.name}
                category={e.category}
                price={e.price}
                handleAddToCart={handleAddToCart}
              />
            ))
          : products.map((e) => (
              <Product
                key={e.id}
                product={e}
                image={e.img}
                name={e.name}
                category={e.category}
                price={e.price}
                handleAddToCart={handleAddToCart}
              />
            ))}
      </ul>
    </main>
  );
};
