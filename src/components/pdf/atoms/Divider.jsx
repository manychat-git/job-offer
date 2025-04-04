import React from 'react';
import { colors } from '../../../lib/styleConfig';

const Divider = () => (
  <div data-svg-wrapper className="w-full">
    <svg width="100%" height="2" viewBox="0 0 555 2" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H555" stroke={colors.brand.white} strokeWidth="0.664725" vectorEffect="non-scaling-stroke"/>
    </svg>
  </div>
);

export default Divider; 