import React from 'react';
import { colors } from '../../lib/styleConfig';

export function Page4({ pageNumber, totalPages, pageData }) {
  // Add the new colors
  colors.brand.gold = "#C18900";
  colors.brand.sharpGreen = "#00F613";

  const styles = {
    page: {
      backgroundColor: colors.brand.gold
    },
    heading: {
      color: colors.brand.sharpGreen
    },
    card: {
      backgroundColor: colors.brand.white
    },
    cardTitle: {
      color: colors.brand.gold
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
        <div className="w-[555px] justify-start text-7xl font-black font-['Manychat_Gravity'] leading-[62.80px]" style={styles.heading}>
          Perks and Benefits
        </div>
        {/* Right Top Logo */}
        <div className="w-32 h-5 left-[431px] top-0 absolute overflow-hidden">
          <img src="/images/logo-main.svg" alt="Circle Logo" className="w-32 h-5 object-contain" />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
          <div className="self-stretch flex flex-col justify-start items-start gap-px">
            {/* First row of cards */}
            <div className="self-stretch inline-flex justify-start items-center gap-px">
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  🇪🇸<br/>Spanish<br/>classes
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Enhance your cultural experience—attend free lessons in the office to help you fully enjoy living in Barcelona.
                </div>
              </div>
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  🩺<br/>Health insurance
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Have peace of mind with comprehensive medical coverage including dentistry for both you and your family.
                </div>
              </div>
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  🛍️<br/>Employee discounts
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Enjoy multiple discounts in various shops with our savings program.
                </div>
              </div>
            </div>
            
            {/* Second row of cards */}
            <div className="self-stretch inline-flex justify-start items-center gap-px">
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  🖇️<br/>Hybrid work
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Enjoy the flexibility of splitting your time between the comfort of your home and our collaborative WeWork spaces.
                </div>
              </div>
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  📚<br/>Continuous learning
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Professional development budget of 1.500 EUR per year that covers conferences, training, courses, and essential literature.
                </div>
              </div>
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  🥪<br/>Daily lunches
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Fuel up with free office meals and snacks, ensuring you're energized throughout the day.
                </div>
              </div>
            </div>
            
            {/* Third row of cards */}
            <div className="self-stretch inline-flex justify-start items-center gap-px">
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  🏀<br/>Sport support
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Connect with colleagues through office yoga and company-funded cross-team activities.
                </div>
              </div>
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  💻<br/>Necessary equipment
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Get a top-tier laptop plus your choice of peripheral equipment to ensure comfort and productivity.
                </div>
              </div>
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  🌴<br/>Flexible leave options
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Prioritize work-life balance with flexible days off, 23 days of annual leave and 13 paid public holidays.
                </div>
              </div>
            </div>
            
            {/* Fourth row of cards */}
            <div className="self-stretch inline-flex justify-start items-center gap-px">
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  🤝<br/>Team building<br/>events
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Bond with your colleagues—get to know your team through enjoyable activities, lunches, and outings.
                </div>
              </div>
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 bg-white rounded-3xl inline-flex flex-col justify-between items-start" style={styles.card}>
                <div className="self-stretch justify-start text-base font-normal font-['CoFo_Sans_Mono'] uppercase leading-none" style={styles.cardTitle}>
                  🧩<br/>Flexible benefits package
                </div>
                <div className="self-stretch justify-end text-[9.51px] font-normal font-['Rooftop'] leading-[106%] tracking-[0.02em]" style={styles.text}>
                  Customize your own perks-from home office setups to wellness programs, and much more with an annual budget of 1.500 EUR.
                </div>
              </div>
              <div className="flex-1 h-[138px] pl-4 pr-4 py-4 invisible"></div>
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