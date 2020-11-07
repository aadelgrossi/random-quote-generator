import React, { useCallback, useContext } from 'react';

import { MdCached } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container, Wrapper } from './styles';
import { useQuote } from '../../hooks/quote';
import DarkIcon from '../DarkIcon';
import LightIcon from '../LightIcon';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
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
          checked={title === 'light'}
          onHandleColor={colors.primary}
          offHandleColor={colors.primary}
          onColor={colors.secondary}
          offColor={colors.secondary}
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
