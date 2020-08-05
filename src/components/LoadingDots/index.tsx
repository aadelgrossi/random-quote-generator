import React from 'react';

import { DotWrapper, Dot } from './styles';

const LoadingDots: React.FC = () => (
  <DotWrapper>
    <Dot delay="0s" />
    <Dot delay=".1s" />
    <Dot delay=".2s" />
  </DotWrapper>
);

export default LoadingDots;
