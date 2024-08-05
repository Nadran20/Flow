import React from 'react';

export interface BoxProps {
  text: string;
  width: number;
  height: number;
  onClick?: () => void;
}

const Box: React.FC<BoxProps> = ({ text, height, width, onClick }: BoxProps) => {
  const style = {
    gridColumn: 'span ' + width + '/span ' + width,
    gridRow: 'span ' + height + '/span ' + height,
  };
  return (
    <div className="bg-slate-500" style={style} onClick={onClick}>
      {text}
    </div>
  );
};

export default Box;