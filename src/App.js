import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Scrollbar from 'react-perfect-scrollbar';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Scrollbar>
        <Routes />
      </Scrollbar>

      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}
