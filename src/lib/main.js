import { downloadPdf } from './pdf-downloader.js';
import { preloadFonts } from './font-utils.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Preload fonts for better SVG generation
  preloadFonts();
  
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