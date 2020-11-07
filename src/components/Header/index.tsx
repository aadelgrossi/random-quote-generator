import React, { useCallback } from 'react';

import { MdCached } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import Switch from 'react-switch';

import { useQuote } from '../../hooks/quote';
import { useTheme } from '../../hooks/theme';
import DarkIcon from '../DarkIcon';
import LightIcon from '../LightIcon';
import { Container, Wrapper } from './styles';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
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
    <Wrapper>
      <Container>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'light'}
          onHandleColor={theme.colors.primary}
          offHandleColor={theme.colors.primary}
          onColor={theme.colors.secondary}
          offColor={theme.colors.secondary}
          width={60}
          uncheckedIcon={<DarkIcon />}
          checkedIcon={<LightIcon />}
        />
        <button type="button" onClick={handleClick}>
          random
          <MdCached />
        </button>
      </Container>
    </Wrapper>
  );
};

export default Header;
