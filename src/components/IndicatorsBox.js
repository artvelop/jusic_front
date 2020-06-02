import React, { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as createActions from '../store/modules/sendInfo';
import Box from '@material-ui/core/Box';
import { Typography, Grid, Checkbox, FormControlLabel} from '@material-ui/core';

const IndicatorsBox = () => {
  const {separation, rsi, cci, ex1, ex2, ex3, ex4, ex5, ex6} = useSelector(state => state.sendInfo);
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
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="ex1"
                color="primary"
                checked={ex1}
                onChange={() => handleChange('ex1', !ex1)}
              />
            }
            label="ex1"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="ex2"
                color="primary"
                checked={ex2}
                onChange={() => handleChange('ex2', !ex2)}
              />
            }
            label="ex2"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="ex3"
                color="primary"
                checked={ex3}
                onChange={() => handleChange('ex3', !ex3)}
              />
            }
            label="ex3"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="ex4"
                color="primary"
                checked={ex4}
                onChange={() => handleChange('ex4', !ex4)}
              />
            }
            label="ex4"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="ex5"
                color="primary"
                checked={ex5}
                onChange={() => handleChange('ex5', !ex5)}
              />
            }
            label="ex5"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox
                name="ex6"
                color="primary"
                checked={ex6}
                onChange={() => handleChange('ex6', !ex6)}
              />
            }
            label="ex6"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default IndicatorsBox;
