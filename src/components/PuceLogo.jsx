import React, { useState } from 'react';

export function PuceLogo({ variant = 'color', className = '' }) {
  const isWhite = variant === 'white';
  const [imgError, setImgError] = useState(false);

  const imgSrc = isWhite
    ? 'https://www.puce.edu.ec/wp-content/uploads/2026/05/horizontal_blanco.png'
    : 'https://www.puce.edu.ec/wp-content/uploads/2026/05/horizontal_color.png';

  if (!imgError) {
    return (
      <img
        src={imgSrc}
        alt="Pontificia Universidad Católica del Ecuador"
        className={`h-12 sm:h-14 w-auto object-contain ${className}`}
        onError={() => setImgError(true)}
      />
    );
  }

  // Fallback vector exact reproduction of the 80 Years PUCE logo
  return (
    <div className={`flex items-center gap-4 select-none ${className}`}>
      {/* 80 AÑOS CIRCULAR EMBLEM */}
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
          <circle cx="50" cy="50" r="46" stroke="#00a8cc" strokeWidth="4" />
          <path d="M30 40 C30 25, 45 25, 45 40 C45 55, 30 55, 30 70 C30 85, 55 85, 55 70 C55 55, 40 55, 40 40" stroke="#003b81" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="68" cy="50" r="18" stroke="#00a8cc" strokeWidth="6" fill="none" />
          <text x="50" y="93" textAnchor="middle" fill="#003b81" fontSize="10" fontWeight="bold" fontFamily="sans-serif">1946 - 2026</text>
        </svg>
        <span className="text-[10px] font-bold text-[#003b81] uppercase leading-tight tracking-wider">
          Años
        </span>
      </div>

      <div className="h-10 w-[1px] bg-slate-300"></div>

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
