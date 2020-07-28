import React from 'react';

import { MdTrendingFlat } from 'react-icons/md';

import { Container, Author, Quote } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Quote>
        <p>
          “The first rule of any technology used in a business is that
          automation applied to an efficient operation will magnify the
          efficiency. The second is that automation applied to an inefficient
          operation will magnify the inefficiency.”
        </p>
      </Quote>

      <Author>
        <div>
          <p>Bill Gates</p>
          <span>war</span>
        </div>
        <a href="www.google.com">
          <MdTrendingFlat size="20px" />
        </a>
      </Author>
    </Container>
  );
};

export default Home;
