import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AuthorQuotes from './pages/AuthorQuotes';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/authors/:name" component={AuthorQuotes} />
  </Switch>
);

export default Routes;
