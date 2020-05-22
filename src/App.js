import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
