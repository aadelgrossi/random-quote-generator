import axios from 'axios';

import { QuoteResponse } from '../dtos/QuotesResponse';

const api = axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v3/quotes',
});

const getRandom = async (): Promise<QuoteResponse> => {
  const { data } = await api.get<QuoteResponse>('/random');

  return data;
};

const getAuthorQuotes = async (authorName: string): Promise<QuoteResponse> => {
  const { data } = await api.get<QuoteResponse>(
    `?author=${authorName}&page=1&limit=5`,
  );

  return data;
};

export { getRandom, getAuthorQuotes, api };
