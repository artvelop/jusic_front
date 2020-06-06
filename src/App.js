import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Divider } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ChartBox from './components/ChartBox';
import Header from './components/Header';
import DateBox from './components/DateBox';
import GenDataBox from './components/GenDataBox';
import ForeignTradeBox from './components/ForeignTradeBox';
import ExchangeRateBox from './components/ExchangeRateBox';
import StockMarketBox from './components/StockMarketBox';
import {Provider} from 'react-redux';
import rootReducer from './store/modules';
import {createStore} from 'redux';
import IndicatorsBox from './components/IndicatorsBox';
import sendApi from './api/sendApi';

const store = createStore(rootReducer);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'200vh',
    backgroundColor:'#333333',
  },
  container: {
    marginBottom: 64,
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

  useEffect(() => {
    sendApi
      .getCompanyList({})
      .then(async res => {
        console.log(res.data);
      });
  },[]);

  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box className={classes.root}>
          <Header title="주식예측 솔루션" />
          <Container fixed className={classes.container}>
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
                <Divider className={classes.dividerGen} />
                <IndicatorsBox />
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
    </Provider>
  );
}

export default App;
