import React from "react"
import "../../styles/Checkbox.css"

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (checked: boolean) => void
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked)
    }

    return (
      <input
        type="checkbox"
        className={`ui-checkbox ${className}`}
        ref={ref}
        onChange={handleChange}
        {...props}
      />
    )
  }
)
Checkbox.displayName = "Checkbox"
