import React from "react";
import { Product } from "./Product";
import { ProductsListStyled } from "./ProductsListStyled";
import { HeadingTwo } from "../../styles/Typography";
import { Text } from "../../styles/Typography";

export const ProductsList = ({
  filteredWord,
  products,
  filteredProducts,
  handleAddToCart,
}) => {
  return (
    <ProductsListStyled>
      {filteredWord && (
        <HeadingTwo>
          Resultados para:{" "}
          <Text fontWeight="700" fontSize="2" color="gray-50">
            {filteredWord}
          </Text>
        </HeadingTwo>
      )}
      <ul>
        {filteredProducts
          ? filteredProducts
              .filter((e) => e.name)
              .map((e) => (
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
          : products
              .filter((e) => e.name)
              .map((e) => (
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
    </ProductsListStyled>
  );
};
