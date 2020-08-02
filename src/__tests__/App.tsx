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

    apiMock.onGet('/quotes/random').replyOnce(200, {
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

  it('should fetch and render a new quote when header button is pressed', async () => {
    const { getByTestId, getByText } = render(<App />);

    apiMock.onGet('/quotes/random').replyOnce(200, {
      statusCode: 200,
      quote: {
        _id: '5eb17aaeb69dc744b4e74356',
        quoteText:
          "As a kid, all I thought about was death. But you can't tell your parents that.",
        quoteAuthor: 'Maurice Sendak',
        quoteGenre: 'death',
        __v: 0,
      },
    });

    await actWait(500);

    expect(getByTestId('quote-content')).toHaveTextContent(
      "As a kid, all I thought about was death. But you can't tell your parents that.",
    );

    apiMock.onGet('/quotes/random').replyOnce(200, {
      statusCode: 200,
      quote: {
        _id: '5eb17aadb69dc744b4e72248',
        quoteText:
          'I always say you can never be extravagant with beauty. Beauty is God made real. Beauty is life.',
        quoteAuthor: 'Imelda Marcos',
        quoteGenre: 'beauty',
        __v: 0,
      },
    });

    await actWait(500);

    fireEvent.click(getByText('random'));

    await actWait();

    expect(getByTestId('quote-content')).toHaveTextContent(
      'I always say you can never be extravagant with beauty. Beauty is God made real. Beauty is life.',
    );
  });

  it('should be able to navigate to author quotes page', async () => {
    const { getByTestId } = render(<App />);

    apiMock.onGet('/quotes/random').replyOnce(200, {
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

    apiMock.onGet('/authors/Charles Phillips?page=1&limit=5').replyOnce(200, {
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
