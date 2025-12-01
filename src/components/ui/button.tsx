import React from "react"
import "../../styles/Button.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const variantClass = variant === "secondary" ? "ui-button-secondary" : "ui-button-primary"
    return (
      <button
        className={`ui-button ${variantClass} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
