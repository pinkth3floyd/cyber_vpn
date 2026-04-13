// import React from 'react';

export const CyberInput = ({ icon: Icon, type = "text", placeholder, value, onChange }: any) => (
  <div className="relative w-full mb-4 cyber-shadow">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div className="bg-secondary p-[2px] cyber-clip-alt h-14">
      <input
        type={type}
        className="w-full h-full bg-secondary text-primary pl-12 pr-4 font-rajdhani font-bold text-lg outline-none focus:bg-secondary/90 transition-colors placeholder:text-primary/50 cyber-clip-alt"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);