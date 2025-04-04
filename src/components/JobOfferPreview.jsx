import React, { useState, useEffect } from 'react';
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

import { Page1, Page2, Page3, Page4, Page5 } from './pdf-pages-new';
import PageContainer from './pdf/atoms/PageContainer';
import { CompanyProvider } from './pdf/molecules/PageFooter';

export function JobOfferPreview({ name = '', jobData = {}, company = 'manychat_sl' }) {
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

  // Добавляем обработку клавиатуры
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePreviousPage();
      } else if (event.key === 'ArrowRight') {
        handleNextPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
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
          <CompanyProvider company={company}>
            <PageContainer currentPage={currentPage}>
              {currentPage === 1 && <Page1 />}
              {currentPage === 2 && <Page2 name={name} jobData={jobData} pageNumber={currentPage} totalPages={totalPages} />}
              {currentPage === 3 && <Page3 pageNumber={currentPage} totalPages={totalPages} />}
              {currentPage === 4 && <Page4 jobData={jobData} pageNumber={currentPage} totalPages={totalPages} />}
              {currentPage === 5 && <Page5 pageNumber={currentPage} totalPages={totalPages} />}
            </PageContainer>
          </CompanyProvider>
        </div>
      </CardContent>
    </Card>
  );
} 