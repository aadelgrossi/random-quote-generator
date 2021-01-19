import React from 'react';

import { act, fireEvent, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import App from '../App';
import { api } from '../services/api';

const apiMock = new MockAdapter(api);

const wait = (amount = 0): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, amount));
};

const actWait = async (amount = 0): Promise<void> => {
  await act(async () => {
    await wait(amount);
  });
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

describe('Home', () => {
  beforeEach(() => {
    apiMock.reset();
  });

  it('should be able to render a random quote', async () => {
    const { findByText } = render(<App />);

    apiMock.onGet('/random').replyOnce(200, {
      statusCode: 200,
      data: [
        {
          quoteText:
            "They just didn't have the sense of the strength of their vote. Just thought it wasn't necessary.",
          quoteAuthor: 'Charles Phillips',
          quoteGenre: 'strength',
        },
      ],
    });

    expect(
      await findByText(
        "They just didn't have the sense of the strength of their vote. Just thought it wasn't necessary.",
      ),
    ).toBeInTheDocument();

    expect(await findByText('Charles Phillips')).toBeInTheDocument();

    expect(await findByText('strength')).toBeInTheDocument();
  });

  it('should fetch and render a new quote when header button is pressed', async () => {
    const { findByText, getByText } = render(<App />);

    apiMock.onGet('/random').replyOnce(200, {
      statusCode: 200,
      data: [
        {
          quoteText:
            "As a kid, all I thought about was death. But you can't tell your parents that.",
          quoteAuthor: 'Maurice Sendak',
          quoteGenre: 'death',
        },
      ],
    });

    expect(
      await findByText(
        "As a kid, all I thought about was death. But you can't tell your parents that.",
      ),
    ).toBeInTheDocument();

    await actWait(500);

    apiMock.onGet('/random').replyOnce(200, {
      statusCode: 200,
      data: [
        {
          quoteText:
            'I always say you can never be extravagant with beauty. Beauty is God made real. Beauty is life.',
          quoteAuthor: 'Imelda Marcos',
          quoteGenre: 'beauty',
        },
      ],
    });

    await actWait(500);

    fireEvent.click(getByText('random'));

    await actWait();

    expect(
      await findByText(
        'I always say you can never be extravagant with beauty. Beauty is God made real. Beauty is life.',
      ),
    ).toBeInTheDocument();
  });

  it('should redirect to Home when back button on Author Quotes page', async () => {
    const { getByTestId } = render(<App />);

    apiMock.onGet('/random').replyOnce(200, {
      statusCode: 200,
      data: [
        {
          quoteAuthor: 'Albert Einstein',
        },
      ],
    });

    apiMock.onGet('?author=Albert Einstein&page=1&limit=5').replyOnce(200, {
      statusCode: 200,
      data: [
        {
          _id: '5eb17aadb69dc744b4e7156c',
          quoteText: 'God always takes the simplest way.',
          quoteAuthor: 'Albert Einstein',
        },
        {
          _id: '5eb17aad2g99444b4e7156c',
          quoteText:
            'Perfection of means and confusion of ends seem to characterize our age.',
          quoteAuthor: 'Albert Einstein',
        },
      ],
    });

    expect(window.location.pathname).toEqual('/');

    await actWait(500);

    fireEvent.click(getByTestId('author-button'));

    await actWait();

    expect(window.location.pathname).toEqual(
      encodeURI('/authors/Albert Einstein'),
    );

    await actWait();

    fireEvent.click(getByTestId('back'));

    await actWait();

    expect(window.location.pathname).toEqual('/');
  });

  it('should be able to navigate to author quotes page', async () => {
    const { getByTestId } = render(<App />);

    apiMock.onGet('/random').replyOnce(200, {
      statusCode: 200,
      data: [
        {
          _id: '5eb17ab3b69dc744b4e80ba5',
          quoteText:
            "They just didn't have the sense of the strength of their vote. Just thought it wasn't necessary.",
          quoteAuthor: 'Charles Phillips',
          quoteGenre: 'strength',
        },
      ],
    });

    apiMock.onGet('?author=Charles Phillips&page=1&limit=5').replyOnce(200, {
      statusCode: 200,
      data: [
        {
          _id: '5eb17ab3b69dc744b4e80ba5',
          quoteText:
            "They just didn't have the sense of the strength of their vote. Just thought it wasn't necessary.",
          quoteAuthor: 'Charles Phillips',
          quoteGenre: 'strength',
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
