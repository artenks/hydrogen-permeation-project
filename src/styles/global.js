import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
  body {
    -webkit-font-smoothing: antialiased;

    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  .Toastify__toast.Toastify__toast--error.toast-container,
  .Toastify__toast.Toastify__toast--success.toast-container {
    border-radius: 4px !important;
    padding: 15px !important;
  }
  .Toastify__toast.Toastify__toast--error.toast-container.Toastify__toast--error {
    background: #de3b3b;
  }
`;
