import React from "react";
import { CartProductStyled } from "./CartProductStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { HeadingFour } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";

export const CartProduct = ({
  handleRemoveFromCart,
  product,
  handleAddOneItem,
  handleRemoveOneItem,
}) => {
  return (
    <CartProductStyled>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <div>
          <HeadingFour>{product.name}</HeadingFour>
          <Text color="gray-50" fontSize="6">
            {product.category}
          </Text>
        </div>
        <div className="btns-wrapper">
          <ButtonStyled
            color="gray-100"
            handleClick={() => handleRemoveFromCart(product.id)}
          >
            Remover
          </ButtonStyled>
          <div>
            <ButtonStyled
              handleClick={() => handleRemoveOneItem(product.id)}
              color="gray-100"
            >
              -
            </ButtonStyled>
            <Text color="gray-50" fontSize="6">
              {product.quantity}
            </Text>
            <ButtonStyled
              handleClick={() => handleAddOneItem(product.id)}
              color="gray-100"
            >
              +
            </ButtonStyled>
          </div>
        </div>
      </div>
    </CartProductStyled>
  );
};
