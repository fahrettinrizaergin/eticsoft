import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  outline?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, text, outline }) => {
  if (outline) {
    return (
      <button
        className="bg-transparent border border-primary hover:bg-primary hover:text-white h-fit p-2 px-4 text-sm rounded-full"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      className="bg-primary hover:bg-secondary  h-fit p-2 px-4 text-sm rounded-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
