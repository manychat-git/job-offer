import React from 'react';
import { colors } from '../../../lib/styleConfig';

const InfoRow = ({ 
  label, 
  value,
  isLast = false,
  valueComponent,
  labelColor,
  borderColor
}) => (
  <div 
    className={`self-stretch ${!isLast ? 'border-b' : ''} inline-flex justify-start items-start py-[6px]`}
    style={!isLast ? { borderColor: borderColor || colors.brand.vividOrange } : undefined}
  >
    <div 
      className="w-64 justify-start text-base font-normal font-['Rooftop'] leading-[125%]"
      style={{ 
        color: labelColor || colors.brand.vividOrange,
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        hyphens: 'auto'
      }}
    >
      {label}
    </div>
    <div 
      className="flex-1 justify-start text-base font-normal font-['Rooftop'] leading-[125%]"
      style={{ 
        color: colors.brand.black,
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        hyphens: 'auto'
      }}
    >
      {valueComponent || value}
    </div>
  </div>
);

export default InfoRow; 