import React, { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as createActions from '../store/modules/sendInfo';
import Box from '@material-ui/core/Box';
import { Typography, Grid, Checkbox, FormControlLabel} from '@material-ui/core';

const IndicatorsBox = () => {
  const {separation, rsi, cci} = useSelector(state => state.sendInfo);
  const dispatch = useDispatch();

  const handleChange = useCallback((name, value) => {
    dispatch(createActions.setData(name, value));
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} justify="center">
        <Box display="flex" alignItems="center" height="100%">
          <Typography variant="h6">
            보조지표
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="이격도"
                color="primary"
                checked={separation}
                onChange={() => handleChange('separation', !separation)}
              />
            }
            label="이격도"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
      <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="rsi"
                color="primary"
                checked={rsi}
                onChange={() => handleChange('rsi', !rsi)}
              />
            }
            label="rsi"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="cci"
                color="primary"
                checked={cci}
                onChange={() => handleChange('cci', !cci)}
              />
            }
            label="cci"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default IndicatorsBox;
