import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />

      <GlobalStyle />
      <ToastContainer
        toastClassName="toast-container"
        bodyClassName="toast-container"
        newestOnTop
        position="top-center"
        autoClose={3000}
      />
    </BrowserRouter>
  );
}
