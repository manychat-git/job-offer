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
      font-black
      font-['Manychat_Gravity']
      ${className}
    `.replace(/\s+/g, ' ').trim()}
    style={{
      fontSize: '78.50px',
      lineHeight: '80%',
      ...style
    }}
  >
    {children}
  </div>
);

export default PageTitle; 