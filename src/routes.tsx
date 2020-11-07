import React from 'react';

import { Route, Switch } from 'react-router-dom';

import AuthorQuotes from './pages/AuthorQuotes';
import Home from './pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/authors/:name" component={AuthorQuotes} />
  </Switch>
);

export default Routes;
