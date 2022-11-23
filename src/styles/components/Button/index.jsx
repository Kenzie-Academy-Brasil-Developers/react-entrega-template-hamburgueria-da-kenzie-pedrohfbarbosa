import React from "react";

export const Button = ({ handleClick, type, children, className }) => {
  return (
    <button className={className} onClick={handleClick} type={type}>
      {children}
    </button>
  );
};
