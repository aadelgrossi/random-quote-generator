import React, { useContext } from 'react';

import { FaMoon } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const DarkIcon: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <FaMoon color={colors.primary} />
    </Container>
  );
};

export default DarkIcon;
