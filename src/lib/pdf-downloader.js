import { toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { getFontEmbedSettings } from './font-utils';

// Глобальная переменная для хранения текущей страницы во время генерации PDF
window.pdfCurrentPage = 1;

export async function downloadPdf() {
  try {
    const originalPage = window.pdfCurrentPage; // Запоминаем текущую страницу
    
    // Ensure fonts are loaded and ready before conversion
    await document.fonts.ready;
    
    // Get font settings to ensure proper embedding
    const fontSettings = getFontEmbedSettings();
    
    // Create PDF with A4 dimensions (210 x 297 mm)
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Вызываем событие для установки страницы
    const pdfPageChangeEvent = new CustomEvent('pdfPageChange');

    // Для каждой страницы
    for (let i = 1; i <= 5; i++) {
      // Устанавливаем глобальную переменную для текущей страницы
      window.pdfCurrentPage = i;
      
      // Вызываем событие, которое будет перехвачено в React-компоненте
      window.dispatchEvent(pdfPageChangeEvent);
      
      // Подождать, пока React обновит DOM
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Найти элемент страницы
      const pageElement = document.querySelector('.pdf-page');
      
      if (!pageElement) {
        console.error('PDF page element not found');
        return;
      }
      
      // Convert the HTML to high-quality JPEG
      const dataUrl = await toJpeg(pageElement, { 
        quality: 1.0, // Slightly reduced quality for better compression while maintaining high quality
        pixelRatio: 4,
        ...fontSettings
      });
      
      // Calculate aspect ratio to fit the image properly
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      // Add the image to PDF
      pdf.addImage(dataUrl, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      
      // Add new page if not last page
      if (i < 5) {
        pdf.addPage();
      }
    }
    
    // Восстанавливаем исходную страницу
    window.pdfCurrentPage = originalPage;
    window.dispatchEvent(pdfPageChangeEvent);
    
    // Get form data for filename
    const name = document.querySelector('[name="name"]')?.value || 'Unknown';
    const jobTitle = document.querySelector('[name="jobTitle"]')?.value || 'Unknown';
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0].replace(/-/g, '-');
    
    // Format filename
    const filename = `${name}_${jobTitle}_Offer_${formattedDate}.pdf`;
    
    // Download the PDF
    pdf.save(filename);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
} 