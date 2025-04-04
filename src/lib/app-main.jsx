import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { JobOfferForm } from '../components/JobOfferForm';
import { preloadFonts } from './font-utils';
import { downloadPdf } from './pdf-downloader.js';
import { ContentEditor } from '../components/ContentEditor';

// Убедимся, что документ имеет класс dark
document.documentElement.classList.add('dark');

// Initialize React App and PDF functionality
document.addEventListener('DOMContentLoaded', () => {
  // Initialize React App
  const container = document.getElementById('app-root');
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error('Container element #app-root not found');
  }

  // Initialize the PDF download button
  const downloadButton = document.getElementById('download-pdf-button');
  if (downloadButton) {
    downloadButton.addEventListener('click', async () => {
      // Show loading state
      const originalText = downloadButton.textContent;
      downloadButton.textContent = 'Generating PDF...';
      downloadButton.disabled = true;
      
      try {
        // Generate and download the PDF
        await downloadPdf();
      } finally {
        // Restore button state
        downloadButton.textContent = originalText;
        downloadButton.disabled = false;
      }
    });
  }
});

function App() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    // Загружаем шрифты
    preloadFonts();

    // Добавляем обработчик для кнопки Edit Content
    const editButton = document.getElementById('edit-content-button');
    if (editButton) {
      editButton.addEventListener('click', () => setIsEditorOpen(true));
    }

    return () => {
      if (editButton) {
        editButton.removeEventListener('click', () => setIsEditorOpen(true));
      }
    };
  }, []);

  return (
    <>
      <JobOfferForm />
      <ContentEditor open={isEditorOpen} onOpenChange={setIsEditorOpen} />
    </>
  );
} 