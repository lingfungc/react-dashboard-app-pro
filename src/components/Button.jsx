import React from "react";

const Button = ({
  bgColor,
  bgHoverColor,
  color,
  size,
  text,
  borderRadius,
  width,
  customFunc,
}) => {
  return (
    <button
      type="button"
      onClick={customFunc}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width}`}
    >
      {text}
    </button>
  );
};

export default Button;
