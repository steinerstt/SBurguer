import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

  :root {
    --color-primary: #27AE60;

    --color-primary-alp-10: #27AE6010;


    --color-gray-600: #333333;
    --color-gray-500: #999999;
    --color-gray-300: #828282;
    --color-gray-200: #BDBDBD;
    --color-gray-100: #E0E0E0;
    --color-gray-0: #F5F5F5;

    --color-gray-600-alpha-50: #33333350;

    --color-white: #FFFFFF;
   
    --color-negative: #E60000;
    --color-sucess: #168821;

    --sz-title-1: 1.125rem;

    --sz-text-1: 1rem;
    --sz-text-2: 0.875rem;
    --sz-text-3: 0.75rem;

    --font-weg-1: 700;
    --font-weg-2: 600;
    --font-weg-3: 500;
    --font-weg-4: 400;

    --bd-radius-1: 0.5rem;
    --bd-radius-2: 0.3125rem;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    color: var(--color-gray-600);
  }

  &::-webkit-scrollbar {
    background-color: var(--color-primary-alp-10);
    height: 0.375rem;
    width: 0.375rem;
  }

  &::-webkit-scrollbar-track {
    color: var(--color-primary);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: var(--bd-radius-1);
  }
`;
