import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

import api from '../services/api';

import { QuoteResponse, AuthorQuotesResponse } from './dtos/QuotesResponse';

interface Quote {
  id: string;
  author: string;
  genre: string;
  text: string;
}

interface QuoteContextData {
  randomQuote: Quote;
  quotesFromAuthor: Quote[];
  loading: boolean;
  getRandom(): void;
  getAllFromAuthor(author: string): void;
}

const QuoteContext = createContext<QuoteContextData>({} as QuoteContextData);

export const QuoteProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [randomQuote, setRandomQuote] = useState<Quote>({} as Quote);
  const [currentAuthor, setCurrentAuthor] = useState('');
  const [quotesFromAuthor, setQuotesFromAuthor] = useState<Quote[]>(
    [] as Quote[],
  );

  const getRandom = useCallback(async () => {
    setLoading(true);
    const response = await api.get<QuoteResponse>('/quotes/random');

    setRandomQuote({
      id: response.data.quote._id,
      author: response.data.quote.quoteAuthor,
      genre: response.data.quote.quoteGenre,
      text: response.data.quote.quoteText,
    });

    setQuotesFromAuthor([]);
    setLoading(false);
  }, []);

  const getAllFromAuthor = useCallback(
    async (author: string) => {
      setLoading(true);

      if (currentAuthor !== author) {
        const response = await api.get<AuthorQuotesResponse>(
          `/authors/${author}?page=1&limit=5`,
        );
        const mappedQuotesFromAuthor = response.data.quotes.map(quote => {
          return {
            id: quote._id,
            author: quote.quoteAuthor,
            genre: quote.quoteGenre,
            text: quote.quoteText,
          };
        });

        setCurrentAuthor(author);
        setQuotesFromAuthor(mappedQuotesFromAuthor);
      }

      setLoading(false);
    },
    [currentAuthor],
  );

  useEffect(() => {
    setLoading(true);
    getRandom();
    setLoading(false);
  }, [getRandom]);

  return (
    <QuoteContext.Provider
      value={{
        randomQuote,
        quotesFromAuthor,
        loading,
        getRandom,
        getAllFromAuthor,
      }}
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
