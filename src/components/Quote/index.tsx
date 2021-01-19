import React from 'react';

import { Container } from './styles';

interface QuoteProps {
  content: string;
}

export const Quote: React.FC<QuoteProps> = ({ content }) => {
  return (
    <Container>
      <p>{content}</p>
    </Container>
  );
};
