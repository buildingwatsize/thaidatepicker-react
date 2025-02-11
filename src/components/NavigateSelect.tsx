import React from "react";
import { cn } from "../utils";

const NavigateSelect = ({
  className,
  value,
  onChange,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select
      className={cn(className)}
      value={value}
      onChange={onChange}
      {...props}
    >
      {children}
    </select>
  );
};

export default NavigateSelect;
