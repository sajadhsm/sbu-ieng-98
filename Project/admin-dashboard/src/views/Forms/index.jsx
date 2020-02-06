import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import FormsTable from './components/FormsTable';
import FormDetail from './components/FormDetail';

export default function Forms() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <FormsTable />
      </Route>

      <Route path={`${path}/:formId`}>
        <FormDetail />
      </Route>
    </Switch>
  );
}