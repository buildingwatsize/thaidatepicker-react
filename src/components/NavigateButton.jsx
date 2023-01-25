import React from "react";

const NavigateButton = ({
  className,
  disabled,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className={className ?? ""}
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default NavigateButton;
