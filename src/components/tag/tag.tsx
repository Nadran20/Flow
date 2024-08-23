import React, { ReactNode } from "react";
import './tag.scss'

interface TagProps {
  children: ReactNode;
  color?: string;
}

const Tag: React.FC<TagProps> = ({ color = 'gray', children }) => {
  return <span className={`tag tag-${color}`}>{children}</span>;
};

export default Tag;