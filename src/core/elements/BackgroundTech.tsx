
export const Crosshair = ({ className = "", color = "var(--fg-primary)" }: { className?: string, color?: string }) => (
  <div className={`absolute w-4 h-4 opacity-50 ${className}`}>
    <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2" style={{ backgroundColor: color }}></div>
    <div className="absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2" style={{ backgroundColor: color }}></div>
  </div>
);

export const BackgroundTech = ({ className = "opacity-20", color = "var(--fg-primary)" }: { className?: string, color?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    <svg className="absolute top-12 left-6 w-16 h-16" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="4">
      <path d="M0,20 L20,20 L20,0" />
      <path d="M40,40 L60,60" />
      <path d="M60,40 L40,60" />
    </svg>
    <svg className="absolute top-32 right-0 w-32 h-64" viewBox="0 0 100 200" fill="none" stroke={color} strokeWidth="2">
      <path d="M100,20 L60,20 L40,40 L0,40" />
      <circle cx="60" cy="20" r="3" fill={color} stroke="none" />
      <path d="M100,100 L80,100 L60,120 L60,180" />
      <circle cx="80" cy="100" r="3" fill={color} stroke="none" />
    </svg>
    <svg className="absolute bottom-32 left-0 w-48 h-32" viewBox="0 0 200 100" fill="none" stroke={color} strokeWidth="2">
      <path d="M0,80 L40,80 L60,60 L100,60" />
      <path d="M0,90 L30,90 L50,70 L90,70" strokeDasharray="4 4" />
    </svg>
    <Crosshair className="top-1/4 right-8" color={color} />
    <Crosshair className="bottom-1/4 right-12" color={color} />
    <Crosshair className="top-1/2 left-4" color={color} />
  </div>
);
