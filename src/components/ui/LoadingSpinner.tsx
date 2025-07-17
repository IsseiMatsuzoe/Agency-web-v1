import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
  "aria-label"?: string;
}

export default function LoadingSpinner({
  size = "md",
  color = "text-agency-red",
  className = "",
  "aria-label": ariaLabel = "読み込み中",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const classes = `animate-spin rounded-full border-2 border-gray-200 border-t-current ${sizeClasses[size]} ${color} ${className}`;

  return (
    <div
      className={classes}
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
}
