import React from "react";

export const CartTotal = ({ cartTotal }) => {
  return (
    <div>
      <div>
        <h4>Total</h4>
        <span>{cartTotal}</span>
      </div>
    </div>
  );
};
