import React from 'react';

import './assets/fonts';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Header />
          <Routes />
        </AppProvider>
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
