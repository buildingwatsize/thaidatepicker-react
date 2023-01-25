import { Typography } from "antd";
import React from "react";

const Header = ({ title = "", className = "" }) => {
  return (
    <div className="text-center">
      <Typography.Title level={1} className={className}>
        {title}
      </Typography.Title>
    </div>
  );
};

export default Header;
