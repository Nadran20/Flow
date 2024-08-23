import React, { ReactNode } from "react";
import './tag.scss'

interface TagProps {
  children: ReactNode;
  color?: color;
}

type color = 'gray' | 'blue' | 'light-blue' | 'green' | 'orange' | 'red' | 'pink' | 'purple' | 'yellow' | 'cyan' | 'lime' | 'brown' | 'teal';

const Tag: React.FC<TagProps> = ({ color = 'gray', children }) => {
  return <span className={`tag tag-${color}`}>{children}</span>;
};

export default Tag;