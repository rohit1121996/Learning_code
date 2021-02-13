import React from "react";

const Button = ({ onClick, text, color }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
export default Button;
