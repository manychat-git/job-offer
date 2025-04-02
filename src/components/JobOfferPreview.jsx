import React, { useState } from 'react';
import { typography, colors, components } from '../lib/styleConfig';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export function JobOfferPreview({ formData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  // Определяем, какие данные показывать на текущей странице
  const getPageData = (pageNumber) => {
    if (pageNumber === 2) {
      // Только вторая страница использует данные из формы
      return {
        name: formData.name || 'Friend',
        jobTitle: formData.jobTitle || 'Frontend Engineer',
        startDate: formData.startDate || 'January 2025',
        location: formData.location || 'Barcelona, Spain',
        salary: formData.salary || '000 EUR',
        probationPeriod: formData.probationPeriod || '3 months'
      };
    }
    // Остальные страницы используют статичные данные
    return {
      name: 'Example Name',
      jobTitle: 'Example Position',
      startDate: 'Example Date',
      location: 'Example Location',
      salary: 'Example Salary',
      probationPeriod: 'Example Period'
    };
  };

  const pageData = getPageData(currentPage);

  // Создаем CSS переменные из цветов библиотеки для использования в inline стилях
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
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Preview</CardTitle>
        <Pagination className="ml-auto">
          <PaginationContent className="flex items-center gap-2">
            <PaginationItem>
              <PaginationPrevious 
                className="h-8 w-8 p-0" 
                aria-label="Previous page" 
                onClick={handlePreviousPage}
              />
            </PaginationItem>
            <span className="text-sm">{currentPage}/{totalPages}</span>
            <PaginationItem>
              <PaginationNext 
                className="h-8 w-8 p-0" 
                aria-label="Next page" 
                onClick={handleNextPage}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardHeader>
      <CardContent className="p-6">
        <div 
          className="w-[595px] h-[842px] p-5 inline-flex flex-col justify-between items-start relative pdf-page" 
          style={styles.page}
          data-preview-page
          data-current-page={currentPage}
        >
          {/* components.container.page */}
          <div className="self-stretch relative inline-flex justify-between items-start">
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="justify-start text-7xl font-black font-['Manychat_Gravity'] leading-[62.80px]" style={styles.heading}>
                {/* typography.headings.greeting */}
                Hello,
              </div>
              <div className="self-stretch justify-start text-7xl font-black font-['Manychat_Gravity'] leading-[62.80px]" style={styles.heading}>
                {/* typography.headings.greeting */}
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
                {/* components.container.card */}
                <div className="self-stretch justify-start text-base font-normal font-['Rooftop'] leading-none" style={styles.text}>👋</div>
                <div className="self-stretch justify-start">
                  <span className="text-lg font-normal font-['Rooftop'] leading-tight" style={styles.text}>
                    {/* typography.text.greeting */}
                    We're excited to bring you on board!
                  </span>
                  <span className="text-base font-normal font-['Rooftop'] leading-none" style={styles.text}> 🎉<br/></span>
                  <span className="text-lg font-normal font-['Rooftop'] leading-tight" style={styles.text}>
                    {/* typography.text.greeting */}
                    Here are the details of your job offer.
                  </span>
                </div>
              </div>

              <div className="self-stretch px-5 py-4 rounded-3xl flex flex-col justify-start items-start" style={styles.card}>
                {/* components.container.card */}
                <div className="self-stretch border-b inline-flex justify-start items-center" style={styles.border}>
                  <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                    {/* typography.text.label */}
                    Job title
                  </div>
                  <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                    {/* typography.text.value */}
                    {pageData.jobTitle}
                  </div>
                </div>
                <div className="self-stretch border-b inline-flex justify-start items-center" style={styles.border}>
                  <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                    {/* typography.text.label */}
                    Start date
                  </div>
                  <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                    {/* typography.text.value */}
                    {pageData.startDate}
                  </div>
                </div>
                <div className="self-stretch border-b inline-flex justify-start items-center" style={styles.border}>
                  <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                    {/* typography.text.label */}
                    Location
                  </div>
                  <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                    {/* typography.text.value */}
                    {pageData.location}
                  </div>
                </div>
                <div className="self-stretch border-b inline-flex justify-start items-center" style={styles.border}>
                  <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                    {/* typography.text.label */}
                    Annual gross salary
                  </div>
                  <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                    {/* typography.text.value */}
                    {pageData.salary}
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center" style={styles.border}>
                  <div className="w-64 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.label}>
                    {/* typography.text.label */}
                    Probation period
                  </div>
                  <div className="flex-1 justify-start text-lg font-normal font-['Rooftop'] leading-9" style={styles.text}>
                    {/* typography.text.value */}
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
                      {/* typography.text.footer */}
                      JOB OFFER
                    </div>
                    <div className="justify-start text-xs font-normal font-['CoFo_Sans_Mono'] uppercase leading-3" style={styles.footer}>
                      {/* typography.text.footer */}
                      ManyChat S.L.
                    </div>
                  </div>
                  <div className="w-48 justify-start text-[8px] font-normal font-['Rooftop'] leading-3" style={styles.footer}>
                    {/* typography.text.small */}
                    Any information provided to you as part of this job offer is confidential and not subject to distribution.
                  </div>
                </div>
                <div className="justify-start text-xs font-normal font-['CoFo_Sans_Mono'] uppercase leading-3" style={styles.footer}>
                  {currentPage}/{totalPages}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 