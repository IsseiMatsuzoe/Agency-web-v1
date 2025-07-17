import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  "aria-label"?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  onClick,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  const variantClasses = {
    primary: "bg-agency-red text-white hover:bg-agency-orange active:scale-98",
    secondary: "bg-agency-blue text-white hover:bg-blue-700 active:scale-98",
    outline:
      "border-2 border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white active:scale-98",
    ghost:
      "text-agency-red hover:text-agency-orange hover:bg-agency-red/10 active:scale-98",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm min-h-[36px]",
    md: "px-6 py-3 text-base min-h-touch",
    lg: "px-8 py-4 text-lg min-h-[52px]",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
