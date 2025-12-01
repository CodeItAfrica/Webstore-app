import React from "react"
import "../../styles/Label.css"

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <label
        className={`ui-label ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Label.displayName = "Label"
