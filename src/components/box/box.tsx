import React, { CSSProperties, ReactNode } from 'react';
import './box.css'

export interface BoxProps {
  width: number;
  height: number;
  onClick?: () => void;
  children?: ReactNode;
}

const Box: React.FC<BoxProps> = ({ height, width, onClick, children }: BoxProps) => {
  const style: CSSProperties = {
    gridColumn: 'span ' + width + '/span ' + width,
    gridRow: 'span ' + height + '/span ' + height,
  };

  return (
    <div className="rounded-xl border border-slate-100 shadow box" style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Box;