import React, { useState } from 'react';
import { JobOfferForm } from './JobOfferForm';
import { JobOfferPreview } from './JobOfferPreview';
import { downloadPdf } from '../lib/pdf-downloader';
import { colors } from '../lib/styleConfig';

export function App() {
  const [formData, setFormData] = useState({
    name: '',
    company: 'manychat_sl',
    jobData: {
      jobTitle: 'Frontend Engineer',
      startDate: 'January 2025',
      location: 'barcelona',
      salary: '000',
      currency: 'EUR',
      probationPeriod: { value: '3 months', isVisible: true },
      signInBonus: { value: '000', isVisible: false },
      stockOptions: { value: 'Value', isVisible: false },
      annualBonus: { value: '000', isVisible: false }
    }
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  const handleDownloadClick = async () => {
    try {
      setIsGenerating(true);
      await downloadPdf();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-[1400px] mx-auto">
          {/* Preview */}
          <div className="w-full lg:w-[650px] flex-shrink-0">
            <JobOfferPreview 
              name={formData.name}
              jobData={formData.jobData}
              company={formData.company}
              onDownload={handleDownloadClick}
              isGenerating={isGenerating}
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <JobOfferForm 
              formData={formData} 
              onChange={handleFormChange}
              onDownload={handleDownloadClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 