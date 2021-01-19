import React from 'react';

import './assets/fonts';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { Footer } from './components';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <SWRConfig
            value={{
              revalidateOnFocus: false,
              dedupingInterval: 0,
            }}
          >
            <Routes />
            <Footer />
          </SWRConfig>
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
