import React from "react";
import { CartProductStyled } from "./CartProductStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { HeadingFour } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";

export const CartProduct = ({
  image,
  name,
  category,
  handleRemoveFromCart,
  id,
}) => {
  return (
    <CartProductStyled>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <div>
          <HeadingFour>{name}</HeadingFour>
          <Text color="gray-50" fontSize="6">
            {category}
          </Text>
        </div>
        <ButtonStyled
          color="gray-100"
          handleClick={() => handleRemoveFromCart(id)}
        >
          Remover
        </ButtonStyled>
      </div>
    </CartProductStyled>
  );
};
