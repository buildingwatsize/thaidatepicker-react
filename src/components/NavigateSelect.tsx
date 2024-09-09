import React from "react";

const NavigateSelect = ({
  className,
  value,
  onChange,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select className={className} value={value} onChange={onChange} {...props}>
      {children}
    </select>
  );
};

export default NavigateSelect;
