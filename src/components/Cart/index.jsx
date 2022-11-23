import React from "react";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";
import styles from "./style.module.css";

export const Cart = ({
  currentSale,
  cartTotal,
  handleRemoveFromCart,
  clearCard,
}) => {
  return (
    <aside className={styles.aside}>
      <div className={`${styles.cartTitle} bg-color-primary`}>
        <h3 className="title title-3 color-gray-0">Carrinho de compras</h3>
      </div>
      {currentSale.length === 0 ? (
        <div className={`${styles.emptyCart} bg-color-gray-0`}>
          <h3 className="title title-3 color-gray-100">
            Sua sacola está vazia
          </h3>
          <span className="text text-2 color-gray-50">Adicione itens</span>
        </div>
      ) : (
        <div>
          <ul className={`${styles.cartProducts} bg-color-gray-0`}>
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
    </aside>
  );
};
