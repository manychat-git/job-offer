import React from 'react';
import { Button } from '../../ui/button.tsx';

const StickyBottomBar = ({ 
  currentPage, 
  totalPages, 
  onPrevPage, 
  onNextPage, 
  onDownload,
  isGenerating = false 
}) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-4 bg-[#18181B] rounded-lg px-4 py-3 shadow-lg">
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onPrevPage}
            disabled={currentPage === 1}
            className="h-8 w-8 text-white hover:bg-zinc-800"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </Button>

          <span className="text-sm font-medium text-white min-w-[40px] text-center">
            {currentPage}/{totalPages}
          </span>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            className="h-8 w-8 text-white hover:bg-zinc-800"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Button>
        </div>

        <div className="w-px h-6 bg-zinc-700 mx-2" />

        <Button 
          onClick={onDownload}
          variant="secondary"
          size="lg"
          className="bg-white text-black hover:bg-zinc-200 w-[160px] h-10"
        >
          {!isGenerating && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          )}
          {isGenerating ? 'Generating PDF...' : 'Download PDF'}
        </Button>
      </div>
    </div>
  );
};

export default StickyBottomBar; 