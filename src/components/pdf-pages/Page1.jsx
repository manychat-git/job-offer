import React from 'react';
import { colors } from '../../lib/styleConfig';

export function Page1() {
  const styles = {
    page: {
      backgroundColor: colors.brand.amethyst
    },
    jobOffer: {
      color: colors.brand.vividOrange
    },
    card: {
      backgroundColor: colors.brand.white
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
      <div className="w-[553px] justify-start text-[157px] font-black font-['Manychat_Gravity'] leading-[125.60px]" style={styles.jobOffer}>
        Job<br/>offer
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch h-24 relative overflow-hidden flex justify-center items-center">
          <img src="/images/logo-main.svg" alt="ManyChat Logo" className="w-full h-auto object-contain max-h-24" />
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
          </div>
        </div>
      </div>
    </>
  );
} 