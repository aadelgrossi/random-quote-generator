import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

import api from '../services/api';

interface QuoteResponse {
  quote: {
    quoteAuthor: string;
    quoteGenre: string;
    quoteText: string;
  };
}
interface AuthorQuotesResponse {
  quotes: QuoteResponse[];
}

interface Quote {
  author: string;
  genre: string;
  text: string;
}

interface QuoteContextData {
  randomQuote: Quote;
  quotesFromAuthor: Quote[];
  getRandom(): void;
  getAllFromAuthor(author: string): void;
}

const QuoteContext = createContext<QuoteContextData>({} as QuoteContextData);

export const QuoteProvider: React.FC = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState<Quote>({} as Quote);
  const [quotesFromAuthor, setQuotesFromAuthor] = useState<Quote[]>(
    {} as Quote[],
  );

  const getRandom = useCallback(async () => {
    const response = await api.get<QuoteResponse>('/quotes/random');

    setRandomQuote({
      author: response.data.quote.quoteAuthor,
      genre: response.data.quote.quoteGenre,
      text: response.data.quote.quoteText,
    });
  }, []);

  const getAllFromAuthor = useCallback(async (author: string) => {
    const response = await api.get<AuthorQuotesResponse>(
      `/authors/${encodeURIComponent(author)}?page=1&limit=5`,
    );

    const mappedQuotesFromAuthor = response.data.quotes.map(
      (q: QuoteResponse) => {
        return {
          author: q.quote.quoteAuthor,
          genre: q.quote.quoteGenre,
          text: q.quote.quoteText,
        };
      },
    );

    setQuotesFromAuthor(mappedQuotesFromAuthor);
  }, []);

  useEffect(() => {
    getRandom();
  }, [getRandom]);

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