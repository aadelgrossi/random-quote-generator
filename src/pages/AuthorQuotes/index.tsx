import React, { useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import Quote from '../../components/Quote';
import { useQuote } from '../../hooks/quote';

import {
  Container,
  Quotes,
  BackButton,
  Header,
  LoadingContainer,
} from './styles';

import Loading from '../../components/LoadingDots';

const AuthorQuotes: React.FC = () => {
  const { getAllFromAuthor, quotesFromAuthor, loading } = useQuote();
  const { name } = useParams();
  const history = useHistory();

  useEffect(() => {
    getAllFromAuthor(name);
  }, [getAllFromAuthor, name]);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => history.goBack()}>
          <MdArrowBack size="24px" />
        </BackButton>
        <h2>{name}</h2>
      </Header>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <Quotes>
          {quotesFromAuthor.map(quote => (
            <Quote key={quote.id} content={quote.text} />
          ))}
        </Quotes>
      )}
    </Container>
  );
};

export default AuthorQuotes;
