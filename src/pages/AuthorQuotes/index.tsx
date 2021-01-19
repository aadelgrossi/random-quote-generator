import React from 'react';

import { MdArrowBack } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import useSWR from 'swr';

import Header from '../../components/Header';
import Loading from '../../components/LoadingDots';
import Quote from '../../components/Quote';
import { getAuthorQuotes } from '../../services/api';
import {
  BackButton,
  BackgroundWrapper,
  Container,
  LoadingContainer,
  Quotes,
  Title,
} from './styles';

const AuthorQuotes: React.FC = () => {
  const history = useHistory();
  const { name } = useParams<{ name: string }>();
  const { data: response, isValidating } = useSWR(`${name}_quotes`, () =>
    getAuthorQuotes(name),
  );

  return (
    <BackgroundWrapper>
      <Header />
      <Container>
        <Title>
          <BackButton data-testid="back" onClick={() => history.push('/')}>
            <MdArrowBack size="24px" />
          </BackButton>
          <h2>{name}</h2>
        </Title>
        {!response?.data || isValidating ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <Quotes>
            {response.data.map(quote => (
              <Quote key={quote._id} content={quote.quoteText} />
            ))}
          </Quotes>
        )}
      </Container>
    </BackgroundWrapper>
  );
};

export default AuthorQuotes;
