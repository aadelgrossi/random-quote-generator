import React from 'react';

import './assets/fonts';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
          <Footer />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
