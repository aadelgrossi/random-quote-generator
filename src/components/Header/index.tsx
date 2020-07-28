import React from 'react';

import { MdCached } from 'react-icons/md';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <a href="www.google.com">
        random
        <MdCached />
      </a>
    </Container>
  );
};

export default Header;
