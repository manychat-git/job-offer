import React from 'react';
import { components } from '../../../lib/styleConfig';

const InfoCard = ({ children, className = '' }) => {
  const { backgroundColor, border, borderRadius, padding, marginBottom } = components.pdf.infoCard;
  
  return (
    <div 
      className={`
        bg-white
        border
        border-black
        rounded-lg
        p-4
        mb-4
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </div>
  );
};

export const DataRow = ({ label, value, className = '' }) => {
  return (
    <div 
      className={`
        flex
        justify-between
        items-center
        mb-2
        font-rooftop
        text-base
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default InfoCard; 