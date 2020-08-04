import React from 'react';

import { MdTrendingFlat } from 'react-icons/md';
import { useQuote } from '../../hooks/quote';
import Quote from '../../components/Quote';

import { Container, Author } from './styles';

const Home: React.FC = () => {
  const { randomQuote } = useQuote();

  return (
    <Container>
      <Quote content={randomQuote.text} />

      <Author data-testid="author-button" to={`/authors/${randomQuote.author}`}>
        <span>
          <h3 data-testid="quote-author">{randomQuote.author}</h3>
          <span data-testid="quote-genre">{randomQuote.genre}</span>
        </span>
        <MdTrendingFlat size="1.5em" />
      </Author>
    </Container>
  );
};

export default Home;
