import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  arrow?: Boolean;
  to?: string;
}

const Button = ({ children, onClick, className, arrow, to }: ButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) onClick();
    if (to) navigate(to); // ← navigate if `to` is provided
  };

  return (
    <button
      className={`group inline-flex items-center gap-2 justify-center text-center bg-indigo-600 text-white rounded-lg px-4 py-2 text-base hover:bg-indigo-700 transition ${className}`}
      onClick={handleClick}
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
