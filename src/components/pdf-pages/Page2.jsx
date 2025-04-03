import React from 'react';
import { colors } from '../../lib/styleConfig';

export function Page2({ pageData }) {
  const styles = {
    page: {
      backgroundColor: colors.brand.vividOrange
    },
    heading: {
      color: colors.brand.amethyst
    },
    card: {
      backgroundColor: colors.brand.white
    },
    text: {
      color: colors.brand.black
    },
    label: {
      color: colors.brand.cobalt
    },
    border: {
      borderColor: colors.brand.cobalt
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
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="justify-start text-7xl font-black font-['Manychat_Gravity'] leading-[62.80px]" style={styles.heading}>
            Hello,
          </div>
          <div className="self-stretch justify-start text-7xl font-black font-['Manychat_Gravity'] leading-[62.80px]" style={styles.heading}>
            {pageData.name}!
          </div>
        </div>
        {/* Right Top Logo */}
        <div className="w-32 h-5 left-[431px] top-0 absolute overflow-hidden">
          <img src="/images/logo-main.svg" alt="Circle Logo" className="w-32 h-5 object-contain" />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
          <div className="w-[415px] px-5 pt-4 pb-5 rounded-3xl flex flex-col justify-start items-start gap-1" style={styles.card}>
            <div className="self-stretch justify-start text-base font-normal font-['Rooftop'] leading-none" style={styles.text}>👋</div>
            <div className="self-stretch justify-start">
              <span className="text-lg font-normal font-['Rooftop'] leading-tight" style={styles.text}>
                We're excited to bring you on board!
              </span>
              <span className="text-base font-normal font-['Rooftop'] leading-none" style={styles.text}> 🎉<br/></span>
              <span className="text-lg font-normal font-['Rooftop'] leading-tight" style={styles.text}>
                Here are the details of your job offer.
              </span>
            </div>
          </div>

          <div className="self-stretch px-5 py-4 rounded-3xl flex flex-col justify-start items-start" style={styles.card}>
            <div className="self-stretch border-b inline-flex justify-start items-center" style={styles.border}>
              <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                Job title
              </div>
              <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                {pageData.jobTitle}
              </div>
            </div>
            <div className="self-stretch border-b inline-flex justify-start items-center" style={styles.border}>
              <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                Start date
              </div>
              <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                {pageData.startDate}
              </div>
            </div>
            <div className="self-stretch border-b inline-flex justify-start items-center" style={styles.border}>
              <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                Location
              </div>
              <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                {pageData.location}
              </div>
            </div>
            <div className="self-stretch border-b inline-flex justify-start items-center" style={styles.border}>
              <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                Annual gross salary
              </div>
              <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                {pageData.salary}
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center" style={styles.border}>
              <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                Probation period
              </div>
              <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                {pageData.probationPeriod}
              </div>
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
            <div className="justify-start text-xs font-normal font-['CoFo_Sans_Mono'] uppercase leading-3" style={styles.footer}>
              2/5
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 