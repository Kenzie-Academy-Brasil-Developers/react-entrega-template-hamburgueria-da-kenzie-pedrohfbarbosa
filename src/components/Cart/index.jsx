import React from "react";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";
import { CartStyled } from "./CartStyled";
import { HeadingThree } from "../../styles/Typography";
import { Text } from "../../styles/Typography";

export const Cart = ({
  currentSale,
  cartTotal,
  handleRemoveFromCart,
  clearCard,
}) => {
  return (
    <CartStyled>
      <div className="cartTitle">
        <HeadingThree color="white">Carrinho de compras</HeadingThree>
      </div>
      {currentSale.length === 0 ? (
        <div className="emptyCart">
          <HeadingThree>Sua sacola está vazia</HeadingThree>
          <Text fontSize="5">Adicione itens</Text>
        </div>
      ) : (
        <div>
          <ul className="cartProducts">
            {currentSale.map((e) => (
              <CartProduct
                key={e.id}
                image={e.img}
                name={e.name}
                category={e.category}
                id={e.id}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </ul>
          <CartTotal cartTotal={cartTotal} clearCard={clearCard} />
        </div>
      )}
    </CartStyled>
  );
};
