import React, { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as createActions from '../store/modules/sendInfo';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Checkbox, FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const StockMarketBox = () => {
  const classes = useStyles();
  const {kospi, kosdaq, dji, nas, shs, nii} = useSelector(state => state.sendInfo);
  const dispatch = useDispatch();

  const handleChange = useCallback((name, value) => {
    dispatch(createActions.setData(name, value));
  }, [dispatch]);

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
              <Checkbox
                name="코스피 체결가"
                color="primary"
                checked={kospi}
                onChange={() => handleChange('kospi', !kospi)}
              />
            }
            label="코스피 체결가"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
      <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="코스닥 체결가"
                color="primary"
                checked={kosdaq}
                onChange={() => handleChange('kosdaq', !kosdaq)}
              />
            }
            label="코스닥 체결가"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="다우산업 증가"
                color="primary"
                checked={dji}
                onChange={() => handleChange('dji', !dji)}
              />
            }
            label="다우산업 증가"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="나스닥 종합 종가"
                color="primary"
                checked={nas}
                onChange={() => handleChange('nas', !nas)}
              />
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
              <Checkbox
                name="상해종합 종가"
                color="primary"
                checked={shs}
                onChange={() => handleChange('shs', !shs)}
              />
            }
            label="상해종합 종가"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="니케이225 증가"
                color="primary"
                checked={nii}
                onChange={() => handleChange('nii', !nii)}
              />
            }
            label="니케이225 증가"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default StockMarketBox;
