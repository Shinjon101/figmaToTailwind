import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  arrow?: Boolean;
}
const Button = ({ children, onClick, className, arrow }: ButtonProps) => {
  return (
    <button
      className={`group inline-flex items-center gap-2 justify-center text-center bg-indigo-600 text-white rounded-lg px-4 py-2 text-base hover:bg-indigo-700 transition ${className}`}
      onClick={onClick}
    >
      {children}
      {arrow ? (
        <FaArrowRight className="transition-transform duration-300 transform group-hover:translate-x-1 pt-0.5" />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
