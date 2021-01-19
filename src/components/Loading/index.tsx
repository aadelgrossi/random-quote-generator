import React from 'react';

import { Dot, DotWrapper } from './styles';

export const Loading: React.FC = () => (
  <DotWrapper>
    <Dot delay="0s" />
    <Dot delay=".1s" />
    <Dot delay=".2s" />
  </DotWrapper>
);

export default Loading;
