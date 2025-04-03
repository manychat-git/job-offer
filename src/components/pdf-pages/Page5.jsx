import React from 'react';
import { colors } from '../../lib/styleConfig';

export function Page5({ pageNumber, totalPages, pageData }) {
  const styles = {
    page: {
      backgroundColor: colors.brand.amethyst
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
        {/* Right Top Logo */}
        <div className="w-32 h-5 left-[431px] top-0 absolute overflow-hidden">
          <img src="/images/logo-main.svg" alt="Circle Logo" className="w-32 h-5 object-contain" />
        </div>
      </div>

      {/* Central illustration */}
      <div className="w-[595px] h-[539px] left-0 top-[85px] absolute overflow-hidden">
        <img src="/images/ill.svg" alt="Illustration" className="w-full h-full object-contain" />
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
          <div className="px-5 py-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-1" style={styles.card}>
            <div className="justify-start" style={{ whiteSpace: 'nowrap' }}>
              <span className="text-lg font-normal font-['Rooftop'] leading-none" style={styles.text}>
                We look forward to you joining our team 🙌 🎉
              </span>
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