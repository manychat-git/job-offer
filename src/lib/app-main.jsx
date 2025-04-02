import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '../components/App';
import { preloadFonts } from './font-utils';

// Preload fonts for better rendering
preloadFonts();

// Убедимся, что документ имеет класс dark
document.documentElement.classList.add('dark');

// Initialize React App
document.addEventListener('DOMContentLoaded', () => {
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
}); 