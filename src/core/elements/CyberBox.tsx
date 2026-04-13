// import React from 'react'

export const CyberBox = ({ children, className = "", innerClassName = "", inverted = false, altClip = false, onClick }: any) => {
  const clipClass = altClip ? 'cyber-clip-alt' : 'cyber-clip';
  return (
    <div className={`cyber-shadow ${onClick ? 'clickable cursor-pointer' : ''} ${className}`} onClick={onClick}>
      <div className={`bg-secondary p-[2px] ${clipClass} h-full`}>
        <div className={`${inverted ? 'bg-secondary text-primary' : 'bg-primary text-secondary'} ${clipClass} h-full w-full ${innerClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
