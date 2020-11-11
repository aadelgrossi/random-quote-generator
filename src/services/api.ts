import axios from 'axios';

import { AuthorQuotesResponse, QuoteResponse } from '../dtos/QuotesResponse';

const api = axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v2',
});

const getRandom = async (): Promise<QuoteResponse> => {
  const response = await api.get<QuoteResponse>('/quotes/random');

  return response.data;
};

const getAuthorQuotes = async (
  authorName: string,
): Promise<AuthorQuotesResponse> => {
  const response = await api.get<AuthorQuotesResponse>(
    `/authors/${authorName}?page=1&limit=5`,
  );

  return response.data;
};

export { getRandom, getAuthorQuotes, api };
