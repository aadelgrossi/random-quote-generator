import React from 'react';

import { Container } from './styles';

interface QuoteProps {
  content: string;
}

const Quote: React.FC<QuoteProps> = ({ content }) => {
  return (
    <Container>
      <p>{content}</p>
    </Container>
  );
};

export default Quote;
