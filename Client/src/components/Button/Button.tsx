import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "circular";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
}) => {
  const btnClass = `${styles.button} ${styles[variant]} ${className}`.trim();
  return (
    <button
      type={type}
      onClick={onClick}
      className={btnClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
