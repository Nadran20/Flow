import React from "react";

interface IconProps {
  name: string;
  size?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = "24px", color = "" }) => {
  return <i className={`bx ${name}`} style={{ fontSize: size, color }} />;
};

export default Icon;