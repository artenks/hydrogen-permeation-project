import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Calculator from './pages/Calculator';
import Articles from './pages/Articles';
import TheoreticalFoundation from './pages/TheoreticalFoundation';
import About from './pages/About';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/articles" component={Articles} />
      <Route path="/theoretical_foundation" component={TheoreticalFoundation} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
