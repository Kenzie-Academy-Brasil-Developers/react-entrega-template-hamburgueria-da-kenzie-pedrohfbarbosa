import React from "react";
import { CartTotalStyled } from "./CartTotalStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { HeadingFour } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";

export const CartTotal = ({ cartTotal, clearCard }) => {
  return (
    <CartTotalStyled>
      <div>
        <HeadingFour>Total</HeadingFour>
        <Text color="gray-50" fontWeight="600" fontSize="5">
          {cartTotal}
        </Text>
      </div>
      <ButtonStyled
        handleClick={clearCard}
        height
        hover
        width="100%"
        color="gray-50"
        bg="gray-20"
      >
        Remover todos
      </ButtonStyled>
    </CartTotalStyled>
  );
};
