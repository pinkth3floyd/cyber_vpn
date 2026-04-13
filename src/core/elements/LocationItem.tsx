// import React from 'react';
import { ArrowDown, Hexagon } from 'lucide-react';
import { CyberBox } from './CyberBox';

export const LocationItem = ({ country, location, ping, flag, isSmart = false }: any) => (
  <CyberBox className="w-full mb-4">
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center text-2xl bg-white shadow-[2px_2px_0px_var(--fg-primary)]">
          {flag}
        </div>
        <div>
          <div className="font-bold text-lg leading-tight">{country}</div>
          <div className="text-xs font-semibold opacity-80">{ping ? `${ping} - ${location}` : location}</div>
        </div>
      </div>
      {isSmart ? (
        <Hexagon className="w-6 h-6 text-accent fill-accent/20 drop-shadow-[2px_2px_0px_var(--fg-primary)]" />
      ) : (
        <ArrowDown className="w-5 h-5" />
      )}
    </div>
  </CyberBox>
);
