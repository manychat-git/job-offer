import React from 'react';
import Logo from '../pdf/atoms/Logo';
import ManyIcon from '../pdf/atoms/ManyIcon';
import PageTitle from '../pdf/atoms/PageTitle';
import InfoRow from '../pdf/molecules/InfoRow';
import WelcomeMessage from '../pdf/molecules/WelcomeMessage';
import PageFooter from '../pdf/molecules/PageFooter';
import { colors } from '../../lib/styleConfig';
import { LOCATIONS } from '../../lib/constants';

const Page2 = ({ 
  name = "Name",
  jobData = {
    jobTitle: "",
    startDate: "",
    location: "",
    salary: "",
    currency: "EUR",
    probationPeriod: { value: "", isVisible: false },
    signInBonus: { value: "", isVisible: false },
    stockOptions: { value: "", isVisible: false },
    annualBonus: { value: "", isVisible: false }
  },
  pageNumber,
  totalPages
}) => {
  const styles = {
    page: {
      backgroundColor: colors.brand.vividOrange
    },
    heading: {
      color: colors.brand.amethyst
    },
    label: {
      color: colors.brand.vividOrange
    },
    border: {
      color: colors.brand.vividOrange
    }
  };

  const moneyValue = (amount, currency = jobData.currency) => (
    <div className="flex justify-start items-start gap-1">
      <div 
        className="justify-start text-lg font-normal font-['Rooftop'] leading-tight break-words"
        style={{ color: colors.brand.black }}
      >
        {amount}
      </div>
      <div 
        className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-tight break-words"
        style={{ color: colors.brand.black }}
      >
        {currency}
      </div>
    </div>
  );

  // Находим label локации по value
  const locationLabel = LOCATIONS.find(loc => loc.value === jobData.location)?.label || jobData.location;

  // Собираем все видимые строки
  const rows = [
    { label: "Job title", value: jobData.jobTitle },
    { label: "Start date", value: jobData.startDate },
    { label: "Location", value: locationLabel },
    { label: "Annual gross salary", valueComponent: moneyValue(jobData.salary) },
    jobData.probationPeriod.isVisible && { 
      label: "Probation period", 
      value: jobData.probationPeriod.value 
    },
    jobData.signInBonus.isVisible && { 
      label: "Sign-in bonus", 
      valueComponent: moneyValue(jobData.signInBonus.value)
    },
    jobData.stockOptions.isVisible && { 
      label: "Stock options", 
      value: jobData.stockOptions.value 
    },
    jobData.annualBonus.isVisible && { 
      label: "Annual bonus", 
      valueComponent: moneyValue(jobData.annualBonus.value)
    }
  ].filter(Boolean);

  return (
    <>
      <div className="self-stretch relative inline-flex justify-between items-start">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <PageTitle style={{ color: colors.brand.amethyst }}>
            Let's talk <br/>numbers
          </PageTitle>
        </div>
        <div className="left-[431px] top-0 absolute w-[124px] h-[22px]">
          <Logo />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
          <WelcomeMessage name={name} />
          
          <div className="self-stretch px-5 py-4 bg-white rounded-[32px] flex flex-col justify-start items-start">
            {rows.map((row, index) => (
              <InfoRow 
                key={row.label}
                label={row.label}
                value={row.value}
                valueComponent={row.valueComponent}
                isLast={index === rows.length - 1}
                labelColor={styles.page.backgroundColor}
                borderColor={styles.page.backgroundColor}
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

export default Page2;
