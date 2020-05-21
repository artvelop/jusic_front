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

const ExchangeRateBox = () => {
  const classes = useStyles();
  const {usdkrw, jpykrw, cnykrw} = useSelector(state => state.sendInfo);
  const dispatch = useDispatch();

  const handleChange = useCallback((name, value) => {
    dispatch(createActions.setData(name, value));
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} justify="center">
        <Box display="flex" alignItems="center" height="100%">
          <Typography variant="h6">
            환율
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox 
                name="원달러 매매기준율" 
                color="primary" 
                checked={usdkrw}
                onChange={() => handleChange('usdkrw', !usdkrw)}
              />
            }
            label="원달러 매매기준율"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
      <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="원엔 매매기준율"
                color="primary"
                checked={jpykrw}
                onChange={() => handleChange('jpykrw', !jpykrw)}
              />
            }
            label="원엔 매매기준율"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="원위안 매매기준율"
                color="primary"
                checked={cnykrw}
                onChange={() => handleChange('cnykrw', !cnykrw)}
              />
            }
            label="원위안 매매기준율"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ExchangeRateBox;
