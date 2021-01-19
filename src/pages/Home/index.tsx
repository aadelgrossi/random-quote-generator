import React from 'react';

import { MdTrendingFlat } from 'react-icons/md';
import useSWR from 'swr';

import { Header, Loading, Quote } from '../../components';
import { getRandom } from '../../services/api';
import { Author, Container, Contents } from './styles';

const Home: React.FC = () => {
  const { data: response, mutate, isValidating } = useSWR('random', getRandom);

  return (
    <Container>
      <Header getNewQuote={mutate} />

      <Contents>
        {!response?.data || isValidating ? (
          <Loading />
        ) : (
          <>
            <Quote content={response.data[0].quoteText} />

            <Author
              data-testid="author-button"
              to={`/authors/${response.data[0].quoteAuthor}`}
            >
              <span>
                <h3>{response.data[0].quoteAuthor}</h3>
                <span>{response.data[0].quoteGenre}</span>
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
