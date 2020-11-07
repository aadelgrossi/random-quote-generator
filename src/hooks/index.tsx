import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QuoteProvider } from './quote';
import light from '../styles/themes/light';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <QuoteProvider>{children}</QuoteProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
