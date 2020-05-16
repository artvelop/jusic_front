import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const GenDataBox = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} justify="center">
        <Box display="flex" alignItems="center" height="100%">
          <Typography variant="h6">
            기본 데이터
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <TextField id="standard-basic" label="종가" />
      </Grid>
      <Grid item xs={2}>
        <TextField id="standard-basic" label="시가" />
      </Grid>
      <Grid item xs={2}>
        <TextField id="standard-basic" label="고가" />
      </Grid>
      <Grid item xs={2}>
        <TextField id="standard-basic" label="저가" />
      </Grid>
      <Grid item xs={2}>
        <TextField id="standard-basic" label="거래량" />
      </Grid>
    </Grid>
  );
}

export default GenDataBox;
