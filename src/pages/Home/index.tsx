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

      <Author to={`/author/${encodeURI(randomQuote.author)}`}>
        <span>
          <h3>{randomQuote.author}</h3>
          <span>{randomQuote.genre}</span>
        </span>
        <MdTrendingFlat size="26px" />
      </Author>
    </Container>
  );
};

export default Home;
