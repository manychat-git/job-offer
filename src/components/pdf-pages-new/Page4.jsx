import React from 'react';
import { colors } from '../../lib/styleConfig';
import { BENEFITS } from '../../lib/constants';
import BenefitCard from '../pdf/molecules/BenefitCard';
import Logo from '../pdf/atoms/Logo';
import ManyIcon from '../pdf/atoms/ManyIcon';
import PageFooter from '../pdf/molecules/PageFooter';
import PageTitle from '../pdf/atoms/PageTitle';

const Page4 = ({ pageNumber, totalPages, jobData }) => {
  const styles = {
    page: {
      backgroundColor: colors.brand.gold
    },
    heading: {
      color: colors.brand.sharpGreen
    }
  };

  // Получаем бенефиты для выбранной локации
  const locationBenefits = BENEFITS[jobData?.location] || BENEFITS.barcelona;

  // Создаем массив всех карточек, включая пустые для выравнивания
  const totalBenefits = locationBenefits.length;
  const totalRows = Math.ceil(totalBenefits / 3);
  const totalSlots = totalRows * 3;
  
  // Создаем массив с пустыми слотами
  const allCards = new Array(totalSlots).fill({ emoji: "", title: "", description: "" });
  
  // Заполняем слоты существующими бенефитами снизу вверх
  for (let i = 0; i < totalBenefits; i++) {
    const benefit = locationBenefits[i];
    // Размещаем карточки снизу вверх
    const position = totalSlots - totalBenefits + i;
    allCards[position] = benefit;
  }

  return (
    <>
      <div className="self-stretch relative inline-flex justify-between items-start">
        <div className="w-48 left-0 top-0 absolute">
          <PageTitle style={{ color: styles.heading.color }}>
            How we<br/>care
          </PageTitle>
        </div>
        <div className="left-[431px] top-0 absolute">
          <Logo />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
          <div className="self-stretch grid grid-cols-3 gap-0.5 justify-items-end">
            {allCards.map((benefit, index) => (
              <BenefitCard
                key={index}
                emoji={benefit.emoji}
                title={benefit.title}
                description={benefit.description}
                titleColor={styles.page.backgroundColor}
                className={!benefit.emoji ? 'invisible' : ''}
              />
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

export default Page4;

