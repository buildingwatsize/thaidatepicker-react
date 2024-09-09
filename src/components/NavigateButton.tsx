import React from "react";

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
      className={className}
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
