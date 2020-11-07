/* eslint-disable import/order */
/* eslint-disable import/first */

import React from 'react';

import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import AuthorQuotes from '../pages/AuthorQuotes';
import Quote from '../components/Quote';

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

import { useQuote } from '../hooks/quote';

interface QuoteAttributes {
  id: string;
  author: string;
  genre: string;
  text: string;
}

const useQuoteMocked = mocked(useQuote);

describe('AuthorQuotes', () => {
  it('should be able show quotes for author in params', async () => {
    render(<AuthorQuotes />);

    expect(screen.getByText('David Duchovny')).toBeInTheDocument();
  });

  it('should render author quotes', () => {
    useQuoteMocked.mockReturnValue({
      getAllFromAuthor: jest.fn(),
      getRandom: jest.fn(),
      loading: false,
      randomQuote: {} as QuoteAttributes,
      quotesFromAuthor: [
        {
          id: '5eb17aadb69dc744b4e70f1e',
          text:
            'In this age of media and Internet access, we are much more talkative than ever before.',
          author: 'David Duchovny',
          genre: 'age',
        },
        {
          id: '5eb17aadb69dc744b4e7156c',
          text: "I think Polanski's an amazing director.",
          author: 'David Duchovny',
          genre: 'amazing',
        },
        {
          id: '5eb17aaeb69dc744b4e72e23',
          text: 'I drive an electric car.',
          author: 'David Duchovny',
          genre: 'car',
        },
      ],
    });

    const wrapper = mount(<AuthorQuotes />);
    expect(wrapper.find(Quote).length).toBe(3);

    expect(wrapper.find(Quote).at(0).text()).toContain(
      'In this age of media and Internet access, we are much more talkative than ever before.',
    );
    expect(wrapper.find(Quote).at(1).text()).toContain(
      "I think Polanski's an amazing director.",
    );
    expect(wrapper.find(Quote).at(2).text()).toContain(
      'I drive an electric car.',
    );
  });
});
