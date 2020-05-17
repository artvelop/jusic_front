import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Checkbox, FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const ForeignTradeBox = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} justify="center">
        <Box display="flex" alignItems="center" height="100%">
          <Typography variant="h6">
            투자자별 매매동향
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox name="기관 순매매량" color="primary" />
            }
            label="기관 순매매량"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
      <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox name="기관 순매매량" color="primary" />
            }
            label="외국인 순매매량"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" height="100%">
          <FormControlLabel
            control={
              <Checkbox name="기관 순매매량" color="primary" />
            }
            label="외국인 보유주수"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ForeignTradeBox;
