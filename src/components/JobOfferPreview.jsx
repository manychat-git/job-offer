import React, { useState, useEffect } from 'react';
import { colors } from '../lib/styleConfig';
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
import { Page1, Page2, Page3, Page4, Page5 } from './pdf-pages';

export function JobOfferPreview({ formData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // Эффект для отслеживания события изменения страницы при генерации PDF
  useEffect(() => {
    const handlePdfPageChange = () => {
      if (window.pdfCurrentPage) {
        setCurrentPage(window.pdfCurrentPage);
      }
    };

    window.addEventListener('pdfPageChange', handlePdfPageChange);
    
    return () => {
      window.removeEventListener('pdfPageChange', handlePdfPageChange);
    };
  }, []);

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
    // Для страницы 3 - данные о бенефитах
    if (pageNumber === 3) {
      return {
        healthInsurance: 'Full coverage',
        vacation: '25 days per year',
        equipment: 'Macbook Pro + accessories',
        learningBudget: '1000 EUR per year'
      };
    }
    // Для страницы 4 - данные о рабочей среде
    if (pageNumber === 4) {
      return {
        workingHours: 'Flexible, 40h per week',
        remoteWork: '100% remote possible',
        teamEvents: 'Quarterly team buildings',
        officePerks: 'Free snacks, drinks, and coffee'
      };
    }
    // Для страницы 5 - данные о следующих шагах
    if (pageNumber === 5) {
      return {
        offerDeadline: '14 days from receipt',
        contactPerson: 'HR Manager Name',
        contactEmail: 'hr@example.com'
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

  // Определение background цвета страницы
  const pageStyle = {
    backgroundColor: currentPage === 1 
      ? colors.brand.amethyst 
      : currentPage === 3
        ? colors.brand.currant
        : currentPage === 4
          ? colors.brand.gold  // Использовать gold для страницы 4
          : currentPage === 5
            ? colors.brand.amethyst
            : colors.brand.vividOrange
  };

  return (
    <Card className="w-full shadow-xl">
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
            <span className="text-sm w-10 text-center">{currentPage}/{totalPages}</span>
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
        <div>
          <div 
            className="w-[595px] h-[842px] p-5 inline-flex flex-col justify-between items-start relative pdf-page" 
            style={pageStyle}
            data-preview-page
            data-current-page={currentPage}
          >
            {currentPage === 1 && <Page1 />}
            {currentPage === 2 && <Page2 pageData={pageData} />}
            {currentPage === 3 && <Page3 pageNumber={currentPage} totalPages={totalPages} pageData={pageData} />}
            {currentPage === 4 && <Page4 pageNumber={currentPage} totalPages={totalPages} pageData={pageData} />}
            {currentPage === 5 && <Page5 pageNumber={currentPage} totalPages={totalPages} pageData={pageData} />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 