import React from 'react';
import { colors } from '../../lib/styleConfig';

export function Page3({ pageNumber, totalPages, pageData }) {
  const styles = {
    page: {
      backgroundColor: colors.brand.currant // "#BC1E5D"
    },
    heading: {
      color: colors.brand.thistle // "#D2B6DE"
    },
    card: {
      backgroundColor: colors.brand.white
    },
    text: {
      color: colors.brand.black
    },
    footer: {
      color: colors.brand.white
    },
    line: {
      backgroundColor: colors.brand.white,
      outlineColor: colors.brand.white
    }
  };

  return (
    <>
      <div className="self-stretch relative inline-flex justify-between items-start">
        <div className="w-48 left-0 top-0 absolute justify-start text-7xl font-black font-['Manychat_Gravity'] leading-[62.80px]" style={styles.heading}>
          Why<br/>join<br/>us?
        </div>
        {/* Right Top Logo */}
        <div className="w-32 h-5 left-[431px] top-0 absolute overflow-hidden">
          <img src="/images/logo-main.svg" alt="Circle Logo" className="w-32 h-5 object-contain" />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
          <div className="self-stretch flex flex-col justify-start items-start gap-px">
            <div className="self-stretch flex flex-col justify-start items-end">
              <div className="w-[245px] h-[102px] pl-5 pr-10 py-3 bg-white rounded-3xl flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-[22px] font-normal font-['CoFo_Sans_Mono'] uppercase leading-[90%]" style={styles.text}>#1 Platform</div>
                <div className="self-stretch justify-end text-base font-normal font-['Rooftop'] leading-none" style={styles.text}>Manychat is the most used Chat Marketing Platform</div>
              </div>
            </div>
            <div className="self-stretch pl-60 flex flex-col justify-start items-start">
              <div className="w-[245px] h-[102px] pl-5 pr-10 py-3 bg-white rounded-3xl flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-[22px] font-normal font-['CoFo_Sans_Mono'] uppercase leading-[90%]" style={styles.text}>1B+ Conversations</div>
                <div className="self-stretch justify-end text-base font-normal font-['Rooftop'] leading-none" style={styles.text}>powered by Manychat in the last year</div>
              </div>
            </div>
            <div className="self-stretch pl-48 flex flex-col justify-start items-start">
              <div className="w-[245px] h-[102px] pl-5 pr-10 py-3 bg-white rounded-3xl flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-[22px] font-normal font-['CoFo_Sans_Mono'] uppercase leading-[90%]" style={styles.text}>200+ <br/>Top talents</div>
                <div className="self-stretch justify-end text-base font-normal font-['Rooftop'] leading-none" style={styles.text}>on the Manychat team</div>
              </div>
            </div>
            <div className="self-stretch pl-32 flex flex-col justify-start items-start">
              <div className="w-[245px] h-[102px] pl-5 pr-10 py-3 bg-white rounded-3xl flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-[22px] font-normal font-['CoFo_Sans_Mono'] uppercase leading-[90%]" style={styles.text}>1M+ Customers</div>
                <div className="self-stretch justify-end text-base font-normal font-['Rooftop'] leading-none" style={styles.text}>use Manychat for marketing, sales, and support</div>
              </div>
            </div>
            <div className="self-stretch pl-16 flex flex-col justify-start items-start">
              <div className="w-[245px] h-[102px] pl-5 pr-10 py-3 bg-white rounded-3xl flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-[22px] font-normal font-['CoFo_Sans_Mono'] uppercase leading-[90%]" style={styles.text}>170+<br/>Countries</div>
                <div className="self-stretch justify-end text-base font-normal font-['Rooftop'] leading-none" style={styles.text}>use Manychat worldwide</div>
              </div>
            </div>
            <div className="w-[245px] h-[102px] pl-5 pr-10 py-3 bg-white rounded-3xl flex flex-col justify-between items-start" style={styles.card}>
              <div className="self-stretch justify-start text-[22px] font-normal font-['CoFo_Sans_Mono'] uppercase leading-[90%]" style={styles.text}>Global team</div>
              <div className="self-stretch justify-end text-base font-normal font-['Rooftop'] leading-none" style={styles.text}>in Spain, Armenia, Netherlands, USA, and Brazil</div>
            </div>
          </div>
          
          {/* Bottom Left Logo */}
          <div className="w-12 h-12 relative">
            <img src="/images/logo-circle.svg" alt="Main Logo" className="w-12 h-12 object-contain" />
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch h-0 outline outline-[0.66px] outline-offset-[-0.33px]" style={styles.line}></div>
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-14">
              <div className="flex justify-start items-center gap-10">
                <div className="text-right justify-start text-xs font-normal font-['CoFo_Sans_Mono'] uppercase leading-3" style={styles.footer}>
                  JOB OFFER
                </div>
                <div className="justify-start text-xs font-normal font-['CoFo_Sans_Mono'] uppercase leading-3" style={styles.footer}>
                  ManyChat S.L.
                </div>
              </div>
              <div className="w-48 justify-start text-[8px] font-normal font-['Rooftop'] leading-3" style={styles.footer}>
                Any information provided to you as part of this job offer is confidential and not subject to distribution.
              </div>
            </div>
            <div className="justify-start text-xs font-normal font-['CoFo_Sans_Mono'] uppercase leading-3 w-8 text-center" style={styles.footer}>
              {pageNumber}/{totalPages}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}