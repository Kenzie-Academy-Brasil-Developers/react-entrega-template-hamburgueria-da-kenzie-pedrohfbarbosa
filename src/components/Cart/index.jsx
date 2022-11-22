import React from "react";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";

export const Cart = ({ currentSale, cartTotal, handleRemoveFromCart }) => {
  return (
    <aside>
      <h3>Carrinho de compras</h3>
      {currentSale.length === 0 ? (
        <div>
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </div>
      ) : (
        <div>
          <ul>
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
          <CartTotal cartTotal={cartTotal} />
        </div>
      )}
    </aside>
  );
};
