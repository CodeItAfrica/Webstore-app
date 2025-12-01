import React from "react"
import "../../styles/Input.css"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={`ui-input ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"
