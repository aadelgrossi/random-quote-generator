import React, { useCallback, useContext } from 'react';

import { MdCached } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Container } from './styles';
import { useQuote } from '../../hooks/quote';

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { getRandom } = useQuote();
  const history = useHistory();
  const location = useLocation();

  const handleClick = useCallback(() => {
    getRandom();

    if (location.pathname !== '/') {
      history.goBack();
    }
  }, [history, location, getRandom]);

  const handleThemeSwitch = useCallback(() => {}, []);

  return (
    <Container>
      <Switch
        onChange={handleThemeSwitch}
        checked
        onHandleColor={colors.primary}
        onColor={colors.secondary}
        width={60}
        uncheckedIcon={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <FaSun color={colors.primary} />
          </div>
        }
        checkedIcon={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <FaMoon color={colors.primary} />
          </div>
        }
      />
      <button type="button" onClick={handleClick}>
        random
        <MdCached />
      </button>
    </Container>
  );
};

export default Header;
