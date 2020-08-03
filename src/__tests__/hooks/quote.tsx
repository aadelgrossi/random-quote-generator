import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import MockAdapter from 'axios-mock-adapter';
import { useQuote, QuoteProvider } from '../../hooks/quote';

import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Quote Hook', () => {
  beforeEach(() => {
    apiMock.onGet('/quotes/random').replyOnce(200, {
      statusCode: 200,
      quote: {
        _id: '5eb17ab2b69dc744b4e7ee53',
        quoteText: 'I love my dad and we have a very good relationship now.',
        quoteAuthor: 'Norah Jones',
        quoteGenre: 'relationship',
        __v: 0,
      },
    });
  });

  it('should fetch a random quote from API and set randomQuote', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useQuote(), {
      wrapper: QuoteProvider,
    });

    await waitForNextUpdate();

    expect(result.current.randomQuote.author).toEqual('Norah Jones');
    expect(result.current.randomQuote.id).toEqual('5eb17ab2b69dc744b4e7ee53');
    expect(result.current.randomQuote.genre).toEqual('relationship');
    expect(result.current.randomQuote.text).toEqual(
      'I love my dad and we have a very good relationship now.',
    );
  });

  it('should fetch quotes from author and store in quotesFromAuthor state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useQuote(), {
      wrapper: QuoteProvider,
    });

    apiMock.onGet('/authors/Donald Rumsfel?page=1&limit=5').replyOnce(200, {
      statusCode: 200,
      message: 'Quotes by Donald Rumsfel',
      totalPages: 26032,
      currentPage: 1,
      quotes: [
        {
          _id: '5eb17aaeb69dc744b4e7281a',
          quoteText:
            'Your performance depends on your people. Select the best, train them and back them. When errors occur, give sharper guidance. If errors persist or if the fit feels wrong, help them move on. The country cannot afford amateur hour in the White House.',
          quoteAuthor: 'Donald Rumsfeld',
          quoteGenre: 'best',
          __v: 0,
        },
        {
          _id: '5eb17aaeb69dc744b4e727b3',
          quoteText:
            'Amidst all the clutter, beyond all the obstacles, aside from all the static, are the goals set. Put your head down, do the best job possible, let the flak pass, and work towards those goals.',
          quoteAuthor: 'Donald Rumsfeld',
          quoteGenre: 'best',
          __v: 0,
        },
        {
          _id: '5eb17aaeb69dc744b4e72b3b',
          quoteText:
            "Leave the President's family business to him. You will have plenty to do without trying to manage the First Family. They are likely to do fine without your help.",
          quoteAuthor: 'Donald Rumsfeld',
          quoteGenre: 'business',
          __v: 0,
        },
      ],
    });

    act(() => {
      result.current.getAllFromAuthor('Donald Rumsfel');
    });

    await waitForNextUpdate();

    expect(result.current.quotesFromAuthor.length).toBe(3);
    expect(result.current.quotesFromAuthor[0].id).toBe(
      '5eb17aaeb69dc744b4e7281a',
    );
    expect(result.current.quotesFromAuthor[1].text).toBe(
      'Amidst all the clutter, beyond all the obstacles, aside from all the static, are the goals set. Put your head down, do the best job possible, let the flak pass, and work towards those goals.',
    );
    expect(result.current.quotesFromAuthor[2].genre).toBe('business');
  });
});
