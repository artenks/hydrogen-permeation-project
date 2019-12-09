import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Calculator from './pages/Calculator';
import Articles from './pages/Articles';

export default function routes() {
  return (
    <Switch>
      <Route path="/calculator" exact component={Calculator} />
      <Route path="/articles" exact component={Articles} />
      <Route path="/" component={Main} />
    </Switch>
  );
}
