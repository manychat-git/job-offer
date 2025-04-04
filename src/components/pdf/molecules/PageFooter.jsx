import React, { createContext, useContext } from 'react';
import Divider from '../atoms/Divider';
import { colors } from '../../../lib/styleConfig';
import { COMPANIES } from '../../../lib/constants';

// Создаем контекст с значением по умолчанию
export const CompanyContext = createContext('manychat_sl');

// Компонент-провайдер для установки значения компании
export const CompanyProvider = ({ company, children }) => (
  <CompanyContext.Provider value={company}>
    {children}
  </CompanyContext.Provider>
);

const PageFooter = ({ 
  showPagination = false, 
  currentPage, 
  totalPages,
  confidentialText = "Any information provided to you as part of this job offer is confidential and not subject to distribution."
}) => {
  // Получаем значение компании из контекста
  const company = useContext(CompanyContext);
  
  // Находим label компании по value
  const companyLabel = COMPANIES.find(comp => comp.value === company)?.label || "Manychat S.L.";

  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-3 mt-[10px] -mb-2">
      <Divider />
      <div className={`
        self-stretch 
        inline-flex 
        ${showPagination ? 'justify-between' : 'justify-start'} 
        items-start
        ${!showPagination ? 'gap-4' : ''}
      `.replace(/\s+/g, ' ').trim()}>
        <div className="flex justify-start items-start gap-14">
          <div className="w-[200px] flex justify-start items-center gap-10">
            <div className={`text-right text-[${colors.brand.white}] text-xs font-normal font-['CoFo_Sans_Mono'] uppercase leading-3`}>
              JOB OFFER
            </div>
            <div className={`text-[${colors.brand.white}] text-xs font-normal font-['CoFo_Sans_Mono'] uppercase leading-3`}>
              {companyLabel}
            </div>
          </div>
          <div className={`w-40 text-[${colors.brand.white}] text-[8px] font-normal font-['Rooftop'] leading-3`}>
            {confidentialText}
          </div>
        </div>
        {showPagination && (
          <div className={`text-[${colors.brand.white}] text-xs font-normal font-['CoFo_Sans_Mono'] uppercase leading-3`}>
            {currentPage}/{totalPages}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageFooter; 