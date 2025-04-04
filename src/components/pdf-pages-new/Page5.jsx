import React from 'react';
import { colors } from '../../lib/styleConfig';
import Logo from '../pdf/atoms/Logo';
import ManyIcon from '../pdf/atoms/ManyIcon';
import PageFooter from '../pdf/molecules/PageFooter';

const Page5 = ({ pageNumber, totalPages }) => {
  const styles = {
    page: {
      backgroundColor: colors.brand.amethyst
    },
    heading: {
      color: colors.brand.amethyst
    }
  };

  return (
    <>
      <div className="self-stretch relative inline-flex justify-between items-start">
        <div className="left-[431px] top-0 absolute">
          <Logo />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
          <div className="px-5 py-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-1">
            <div className="w-96 justify-start text-black text-lg font-normal font-['Rooftop'] leading-tight">
              We're looking forward to you joining!  🎉<br/>Now, it's your move. 🙌
            </div>
          </div>
          
          <div className="w-[48px] h-[48px]">
            <ManyIcon />
          </div>
        </div>

        <PageFooter 
          showPagination={true} 
          currentPage={pageNumber} 
          totalPages={totalPages} 
        />
      </div>

      <div className="left-0 top-[80px] absolute">
        <svg width="595" height="539" viewBox="0 0 595 539" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_14_393)">
            <path d="M256.114 215.639L252.978 207.353C250.447 207.241 248.032 206.26 246.142 204.574C244.252 202.889 243.002 200.604 242.603 198.104C242.204 195.604 242.681 193.043 243.953 190.854C245.225 188.665 247.215 186.982 249.585 186.088C251.955 185.195 254.562 185.147 256.963 185.952C259.365 186.756 261.416 188.365 262.768 190.505C264.12 192.646 264.691 195.187 264.385 197.7C264.079 200.213 262.914 202.543 261.088 204.297L264.08 212.497C264.08 212.497 316.896 229.885 329.368 262.916C341.839 295.947 315.075 309.244 315.075 309.244L321.965 334.086L354.429 338.997L353.328 347.934L331.214 357.086L366.864 417.866L382.12 420.638L384.533 427.024L378.5 435.784C387.584 450.189 417.804 455.024 417.804 455.024L420.941 463.31L412.009 471.489L423.803 474.081L434.957 489.317L310.584 536.2L308.889 517.375L316.044 507.698L304.035 507.378L300.899 499.092C300.899 499.092 320.414 475.519 317.696 458.632L307.395 456.037L304.981 449.651L314.606 437.521L301.111 368.426L278.461 376.159L271.727 370.172L292.847 345.051L281.604 321.845C281.604 321.845 252.72 329.488 240.273 296.479C227.826 263.471 256.114 215.639 256.114 215.639Z" fill="white"/>
            <path d="M-322.032 100.23C-322.032 100.23 31.2128 14.7851 97.6827 19.6955C164.153 24.6059 263.736 56.9469 263.736 56.9469C263.736 56.9469 323.605 56.7254 360.113 63.1066C396.622 69.4878 439.901 61.9073 454.292 59.3822C456.034 76.5632 443.047 88.9904 432.326 92.2551C424.984 94.3218 417.444 95.6029 409.832 96.0768L493.506 172.783C487.463 177.695 480.053 180.621 472.286 181.163C464.52 181.706 456.775 179.837 450.108 175.812C434.243 166.62 377.523 120.364 377.523 120.364L463.293 241.451C463.293 241.451 423.965 253.374 404.392 224.379C384.819 195.385 376.005 182.189 376.005 182.189L295.426 129.829L338.072 166.784L341.144 284.677C341.144 284.677 307.439 281.795 303.982 248.373C300.524 214.95 294.574 184.367 294.574 184.367C294.574 184.367 225.047 154.188 207.391 145.962C189.736 137.735 179.719 173.659 200.75 195.328C221.781 216.997 269.144 278.157 251.883 314.54C214.596 279.487 175.114 246.85 133.676 216.828C133.676 216.828 95.0285 131.556 1.73797 153.382C-49.3007 185.842 -269.417 321.965 -269.417 321.965L-322.032 100.23Z" fill={colors.brand.vividOrange}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M251.917 314.507C247.417 310.579 243.236 304.842 240.099 296.523C234.717 282.249 236.951 265.204 241.222 250.453C253.194 272.69 260.37 296.592 251.917 314.507ZM302.051 231.785C313.539 239.775 324.376 250.2 329.193 262.959C332.072 270.583 332.86 277.155 332.37 282.755C322.13 279.447 306.296 270.754 303.984 248.407C303.398 242.74 302.74 237.154 302.051 231.785Z" fill={colors.brand.amethyst}/>
          </g>
          <defs>
            <clipPath id="clip0_14_393">
              <rect width="595" height="539" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Page5;
