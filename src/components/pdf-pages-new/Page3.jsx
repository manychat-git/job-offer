import React from 'react';
import { colors } from '../../lib/styleConfig';
import { STATISTICS } from '../../lib/constants';
import StatCard from '../pdf/molecules/StatCard';
import Logo from '../pdf/atoms/Logo';
import ManyIcon from '../pdf/atoms/ManyIcon';
import PageTitle from '../pdf/atoms/PageTitle';
import PageFooter from '../pdf/molecules/PageFooter';

const Page3 = ({ pageNumber, totalPages }) => {
  const MARGIN_MULTIPLIER = 62; // базовый отступ в пикселях

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

  // Вычисляем отступы для каждой карточки
  const margins = [
    MARGIN_MULTIPLIER * 5,
    MARGIN_MULTIPLIER * 4,
    MARGIN_MULTIPLIER * 3,
    MARGIN_MULTIPLIER * 2,
    MARGIN_MULTIPLIER,
    0
  ];

  return (
    <>
      <div className="self-stretch relative inline-flex justify-between items-start">
        <div className="w-48 left-0 top-0 absolute">
          <PageTitle style={{ color: colors.brand.thistle }}>
            Why<br/>join<br/>us?
          </PageTitle>
        </div>
        <div className="left-[431px] top-0 absolute w-[124px] h-[22px]">
          <Logo />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
          <div className="self-stretch flex flex-col justify-start items-start gap-px">
            {STATISTICS.map((stat, index) => (
              <div 
                key={index} 
                className="self-stretch flex flex-col justify-start items-start"
                style={{ marginLeft: `${margins[index]}px` }}
              >
                <StatCard
                  title={stat.title}
                  description={stat.description}
                  titleColor={styles.page.backgroundColor}
                />
              </div>
            ))}
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
    </>
  );
};

export default Page3;
