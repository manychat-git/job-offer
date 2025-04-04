/**
 * Центральная библиотека стилей для использования во всем приложении
 * Содержит настройки типографики и цветовой палитры
 */

// Типографика - шрифты, размеры, высота строк
export const typography = {
  // Шрифты
  fonts: {
    manychatGravity: "Manychat_Gravity, sans-serif",
    rooftop: "Rooftop, sans-serif",
    cofoSansMono: "CoFo_Sans_Mono, monospace",
    inter: "Inter, sans-serif",
  },
  
  // Заголовки
  headings: {
    h1: {
      fontFamily: "Manychat_Gravity, sans-serif",
      fontSize: "5rem", // text-7xl
      fontWeight: 900,
      lineHeight: "62.80px",
    },
    greeting: {
      fontFamily: "Manychat_Gravity, sans-serif",
      fontSize: "5rem", // text-7xl
      fontWeight: 900,
      lineHeight: "62.80px",
    }
  },
  
  // Текст
  text: {
    label: {
      fontFamily: "Rooftop, sans-serif",
      fontSize: "1.125rem", // text-lg
      fontWeight: 400,
      lineHeight: "2.25rem", // leading-9
    },
    value: {
      fontFamily: "Rooftop, sans-serif",
      fontSize: "1.125rem", // text-lg
      fontWeight: 400,
      lineHeight: "2.25rem", // leading-9
    },
    greeting: {
      fontFamily: "Rooftop, sans-serif",
      fontSize: "1.125rem", // text-lg
      fontWeight: 400,
      lineHeight: "1.25rem", // leading-tight
    },
    footer: {
      fontFamily: "CoFo_Sans_Mono, monospace",
      fontSize: "0.75rem", // text-xs
      fontWeight: 400,
      lineHeight: "0.75rem", // leading-3
      textTransform: "uppercase",
    },
    small: {
      fontFamily: "Rooftop, sans-serif",
      fontSize: "0.5rem", // text-[8px]
      fontWeight: 400,
      lineHeight: "0.75rem", // leading-3
    },
  }
};

// Цветовая палитра
export const colors = {
  // Основные цвета дизайна
  brand: {
    black: "#000000",
    white: "#FFFFFF",
    amethyst: "#7B34CE",
    vividOrange: "#FF4B00",
    gold: "#C18900",
    cobalt: "#3B42C4",
    sharpGreen: "#00F613",
    thistle: "#D2B6DE",
    currant: "#BC1E5D"
  },
  
  // Основные цвета (сохранены для совместимости)
  primary: {
    orange: "#EA580C", // bg-orange-600
    purple: "#6D28D9", // text-purple-700
    indigo: "#4338CA", // border-indigo-700
  },
  
  // Нейтральные цвета
  neutral: {
    white: "#FFFFFF",
    black: "#000000",
  },
  
  // Акцентные цвета для UI
  ui: {
    blue: "#2563EB", // bg-blue-600
    hoverBlue: "#1D4ED8", // bg-blue-700
    gray: {
      100: "#F1F5F9", // bg-slate-100
      800: "#1E293B", // text-gray-800
      600: "#475569", // text-gray-600
    },
  },
};

// Конфигурация компонентов
export const components = {
  // Кнопки
  button: {
    primary: {
      backgroundColor: colors.ui.blue,
      hoverColor: colors.ui.hoverBlue,
      textColor: colors.neutral.white,
      fontSize: "0.875rem", // text-sm
      fontWeight: 500,
      padding: "0.5rem 1.25rem", // py-2 px-6
      borderRadius: "0.375rem", // rounded-md
    },
  },
  
  // Контейнеры
  container: {
    page: {
      width: "595px",
      height: "842px",
      padding: "1.25rem", // p-5
      backgroundColor: colors.primary.orange,
    },
    card: {
      backgroundColor: colors.neutral.white,
      borderRadius: "0.5rem", // rounded-lg
      padding: {
        x: "1.25rem", // px-5
        y: "1rem", // py-4
      },
    },
  },

  // PDF компоненты
  pdf: {
    // Базовый контейнер страницы PDF
    pageContainer: {
      width: "595px",
      height: "842px",
      backgroundColor: colors.brand.white,
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
    },
    
    // Специфичные стили для первой страницы
    page1: {
      container: {
        width: "595px",
        height: "842px",
        padding: "1.25rem",
        backgroundColor: colors.brand.amethyst,
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
      title: {
        width: "553px",
        color: colors.brand.vividOrange,
        fontSize: "157px",
        fontFamily: typography.fonts.manychatGravity,
        fontWeight: 900,
        lineHeight: "125.60px",
      },
      footer: {
        text: {
          color: colors.brand.white,
          fontSize: "0.75rem",
          fontFamily: typography.fonts.cofoSansMono,
          lineHeight: "0.75rem",
          textTransform: "uppercase",
        },
        confidential: {
          color: colors.brand.white,
          fontSize: "0.5rem",
          fontFamily: typography.fonts.rooftop,
          lineHeight: "0.75rem",
        },
        divider: {
          stroke: colors.brand.white,
          strokeWidth: "0.664725",
        }
      }
    },
    
    // Заголовок страницы PDF
    pageTitle: {
      fontFamily: typography.fonts.manychatGravity,
      fontSize: "2.5rem",
      fontWeight: 900,
      color: colors.brand.black,
      marginBottom: "1.5rem",
    },

    // Информационная карточка
    infoCard: {
      backgroundColor: colors.brand.white,
      border: `1px solid ${colors.brand.black}`,
      borderRadius: "0.5rem",
      padding: "1rem",
      marginBottom: "1rem",
    },

    // Строка с данными
    dataRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "0.5rem",
      fontFamily: typography.fonts.rooftop,
      fontSize: "1rem",
    },

    // Футер страницы PDF
    pageFooter: {
      marginTop: "auto",
      fontFamily: typography.fonts.cofoSansMono,
      fontSize: "0.75rem",
      color: colors.brand.black,
      textTransform: "uppercase",
    },
  },
};

/**
 * Утилиты для преобразования конфигурации в Tailwind-классы
 * (Можно расширить в будущем для автоматической генерации классов)
 */
export const getTailwindClasses = {
  // Пример преобразования конфигурации кнопки в классы Tailwind
  primaryButton: () => `
    bg-blue-600 
    hover:bg-blue-700 
    text-white 
    font-medium 
    py-2 
    px-6 
    rounded-md 
    transition-colors
  `.replace(/\s+/g, ' ').trim(),
}; 