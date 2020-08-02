import React, { useEffect } from 'react';

import { MdTrendingFlat } from 'react-icons/md';
import { useQuote } from '../../hooks/quote';
import Quote from '../../components/Quote';

import { Container, Author } from './styles';

const Home: React.FC = () => {
  const { getRandom, randomQuote } = useQuote();

  useEffect(() => {
    getRandom();
  }, [getRandom]);

  return (
    <Container>
      <Quote content={randomQuote.text} />

      <Author data-testid="author-button" to={`/authors/${randomQuote.author}`}>
        <span>
          <h3 data-testid="quote-author">{randomQuote.author}</h3>
          <span data-testid="quote-genre">{randomQuote.genre}</span>
        </span>
        <MdTrendingFlat size="26px" />
      </Author>
    </Container>
  );
};

export default Home;
