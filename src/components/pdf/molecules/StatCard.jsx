import React from 'react';
import { colors } from '../../../lib/styleConfig';

const StatCard = ({ 
  title, 
  description,
  className = "",
  titleColor // цвет для заголовка, соответствующий фону страницы
}) => {
  // Разбиваем заголовок на слова
  const words = title.split(' ');
  const middle = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, middle).join(' ');
  const secondLine = words.slice(middle).join(' ');

  return (
    <div className={`w-[245px] h-[110px] p-4 bg-white rounded-[32px] flex flex-col justify-between items-start ${className}`}>
      <div 
        className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none"
        style={{ color: titleColor || colors.brand.currant }}
      >
        {firstLine}<br />{secondLine}
      </div>
      <div 
        className="self-stretch justify-end text-sm font-normal font-['Rooftop'] leading-[105%]"
        style={{ color: colors.brand.black }}
      >
        {description}
      </div>
    </div>
  );
};

export default StatCard; 