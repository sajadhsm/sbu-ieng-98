import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Forms from './views/Forms';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/forms" />
      </Route>

      <Route path="/forms">
        <Forms />
      </Route>
    </Switch>
  );
}