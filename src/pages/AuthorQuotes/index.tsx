import React from 'react';

import { MdArrowBack } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import useSWR from 'swr';

import Loading from '../../components/LoadingDots';
import Quote from '../../components/Quote';
import { getAuthorQuotes } from '../../services/api';
import {
  BackButton,
  BackgroundWrapper,
  Container,
  Header,
  LoadingContainer,
  Quotes,
} from './styles';

const AuthorQuotes: React.FC = () => {
  const history = useHistory();
  const { name } = useParams<{ name: string }>();
  const { data } = useSWR('authorQuotes', () => getAuthorQuotes(name), {
    refreshInterval: 0,
    revalidateOnFocus: false,
  });

  return (
    <BackgroundWrapper>
      <Container>
        <Header>
          <BackButton data-testid="back" onClick={() => history.push('/')}>
            <MdArrowBack size="24px" />
          </BackButton>
          <h2>{name}</h2>
        </Header>
        {!data ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <Quotes>
            {data.quotes.map(quote => (
              <Quote key={quote._id} content={quote.quoteText} />
            ))}
          </Quotes>
        )}
      </Container>
    </BackgroundWrapper>
  );
};

export default AuthorQuotes;
