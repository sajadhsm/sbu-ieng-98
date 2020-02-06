import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';

export default function CustomBreadcrumbs({ items }) {
  if (!items.length) {
    return null;
  }

  const last = items.pop();

  const links = items.map(({ text, path }) => (
    <Link key={text + path} component={RouterLink} color="inherit" to={path}>{text}</Link>
  ));

  return (
    <Breadcrumbs>
      {links}
      <Typography color="textPrimary">{last.text}</Typography>
    </Breadcrumbs>
  )
}