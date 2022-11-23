import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  body {
    font-family: "Inter", sans-serif;
  }

  :root {
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;

    --color-gray-100: #333333;
    --color-gray-50: #828282;
    --color-gray-20: #e0e0e0;
    --color-gray-0: #f5f5f5;
    --color-white: #ffffff;
    --color-black: #000000;

    --font-size-1: 1.625rem;
    --font-size-2: 1.375rem;
    --font-size-3: 1.125rem;
    --font-size-4: 1rem;
    --font-size-5: 0.875rem;
    --font-size-6: 0.75rem;

    --radius-1: 0.5rem;
    --radius-2: 0.3125rem;
  }

  .container {
    width: 100%;
    max-width: 87.5rem;
    margin: 0 auto;
    padding: 1rem;
  }

  .color-primary {
    color: var(--color-primary);
  }

  .bg-color-primary {
    background-color: var(--color-primary);
  }

  .color-primary-50 {
    color: var(--color-primary-50);
  }

  .bg-color-primary-50 {
    background-color: var(--color-primary-50);
  }

  .color-secondary {
    color: var(--color-secondary);
  }

  .bg-color-secondary {
    background-color: var(--color-secondary);
  }

  .color-gray-100 {
    color: var(--color-gray-100);
  }

  .bg-color-gray-100 {
    background-color: var(--color-gray-100);
  }

  .color-gray-50 {
    color: var(--color-gray-50);
  }

  .bg-color-gray-50 {
    background-color: var(--color-gray-50);
  }

  .color-gray-20 {
    color: var(--color-gray-20);
  }

  .bg-color-gray-20 {
    background-color: var(--color-gray-20);
  }

  .color-gray-0 {
    color: var(--color-gray-0);
  }

  .bg-color-gray-0 {
    background-color: var(--color-gray-0);
  }

  .title {
    font-weight: 700;
  }

  .title.title-1 {
    font-size: var(--font-size-1);
  }

  .title.title-2 {
    font-size: var(--font-size-2);
  }

  .title.title-3 {
    font-size: var(--font-size-3);
  }

  .title.title-4 {
    font-size: var(--font-size-5);
  }

  .text {
    font-weight: 400;
  }

  .text.text-1 {
    font-size: var(--font-size-4);
  }

  .text.text-2 {
    font-size: var(--font-size-5);
  }

  .text-bold {
    font-weight: 600;
    font-size: var(--font-size-5);
  }

  .text.text-3 {
    font-size: var(--font-size-6);
  }

`;
