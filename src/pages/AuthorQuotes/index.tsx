import React, { useEffect } from 'react';

import { MdArrowBack } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';

import Loading from '../../components/LoadingDots';
import Quote from '../../components/Quote';
import { useQuote } from '../../hooks/quote';
import {
  BackButton,
  BackgroundWrapper,
  Container,
  Header,
  LoadingContainer,
  Quotes,
} from './styles';

const AuthorQuotes: React.FC = () => {
  const { getAllFromAuthor, loading, quotesFromAuthor } = useQuote();
  const { name } = useParams();
  const history = useHistory();

  useEffect(() => {
    getAllFromAuthor(name);
  }, [getAllFromAuthor, name]);

  return (
    <BackgroundWrapper>
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
    </BackgroundWrapper>
  );
};

export default AuthorQuotes;
