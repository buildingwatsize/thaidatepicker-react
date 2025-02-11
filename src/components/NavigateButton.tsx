import React from "react";
import { cn } from "../utils";

const NavigateButton = ({
  className,
  type = "button",
  disabled,
  onClick,
  children,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default NavigateButton;
