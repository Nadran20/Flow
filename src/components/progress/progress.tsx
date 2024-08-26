import React, { CSSProperties } from "react";

interface ProgressProps {
  value: number;
  max?: number;
}

const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => {
    const pourcente: number = parseInt(((value / max) * 100).toFixed());
    const progress: number = 100 - pourcente;
    const style: CSSProperties = {
        transition: 'clip-path 1s linear',
        clipPath: `inset(0 ${progress}% 0 0 round 12px)`,
    }

    return (
        <div className="flex relative overflow-hidden rounded-xl">
            <div className="absolute text-center inset-x-0 inset-y-0 bg-slate-200">{pourcente}%</div>
            <div className="w-full text-center bg-zinc-700 text-white" style={style}>{pourcente}%</div>
        </div>
    );
};

export default Progress;