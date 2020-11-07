import React from 'react';

import { MdTrendingFlat } from 'react-icons/md';
import { useQuote } from '../../hooks/quote';
import Quote from '../../components/Quote';

import { Container, Author, Contents } from './styles';
import Loading from '../../components/LoadingDots';

const Home: React.FC = () => {
  const { randomQuote, loading } = useQuote();

  return (
    <Container>
      <Contents>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Quote content={randomQuote.text} />

            <Author
              data-testid="author-button"
              to={`/authors/${randomQuote.author}`}
            >
              <span>
                <h3 data-testid="quote-author">{randomQuote.author}</h3>
                <span data-testid="quote-genre">{randomQuote.genre}</span>
              </span>
              <MdTrendingFlat size="1.5em" />
            </Author>
          </>
        )}
      </Contents>
    </Container>
  );
};

export default Home;
