import React from "react";

interface CardProps {
  hoverable?: boolean;
  padding?: "sm" | "md" | "lg";
  variant?: "default" | "elevated" | "outlined" | "feature";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  role?: string;
  "aria-label"?: string;
}

export default function Card({
  hoverable = true,
  padding = "md",
  variant = "default",
  children,
  className = "",
  onClick,
  role,
  "aria-label": ariaLabel,
  ...props
}: CardProps) {
  const baseClasses =
    "bg-white rounded-lg border border-gray-200 transition-agency";

  const variantClasses = {
    default: "shadow-card",
    elevated: "shadow-hover",
    outlined: "border-neutral-100 shadow-none",
    feature:
      "bg-gradient-to-br from-agency-blue/5 to-agency-orange/5 shadow-card",
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hoverable
    ? "hover:shadow-hover hover:-translate-y-1 duration-200"
    : "";

  const clickableClasses = onClick
    ? "cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue focus-visible:outline-offset-2"
    : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${clickableClasses} ${className}`;

  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={classes}
      onClick={onClick}
      role={onClick ? role || "button" : role}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Component>
  );
}
