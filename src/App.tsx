import React, { useCallback } from 'react';

import './assets/fonts';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';
import { QuoteProvider } from './hooks/quote';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './hooks/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <QuoteProvider>
            <Header toggleTheme={toggleTheme} />
            <Routes />
          </QuoteProvider>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
