interface QuoteResponseAttributes {
  _id: string;
  quoteAuthor: string;
  quoteGenre: string;
  quoteText: string;
}

interface QuoteResponse {
  quote: QuoteResponseAttributes;
}

interface AuthorQuotesResponse {
  quotes: QuoteResponseAttributes[];
}

export type { QuoteResponse, AuthorQuotesResponse };
