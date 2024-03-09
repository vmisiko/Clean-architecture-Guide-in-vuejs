/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#E1E1E1',
        'sidebg-f4': '#F4F4F4',
        'main': '#F2F2F2',
        'primary-red': '#FF0000',
        'ellipse-red': '#FEC7C7',
        'ellipse-gray': '#CACACA',
        'line-102': '#B9B9B9',
        'heading': '#636363',
        'normal-labels': '#6D6D6D',
        'success': '#CCEDCC',
        'gray-btn': '#F2f2f2',
        'sidebar-text': '#515151',
        'red-alert': '#FDE7E7',
        'disabled': "#F2f2f2",
        'gray-b': '#8B8B8B',
        "gray-download": "#7B7B7B",
        "gray-txt": "#656565",
        "gray-f3": '#F3F3F3',
        "pass": "#00A885",
        "intermediate": "#D5C704",
        "fail": "#F32433",
        "pass-2": "#C8FFE2",
        "intermediate-2": "#F9F5B8",
        "fail-2": "#FFE5E5",
        "warning-bg": '#FDF5D2',
        "warning-txt": '#756003',
        "fade": "#818181",
        "red-50": "#FEE7E7",
        primaryBg: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-bg), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-bg), var(${opacityVariable}, 1))`;
          }
          return 'rgba(var(--primary-bg), 1)';
        },
        secondaryBg: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--secondary-bg), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--secondary-bg), var(${opacityVariable}, 1))`;
          }
          return 'rgba(var(--secondary-bg), 1)';
        },
        tertiary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--tertiary), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--tertiary), var(${opacityVariable}, 1))`;
          }
          return 'rgba(var(--tertiary), 1)';
        },
      },
      borderColor: {
        'line-102': '#B9B9B9',
        'primary-red': '#EB2029',
      }
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    },
  },
  plugins: [],
}

