import React from 'react';

import { MdCached } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Switch from 'react-switch';

import { DarkIcon, LightIcon } from '..';
import { useTheme } from '../../hooks/theme';
import { Container } from './styles';

interface HeaderProps {
  getNewQuote?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ getNewQuote = () => null }) => {
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
