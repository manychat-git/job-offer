import React from 'react';
import Logo from '../pdf/atoms/Logo';
import ManyIcon from '../pdf/atoms/ManyIcon';
import PageTitle from '../pdf/atoms/PageTitle';
import PageFooter from '../pdf/molecules/PageFooter';
import StatCard from '../pdf/molecules/StatCard';
import { colors } from '../../lib/styleConfig';

const Page3 = ({ 
  pageNumber,
  totalPages
}) => {
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

  const stats = [
    {
      title: "#1 Platform",
      description: "Manychat is the most used Chat Marketing Platform",
      margin: MARGIN_MULTIPLIER * 5
    },
    {
      title: "1B+ Conversations",
      description: "powered by Manychat in the last year",
      margin: MARGIN_MULTIPLIER * 4
    },
    {
      title: "200+ Top talents",
      description: "on the Manychat team",
      margin: MARGIN_MULTIPLIER * 3
    },
    {
      title: "1M+ Customers",
      description: "use Manychat for marketing, sales, and support",
      margin: MARGIN_MULTIPLIER * 2
    },
    {
      title: "170+ Countries",
      description: "use Manychat worldwide",
      margin: MARGIN_MULTIPLIER
    },
    {
      title: "Global team",
      description: "in Spain, Armenia, Netherlands, USA, and Brazil",
      margin: 0
    }
  ];

  return (
    <>
      <div className="self-stretch relative inline-flex justify-between items-start">
        <div className="w-48 left-0 top-0 absolute">
          <div className="text-7xl font-black font-['Manychat_Gravity'] leading-[62.80px]" style={{ color: colors.brand.thistle }}>
            Why<br/>join<br/>us?
          </div>
        </div>
        <div className="left-[431px] top-0 absolute w-[124px] h-[22px]">
          <Logo />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="self-stretch flex flex-col justify-start items-start"
              style={{ marginLeft: `${stat.margin}px` }}
            >
              <StatCard 
                title={stat.title}
                description={stat.description}
                titleColor={styles.page.backgroundColor}
              />
            </div>
          ))}
          
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
