import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor:'#333333',
  },
  header: {
    padding: 16,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(3),
    width: '100%',
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          JUSIC
        </Typography>
      </AppBar>
      <Container fixed>
        <Card className={classes.card}>
          <CardContent>
            선택지
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            그래프화면
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
