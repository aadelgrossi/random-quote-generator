import React from 'react';

import { MdCached } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Switch from 'react-switch';

import { useTheme } from '../../hooks/theme';
import DarkIcon from '../DarkIcon';
import LightIcon from '../LightIcon';
import { Container } from './styles';

interface HeaderProps {
  getNewQuote?: () => void;
}

const Header: React.FC<HeaderProps> = ({ getNewQuote = () => null }) => {
  const { pathname } = useLocation();
  const {
    theme: { colors, title },
    toggleTheme,
  } = useTheme();

  return (
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
      {pathname === '/' && (
        <button type="button" onClick={() => getNewQuote()}>
          random
          <MdCached />
        </button>
      )}
    </Container>
  );
};

export default Header;
