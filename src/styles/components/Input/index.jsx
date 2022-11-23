import React from "react";

export const Input = ({
  handleChange,
  type,
  placeholder,
  name,
  value,
  className,
}) => {
  return (
    <>
      <input
        onChange={handleChange}
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        className={className}
      />
    </>
  );
};
