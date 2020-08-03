import React, { useCallback } from 'react';

import { MdCached } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import { Container } from './styles';
import { useQuote } from '../../hooks/quote';

const Header: React.FC = () => {
  const { getRandom } = useQuote();
  const history = useHistory();
  const location = useLocation();

  const handleClick = useCallback(() => {
    getRandom();

    if (location.pathname !== '/') {
      history.goBack();
    }
  }, [history, location, getRandom]);

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        random
        <MdCached />
      </button>
    </Container>
  );
};

export default Header;
