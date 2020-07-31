import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import api from '../services/api';
import App from '../App';

const apiMock = new MockAdapter(api);

const wait = (amount = 0): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, amount));
};

const actWait = async (amount = 0): Promise<void> => {
  await act(async () => {
    await wait(amount);
  });
};

describe('Home', () => {
  it('should be able to render a random quote', async () => {
    const { getByTestId } = render(<App />);

    apiMock.onGet('/quotes/random').reply(200, {
      statusCode: 200,
      quote: {
        _id: '5eb17ab3b69dc744b4e80ba5',
        quoteText:
          "They just didn't have the sense of the strength of their vote. Just thought it wasn't necessary.",
        quoteAuthor: 'Charles Phillips',
        quoteGenre: 'strength',
        __v: 0,
      },
    });

    await actWait();

    expect(getByTestId('quote-content')).toHaveTextContent(
      "They just didn't have the sense of the strength of their vote. Just thought it wasn't necessary.",
    );
    expect(getByTestId('quote-author')).toHaveTextContent('Charles Phillips');
    expect(getByTestId('quote-genre')).toHaveTextContent('strength');
  });

  it('should be able to navigate to author quotes page', async () => {
    const { getByTestId } = render(<App />);

    apiMock.onGet('/quotes/random').reply(200, {
      statusCode: 200,
      quote: {
        _id: '5eb17ab3b69dc744b4e80ba5',
        quoteText:
          "They just didn't have the sense of the strength of their vote. Just thought it wasn't necessary.",
        quoteAuthor: 'Charles Phillips',
        quoteGenre: 'strength',
        __v: 0,
      },
    });

    apiMock.onGet(`/authors/Charles Phillips?page=1&limit=5`).reply(200, {
      statusCode: 200,
      message: 'Quotes by Charles Phillips',
      totalPages: 15619,
      currentPage: 1,
      quotes: [
        {
          _id: '5eb17ab3b69dc744b4e80ba5',
          quoteText:
            "They just didn't have the sense of the strength of their vote. Just thought it wasn't necessary.",
          quoteAuthor: 'Charles Phillips',
          quoteGenre: 'strength',
          __v: 0,
        },
      ],
    });

    await actWait(500);

    fireEvent.click(getByTestId('author-button'));

    await actWait();

    expect(window.location.pathname).toEqual(
      encodeURI('/authors/Charles Phillips'),
    );
  });
});
