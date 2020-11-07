/* eslint-disable react/display-name */
/* eslint-disable import/order */
/* eslint-disable import/first */

import React, { ReactElement } from 'react';

import { render } from '@testing-library/react';
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
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';

interface QuoteAttributes {
  id: string;
  author: string;
  genre: string;
  text: string;
}

const useQuoteMocked = mocked(useQuote);

const mountWithTheme = (child: ReactElement) => {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    ),
  });
};
describe('AuthorQuotes', () => {
  it('should be able show quotes for author in params', async () => {
    const { getByText } = render(
      <ThemeProvider theme={light}>
        <AuthorQuotes />
      </ThemeProvider>,
    );

    expect(getByText('David Duchovny')).toBeInTheDocument();
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

    const wrapper = mountWithTheme(<AuthorQuotes />);
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
