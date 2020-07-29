import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../services/api';

interface Quote {
  author: string;
  content: string;
  category: string;
}

interface QuoteContextData {
  randomQuote: Quote;
  quotesFromAuthor: Quote[];
  getRandom(): Promise<Quote>;
  getAllFromAuthor(author: string): Promise<Quote[]>;
}

const QuoteContext = createContext<QuoteContextData>({} as QuoteContextData);

export const QuoteProvider: React.FC = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState({} as Quote);
  const [quotesFromAuthor, setQuotesFromAuthor] = useState({} as Quote[]);

  const getRandom = useCallback(async () => {
    const response = await api.get('/quotes/random');

    setRandomQuote(response.data);

    return response.data;
  }, []);

  const getAllFromAuthor = useCallback(async (author: string) => {
    const response = await api.get(
      `/authors/${encodeURIComponent(author)}?page=1&limit=5`,
    );

    setQuotesFromAuthor(response.data);

    return response.data;
  }, []);

  return (
    <QuoteContext.Provider
      value={{ randomQuote, quotesFromAuthor, getRandom, getAllFromAuthor }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export function useQuote(): QuoteContextData {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error('useQuote must be used within QuoteProvider');
  }

  return context;
}
