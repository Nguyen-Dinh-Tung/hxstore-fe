import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className="py-2 px-4 flex gap-3 items-center border border-black hover:text-white hover:bg-primary hover:border-primary"
      onClick={onClick}>
      <span className="uppercase">{label}</span>
    </button>
  );
};

export default Button;
