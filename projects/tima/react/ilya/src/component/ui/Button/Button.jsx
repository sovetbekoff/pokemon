import React from "react";

const Button = ({ color, type }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }}>{type}</button>
    </div>
  );
};

export default Button;
