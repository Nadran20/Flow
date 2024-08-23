import React, { CSSProperties } from "react";

interface ProgressProps {
  value: number;
  max?: number;
}

const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => {
    const pourcente: number = (value / max) * 100;
    const style: CSSProperties = {
        width: `${pourcente}%`,
    }

    return (
        <div className="w-full overflow-hidden rounded-xl bg-slate-200 min-h-3">
            <div className="h-full rounded-xl bg-zinc-700" style={style}>
            </div>
        </div>
    );
};

export default Progress;