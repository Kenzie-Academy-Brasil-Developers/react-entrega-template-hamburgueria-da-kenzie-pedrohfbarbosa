import React from "react";
import { Product } from "./Product";

export const ProductsList = ({
  filteredWord,
  products,
  filteredProducts,
  handleAddToCart,
}) => {
  return (
    <main>
      {filteredWord && <h2>Busca por: {filteredWord}</h2>}
      <ul>
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
