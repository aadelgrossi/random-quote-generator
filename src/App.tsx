import React from 'react';

import './assets/fonts';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
