import React from 'react';

import { MdTrendingFlat } from 'react-icons/md';

import { Container, Content, Author } from './styles';

interface QuoteProps {
  author: string;
  content: string;
  category: string;
}

const Quote: React.FC<QuoteProps> = ({ author, category, content }) => {
  return (
    <Container>
      <Content>
        <p>{content}</p>
      </Content>

      <Author>
        <div>
          <p>{author}</p>
          <span>{category}</span>
        </div>
        <a href="www.google.com">
          <MdTrendingFlat size="26px" />
        </a>
      </Author>
    </Container>
  );
};

export default Quote;
