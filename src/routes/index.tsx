import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Redirect exact path="/" to="/hot" />
    <Route path="/:section" component={Dashboard} />
  </Switch>
);
export default Routes;
