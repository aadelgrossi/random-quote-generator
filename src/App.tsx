import React from 'react';

import './assets/fonts';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { QuoteProvider } from './hooks/quote';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <QuoteProvider>
          <Header />
          <Routes />
        </QuoteProvider>
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
