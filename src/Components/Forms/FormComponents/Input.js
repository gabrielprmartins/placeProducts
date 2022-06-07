import React from "react";

const Input = ({ id, type, name, value, onChange, error, onBlur }) => {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
