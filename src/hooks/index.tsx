import React from 'react';

import { Theme } from './theme';

const AppProvider: React.FC = ({ children }) => <Theme>{children}</Theme>;

export default AppProvider;
