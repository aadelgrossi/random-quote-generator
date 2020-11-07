import React from 'react';
import { QuoteProvider } from './quote';

const AppProvider: React.FC = ({ children }) => {
  return <QuoteProvider>{children}</QuoteProvider>;
};

export default AppProvider;
