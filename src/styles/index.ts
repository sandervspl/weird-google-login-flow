import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.notoSans};
    background-color: ${({ theme }) => theme.colors.white.medium};
    height: 100%;
  }

  #__next {
    height: 100%;
    overflow: auto;
  }

  .Toastify__toast-container {
    width: 450px;
  }

  .Toastify__toast {
    border-radius: 4px;
  }

  .Toastify__toast-body {
    margin: auto 10px;
    color: ${({ theme }) => theme.colors.white};
  }

  .Toastify__toast--error {
    background-color: ${({ theme }) => theme.colors.red};
  }

  .Toastify__toast--success {
    background-color: ${({ theme }) => theme.colors.green};
  }

  .Toastify__toast--warning .Toastify__toast-body {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default globalStyle;
