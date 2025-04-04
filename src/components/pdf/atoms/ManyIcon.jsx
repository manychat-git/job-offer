import React from 'react';

const ManyIcon = ({ className = "" }) => (
  <svg 
    className={`w-full h-full ${className}`.trim()}
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <g id="Logo-circle">
      <path 
        id="svg" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM33.1342 13.6H33.3428C37.0275 13.6 37.7227 17.7978 37.5837 22.3398C37.5142 25.0237 36.4018 32.8 36.4018 32.8H28.1285C28.1285 32.8 33.8294 20.8946 31.8132 20.1376C28.8237 19.1054 25.6257 32.8 25.6257 32.8H19.3685V21.3075H16.24V32.8H10.4V15.5269H24.9304V21.7892C24.9304 21.7892 27.5723 13.6 33.1342 13.6Z" 
        fill="white"
      />
    </g>
  </svg>
);

export default ManyIcon; 