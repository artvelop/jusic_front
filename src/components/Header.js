import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  header: {
    padding: 16,
  },
}));

const Header = ({title}) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
    </AppBar>
  );
}

export default Header;
