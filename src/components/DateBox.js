import React, { useState, useEffect, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import * as createActions from '../store/modules/sendInfo';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const changeMonth = mon => {
  switch (mon) {
    case 'Jan':
      return '01';
    case 'Feb':
      return '02';
    case 'Mar':
      return '03';
    case 'Apr':
      return '04';
    case 'May':
      return '05';
    case 'Jun':
      return '06';
    case 'Jul':
      return '07';
    case 'Aug':
      return '08';
    case 'Sep':
      return '09';
    case 'Oct':
      return '10';
    case 'Nov':
      return '11';
    case 'Dec':
      return '12';
    default:
      return '00';
  } 
}

const DateBox = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleChange = useCallback((name, value) => {
    dispatch(createActions.setData(name, value));
  }, [dispatch]);

  const formatDate = data => {
    const splitData = String(data).split(' ');
    const year = splitData[3];
    const month = changeMonth(splitData[1]);
    const day = splitData[2];

    return `${year}-${month}-${day}`;
  }

  const changeStartDate = date => {
    handleChange('startDate', formatDate(date));
    setStartDate(date);
  }
  const changeEndDate = date => {
    handleChange('endDate', formatDate(date));
    setEndDate(date)
  };

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
