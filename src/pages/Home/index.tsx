import React from 'react';

import { useQuote } from '../../hooks/quote';
import Quote from '../../components/Quote';

import { Container } from './styles';

const Home: React.FC = () => {
  const { randomQuote } = useQuote();

  return (
    <Container>
      <Quote
        author={randomQuote.author}
        category={randomQuote.genre}
        content={randomQuote.text}
      />
    </Container>
  );
};

export default Home;
