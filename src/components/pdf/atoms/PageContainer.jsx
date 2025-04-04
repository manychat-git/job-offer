import React from 'react';
import { colors } from '../../../lib/styleConfig';

const PageContainer = ({ children, currentPage }) => {
  // Определение background цвета страницы
  const pageStyle = {
    backgroundColor: currentPage === 1 
      ? colors.brand.amethyst 
      : currentPage === 3
        ? colors.brand.currant
        : currentPage === 4
          ? colors.brand.gold
          : currentPage === 5
            ? colors.brand.amethyst
            : colors.brand.vividOrange
  };

  return (
    <div 
      className="w-[595px] h-[842px] p-5 inline-flex flex-col justify-between items-start relative pdf-page"
      data-preview-page="true"
      data-current-page={currentPage}
      style={pageStyle}
    >
      {children}
    </div>
  );
};

export default PageContainer; 