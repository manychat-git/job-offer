/**
 * Helper utility to ensure fonts are properly included in SVG exports
 */

// Define the fonts used in the application
const fonts = [
  {
    name: 'Manychat_Gravity',
    url: '/fonts/Manychat_Gravity.otf',
    format: 'opentype'
  },
  {
    name: 'Rooftop',
    url: '/fonts/Rooftop-Regular.ttf',
    format: 'truetype'
  },
  {
    name: 'CoFo_Sans_Mono',
    url: '/fonts/CoFoSansMono-Regular.woff2',
    format: 'woff2'
  },
  {
    name: 'Inter',
    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
    format: 'css'
  }
];

/**
 * Get font filter settings for html-to-image
 * This helps ensure fonts are properly embedded in SVG
 */
export function getFontEmbedSettings() {
  return {
    // Include all fonts used in the document
    fontEmbedding: true,
    // Don't filter any fonts out
    fontCallback: () => true,
    // Custom filter for elements to ensure quality
    filter: (node) => {
      // Keep all text and container elements for vector quality
      return true;
    }
  };
}

/**
 * Pre-load all fonts to ensure they're available for SVG export
 */
export function preloadFonts() {
  fonts.forEach(font => {
    if (font.format === 'css') {
      // For CSS imports, we don't need to do anything as they're loaded in the HTML
      return;
    }
    
    // For local fonts, explicitly load them
    const fontFace = new FontFace(font.name, `url(${font.url}) format('${font.format}')`);
    document.fonts.add(fontFace);
    fontFace.load().catch(err => console.error(`Failed to load font: ${font.name}`, err));
  });
} 