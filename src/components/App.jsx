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

  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  const handleDownloadClick = async () => {
    try {
      await downloadPdf();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="container mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Job Offer PDF Editor</h1>
          <p className="text-muted-foreground">Edit the fields below to customize the job offer</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-[1400px] mx-auto">
          {/* Form */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <JobOfferForm 
              formData={formData} 
              onChange={handleFormChange}
              onDownload={handleDownloadClick}
            />
          </div>

          {/* Preview */}
          <div className="w-full lg:w-[650px] flex-shrink-0">
            <JobOfferPreview 
              name={formData.name}
              jobData={formData.jobData}
              company={formData.company}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 