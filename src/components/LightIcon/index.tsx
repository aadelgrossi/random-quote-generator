import React, { useContext } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const LightIcon: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <MdWbSunny color={colors.primary} />
    </Container>
  );
};

export default LightIcon;
