import React from 'react';
import { components } from '../../lib/styleConfig';
import PageFooter from '../pdf/molecules/PageFooter';
import Logo from '../pdf/atoms/Logo';

const Page1 = () => {
  return (
    <>
      <div 
        className={`
          w-[553px]
          justify-start
          text-orange-600
          text-[157px]
          font-black
          font-['Manychat_Gravity']
          leading-[125.60px]
        `.replace(/\s+/g, ' ').trim()}
      >
        Your<br/>job<br/>offer
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
        <div className="w-[555px] h-[99px]">
          <Logo />
        </div>
        <PageFooter showPagination={false} />
      </div>
    </>
  );
};

export default Page1; 