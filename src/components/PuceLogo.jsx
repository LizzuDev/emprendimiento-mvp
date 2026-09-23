import React from 'react';

export function PuceLogo({ variant = 'color', className = '' }) {
  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-4 select-none ${className}`}>
      {/* PUCE TEXT */}
      <div className="flex flex-col text-left">
        <span className={`text-2xl font-black tracking-tight leading-none ${isWhite ? 'text-white' : 'text-[#003b81]'}`}>
          PUCE
        </span>
        <span className={`text-[11px] font-semibold leading-tight mt-1 ${isWhite ? 'text-slate-200' : 'text-slate-700'}`}>
          Pontificia Universidad Católica del Ecuador
        </span>
      </div>
    </div>
  );
}
