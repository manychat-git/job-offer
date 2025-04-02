import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { getFontEmbedSettings } from './font-utils';

export async function downloadPdf() {
  try {
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

    // Для каждой страницы
    for (let i = 1; i <= 5; i++) {
      // Найти элемент страницы
      const pageElement = document.querySelector('.pdf-page');
      
      if (!pageElement) {
        console.error('PDF page element not found');
        return;
      }

      // Временно изменить данные страницы для конвертации
      const previewComponent = document.querySelector('[data-preview-page]');
      if (previewComponent) {
        previewComponent.setAttribute('data-current-page', i);
      }
      
      // Подождать, пока React обновит DOM
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Convert the HTML to high-quality PNG
      const dataUrl = await toPng(pageElement, { 
        quality: 1.0,
        pixelRatio: 4,
        ...fontSettings
      });
      
      // Calculate aspect ratio to fit the image properly
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      // Add the image to PDF
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Add new page if not last page
      if (i < 5) {
        pdf.addPage();
      }
    }

    // Вернуть атрибут текущей страницы в исходное состояние
    const previewComponent = document.querySelector('[data-preview-page]');
    if (previewComponent) {
      previewComponent.setAttribute('data-current-page', '1');
    }
    
    // Download the PDF
    pdf.save('job-offer.pdf');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
} 