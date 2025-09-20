"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}) => {
  const baseClasses =
    "flex items-center justify-center space-x-2 text-sm font-bold transition-all duration-300 group";

  const variantClasses = {
    primary: "bg-my-primary text-black hover:bg-opacity-90",
    secondary: "bg-white text-black hover:bg-opacity-90 border-2 border-black",
  };

  return (
    <div className="relative inline-block">
      {/* Shadow katmanı */}
      <div
        className="absolute bg-black w-full h-full"
        style={{
          clipPath: "polygon(5% 0%, 100% 0%, 95% 90%, 10% 80%)",
          transform: "translate(8px, 8px)",
          zIndex: 0,
        }}
      />

      {/* Buton katmanı */}
      <button
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className} cursor-pointer px-9 py-2.5 relative z-10`}
        style={{
          clipPath: "polygon(5% 0%, 100% 0%, 95% 90%, 10% 80%)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(-2px, -2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(0, 0)";
        }}
      >
        <span>{children}</span>
      </button>
    </div>
  );
};
export default Button;
