import React from 'react';
import { render, screen } from '@testing-library/react';

import AuthorQuotes from '../pages/AuthorQuotes';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    name: 'David Duchovny',
  }),
  useRouteMatch: () => ({ url: '/authors/David Duchovny' }),
}));

jest.mock('../hooks/quote.tsx', () => ({
  __esModule: true,
  useQuote: jest.fn().mockReturnValue({
    getAllFromAuthor: jest.fn(),
    quotesFromAuthor: [],
  }),
}));

describe('AuthorQuotes', () => {
  it('should be able show quotes for author in params', async () => {
    render(<AuthorQuotes />);

    expect(screen.getByText('David Duchovny')).toBeInTheDocument();
  });
});
