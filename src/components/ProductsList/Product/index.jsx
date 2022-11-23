import React from "react";
import { ProductStyled } from "./ProductStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { HeadingThree } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";

export const Product = ({
  image,
  name,
  category,
  price,
  handleAddToCart,
  product,
}) => {
  return (
    <ProductStyled>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <HeadingThree>{name}</HeadingThree>
        <Text fontSize="6" color="gray-50">
          {category}
        </Text>
        <Text fontWeight="600" fontSize="5" color="primary">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
        <ButtonStyled
          height="medium"
          handleClick={() => handleAddToCart(product)}
        >
          Adicionar
        </ButtonStyled>
      </div>
    </ProductStyled>
  );
};
