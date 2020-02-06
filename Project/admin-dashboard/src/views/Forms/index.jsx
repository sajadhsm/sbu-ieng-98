import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import FormsTable from './components/FormsTable';

export default function Forms() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path}>
        <FormsTable />
      </Route>

      <Route path={`${path}/:formId`}>
        <p>Form Detail</p>
      </Route>
    </Switch>
  );
}