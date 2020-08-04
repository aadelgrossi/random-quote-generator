import React, { useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import Quote from '../../components/Quote';
import { useQuote } from '../../hooks/quote';

import { Container, Quotes, BackButton, Header } from './styles';

const AuthorQuotes: React.FC = () => {
  const { getAllFromAuthor, quotesFromAuthor } = useQuote();
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
      <Quotes>
        {quotesFromAuthor.map(quote => (
          <Quote key={quote.id} content={quote.text} />
        ))}
      </Quotes>
    </Container>
  );
};

export default AuthorQuotes;
