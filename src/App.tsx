import React from 'react';

import './assets/fonts';
import GlobalStyle from './styles/global';
import { QuoteProvider } from './hooks/quote';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <QuoteProvider>
        <Header />
        <Home />
        <Footer />
        <GlobalStyle />
      </QuoteProvider>
    </>
  );
};

export default App;
