import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    alignContent: 'center',
  },
}));

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const ChartBox = ({predData, realData, date}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <LineChart
        width={1200}
        height={500}
        data={date.map((o, idx) => {
          return {
            name: o,
            예측종가: predData[idx],
            실제종가: realData[idx],
          };
        })}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="예측종가" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="실제종가" stroke="#82ca9d" />
      </LineChart>
    </Box>
  );
}

export default ChartBox;
