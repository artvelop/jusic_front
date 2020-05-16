import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Checkbox, FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const StockMarketBox = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} justify="center">
        <Box display="flex" alignItems="center" height="100%">
          <Typography variant="h6">
            증시
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox name="코스피 체결가" color="primary" />
            }
            label="코스피 체결가"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
      <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox name="코스닥 체결가" color="primary" />
            }
            label="코스닥 체결가"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox name="다우산업 증가" color="primary" />
            }
            label="다우산업 증가"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox name="나스닥 종합 종가" color="primary" />
            }
            label="나스닥 종합 종가"
          />
        </Box>
      </Grid>
      <Grid item xs={2} justify="center"></Grid>
      <Grid item xs={2} justify="center"></Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox name="상해종합 종가" color="primary" />
            }
            label="상해종합 종가"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox name="니케이225 증가" color="primary" />
            }
            label="니케이225 증가"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default StockMarketBox;
