import React from 'react';

import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { ThemeProvider } from 'styled-components';

import AuthorQuotes from '../pages/AuthorQuotes';
import { api } from '../services/api';
import light from '../styles/themes/light';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    name: 'David Duchovny',
  }),
  useRouteMatch: () => ({ url: '/authors/David Duchovny' }),
}));

const apiMock = new MockAdapter(api);

describe('AuthorQuotes', () => {
  it('should be able show author name in page received from params', async () => {
    const { getByText } = render(
      <ThemeProvider theme={light}>
        <AuthorQuotes />
      </ThemeProvider>,
    );

    expect(getByText('David Duchovny')).toBeInTheDocument();
  });

  it('should render author quotes', async () => {
    apiMock.onGet('/authors/David Duchovny?page=1&limit=5').replyOnce(200, {
      statusCode: 200,
      message: 'Quotes by David Duchovny',
      totalPages: 15619,
      currentPage: 1,
      quotes: [
        {
          _id: '5eb17aadb69dc744b4e70f1e',
          quoteText:
            'In this age of media and Internet access, we are much more talkative than ever before.',
          quoteAuthor: 'David Duchovny',
          quoteGenre: 'age',
        },
        {
          _id: '5eb17aadb69dc744b4e7156c',
          quoteText: "I think Polanski's an amazing director.",
          quoteAuthor: 'David Duchovny',
          quoteGenre: 'amazing',
        },
        {
          _id: '5eb17aaeb69dc744b4e72e23',
          quoteText: 'I drive an electric car.',
          quoteAuthor: 'David Duchovny',
          quoteGenre: 'car',
        },
      ],
    });

    const { findByText } = render(
      <ThemeProvider theme={light}>
        <AuthorQuotes />
      </ThemeProvider>,
    );

    expect(
      await findByText(
        'In this age of media and Internet access, we are much more talkative than ever before.',
      ),
    ).toBeInTheDocument();

    expect(
      await findByText("I think Polanski's an amazing director."),
    ).toBeInTheDocument();

    expect(await findByText('I drive an electric car.')).toBeInTheDocument();
  });
});
