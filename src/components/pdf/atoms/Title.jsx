import React from 'react';
import { components, typography } from '../../../lib/styleConfig';

const Title = ({ children, className = '' }) => {
  const { fontFamily, fontSize, fontWeight, color, marginBottom } = components.pdf.pageTitle;
  
  return (
    <h1 
      className={`
        font-manychatGravity
        text-4xl
        font-black
        text-black
        mb-6
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </h1>
  );
};

export default Title; 