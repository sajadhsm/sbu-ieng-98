import React from 'react';
import { Box, Toolbar, Typography, Link, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => {
  console.log(theme)
  return {
    box: {
      borderBottom: `1px solid ${theme.palette.grey[400]}`
    },
  }
});

export default function TopHeader() {
  const classes = useStyles();

  return (
    <Box className={classes.box} bgcolor="background.paper">
      <Toolbar disableGutters>
        <Container maxWidth="lg">
          <Typography variant="h6" color="primary">
            <Link underline="none" color="inherit" component={RouterLink} to="/">
              Kritical
            </Link>
          </Typography>
        </Container>
      </Toolbar>
    </Box>
  );
}