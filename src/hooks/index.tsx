import React from 'react';

import { QuoteProvider } from './quote';
import { Theme } from './theme';

const AppProvider: React.FC = ({ children }) => (
  <Theme>
    <QuoteProvider> {children} </QuoteProvider>
  </Theme>
);

export default AppProvider;
