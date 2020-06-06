import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const DateBox = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const changeStartDate = date => setStartDate(date);
  const changeEndDate = date => setEndDate(date);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} justify="center">
        <Box display="flex" alignItems="center" height="100%">
          <Typography variant="h6">
            날짜
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="start-date"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          value={startDate}
          onChange={changeStartDate}
        />
      </Grid>
      <Grid item xs={4}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="end-date"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          value={endDate}
          onChange={changeEndDate}
        />
      </Grid>
    </Grid>
  );
}

export default DateBox;
