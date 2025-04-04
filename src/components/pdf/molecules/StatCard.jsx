import React from 'react';
import { colors } from '../../../lib/styleConfig';

const StatCard = ({ 
  title, 
  description,
  className = "",
  titleColor // цвет для заголовка, соответствующий фону страницы
}) => (
  <div className={`w-[245px] h-[102px] p-4 bg-white rounded-[32px] flex flex-col justify-between items-start ${className}`}>
    <div 
      className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none"
      style={{ color: titleColor || colors.brand.currant }}
    >
      {title}
    </div>
    <div 
      className="self-stretch justify-end text-sm font-normal font-['Rooftop'] leading-[120%]"
      style={{ color: colors.brand.black }}
    >
      {description}
    </div>
  </div>
);

export default StatCard; 