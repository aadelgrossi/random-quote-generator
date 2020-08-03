import React from 'react';

import { Container } from './styles';

interface QuoteProps {
  content: string;
}

const Quote: React.FC<QuoteProps> = ({ content }) => {
  return (
    <Container>
      <p data-testid="quote-content">{content}</p>
    </Container>
  );
};

export default Quote;
