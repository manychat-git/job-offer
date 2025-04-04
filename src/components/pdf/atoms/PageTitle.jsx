import React from 'react';

const PageTitle = ({ 
  children, 
  className = '',
  style,
  width = 'w-80'
}) => (
  <div 
    className={`
      ${width}
      justify-start
      text-7xl
      font-black
      font-['Manychat_Gravity']
      leading-[62.80px]
      ${className}
    `.replace(/\s+/g, ' ').trim()}
    style={style}
  >
    {children}
  </div>
);

export default PageTitle; 