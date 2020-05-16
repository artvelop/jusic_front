import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Card, CardContent, Grid, Divider } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ChartBox from './components/ChartBox';
import Header from './components/Header';
import DateBox from './components/DateBox';
import GenDataBox from './components/GenDataBox';
import ForeignTradeBox from './components/ForeignTradeBox';
import ExchangeRateBox from './components/ExchangeRateBox';
import StockMarketBox from './components/StockMarketBox';

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
  },
  dividerGen: {
    marginTop: 8,
    marginBottom: 8,
  },
  divider: {
    marginTop: 16,
    marginBottom: 8,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box className={classes.root}>
        <Header title="주식예측 솔루션" />
        <Container fixed>
          <Card className={classes.card}>
            <CardContent>
              <DateBox />
              <Divider className={classes.dividerGen} />
              <GenDataBox />
              <Divider className={classes.divider} />
              <ForeignTradeBox />
              <Divider className={classes.dividerGen} />
              <ExchangeRateBox />
              <Divider className={classes.dividerGen} />
              <StockMarketBox />
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <ChartBox />
            </CardContent>
          </Card>
        </Container>
      </Box>
    </MuiPickersUtilsProvider>
  );
}

export default App;
