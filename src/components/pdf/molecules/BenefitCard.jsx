import React from 'react';
import { colors } from '../../../lib/styleConfig';

const BenefitCard = ({ 
  emoji,
  title, 
  description,
  className = "",
  titleColor // цвет для заголовка, соответствующий фону страницы
}) => {
  // Разбиваем заголовок на слова
  const words = title.split(' ');
  
  // Если заголовок не содержит явного переноса строки,
  // делим его примерно пополам для создания двух строк
  const formattedTitle = title.includes('\n') 
    ? title 
    : words.length > 1 
      ? `${words.slice(0, Math.ceil(words.length / 2)).join(' ')}\n${words.slice(Math.ceil(words.length / 2)).join(' ')}`
      : `${title}\n${title}`; // если одно слово, дублируем его

  return (
    <div className={`h-[140px] p-4 bg-white rounded-[32px] inline-flex flex-col justify-between items-start ${className}`}>
      <div className="self-stretch inline-flex justify-start items-start gap-2">
        <div className="justify-start text-3xl font-normal font-['CoFo_Sans_Mono'] uppercase leading-7" style={{ color: titleColor }}>
          {emoji}
        </div>
        <div 
          className="flex-1 justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none whitespace-pre-line"
          style={{ color: titleColor }}
        >
          {formattedTitle}
        </div>
      </div>
      <div className="self-stretch justify-end text-[9px] font-normal font-['Rooftop'] leading-[110%] tracking-[0.01em]" style={{ color: colors.brand.black }}>
        {description}
      </div>
    </div>
  );
};

export default BenefitCard; 