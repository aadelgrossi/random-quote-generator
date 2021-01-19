interface QuoteItemResponse {
  _id: string;
  quoteAuthor: string;
  quoteGenre: string;
  quoteText: string;
}

export interface QuoteResponse {
  data: QuoteItemResponse[];
}
