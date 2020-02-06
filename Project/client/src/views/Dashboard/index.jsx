import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Layout from './Layout';
import Forms from './components/Forms';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar
}));

export default function Dashboard() {
  const { path } = useRouteMatch();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path={path}>
              <Redirect to={`${path}/forms`} />
            </Route>

            <Route path={`${path}/forms`}>
              <Forms />
            </Route>
          </Switch>
        </Container>
      </main>
    </div>
  );
}