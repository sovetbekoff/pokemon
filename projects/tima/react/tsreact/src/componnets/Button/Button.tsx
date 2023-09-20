import React from "react";
import "./Button.css";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color: "orange" | "blue" | "red";
}
const Button: React.FC<ButtonProps> = ({
  children,
  color,
  onClick,
  ...props
}) => {
  const className = ` ${color}`;
  return (
    <div>
      <button className={className} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
