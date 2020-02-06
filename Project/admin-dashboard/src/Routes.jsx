import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom";

import Forms from './views/Forms';

export default function Routes() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}forms`} />
      </Route>

      <Route path={`${path}forms`}>
        <Forms />
      </Route>
    </Switch>
  );
}