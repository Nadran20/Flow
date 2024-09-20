import { CSSProperties, ReactNode } from 'react';

export interface TitleProps {
  children: ReactNode;
  size: string;
  color?: string;
  onClick?: () => void;
}

const Title: React.FC<TitleProps> = ({ size, children, color, onClick }: TitleProps) => {
    const style: CSSProperties = {
        color,
        cursor: onClick ? 'pointer' : 'default',
        fontWeight: 800,
        fontSize: size
    };
    return (
        <h1 style={style} onClick={onClick}>{children}</h1>
    );
};

export default Title;