// import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CyberBox } from './CyberBox';

export const MenuItem = ({ icon: Icon, title, onClick }: any) => (
  <CyberBox className="w-full mb-4" onClick={onClick}>
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <Icon className="w-6 h-6" />
        <span className="font-bold text-lg uppercase tracking-wider">{title}</span>
      </div>
      <ChevronRight className="w-6 h-6" />
    </div>
  </CyberBox>
);
