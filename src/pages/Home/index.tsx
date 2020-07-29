import React, { useCallback } from 'react';

import { MdTrendingFlat } from 'react-icons/md';
import { useQuote } from '../../hooks/quote';
import Quote from '../../components/Quote';

import { Container, Author } from './styles';

const Home: React.FC = () => {
  const { randomQuote, getAllFromAuthor } = useQuote();

  const handleClick = useCallback(
    authorName => {
      getAllFromAuthor(authorName);
    },
    [getAllFromAuthor],
  );

  return (
    <Container>
      <Quote id={randomQuote.id} content={randomQuote.text} />

      <Author onClick={() => handleClick(randomQuote.author)}>
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
