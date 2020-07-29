import React from 'react';

import { Container } from './styles';

interface QuoteProps {
  id: string;
  content: string;
}

const Quote: React.FC<QuoteProps> = ({ id, content }) => {
  return (
    <Container key={id}>
      <p>{content}</p>
    </Container>
  );
};

export default Quote;
