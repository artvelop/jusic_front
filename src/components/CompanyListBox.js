import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Table, TableHead, TableRow, TableBody, Paper, TableCell, Typography, Grid, Card, CardContent } from '@material-ui/core';
import { data } from '../asset/code';
import { useSelector, useDispatch } from 'react-redux';
import * as createActions from '../store/modules/sendInfo';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 20,
  },
  tableWrapper: {
    maxHeight: 400,
    overflow: 'auto',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 20,
    marginRight: 10,
  },
  paperStyle: {
    width: '100%',
    height: 308,
    justifyContent: 'center',
  },
  companyInfo: {
    marginTop: 100,
  }
}));

const CompanyListBox = () => {
  const [tableInfo, setTableInfo] = useState({
    page: 0,
    rowsPerPage: 828,
  });
  const {companyName, companyCode} = useSelector(state => state.sendInfo);
  const [input, setInput] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();

  const columns = [
    { id: 'name', label: '회사명', minWidth: 50, align: 'left' },
    { id: 'code', label: '회사코드', minWidth: 50, align: 'center' },
  ];

  const handleInputChange = e => setInput(e.target.value);

  const handleChange = useCallback((name, code) => {
    dispatch(createActions.setData('companyName', name));
    dispatch(createActions.setData('companyCode', code));
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        회사 선택
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper>
            <div className={classes.tableWrapper}>
              <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      data.filter(({name, code}) => name.includes(input)).slice(tableInfo.page * tableInfo.rowsPerPage, tableInfo.page * tableInfo.rowsPerPage + tableInfo.rowsPerPage).map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={e => handleChange(row.name, row.code)}>
                            {
                              columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number' ? value.toString : value}
                                  </TableCell>
                                );
                              })
                            }
                          </TableRow>
                        );
                      })
                    }
                </TableBody>
              </Table>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.inputStyle}
            value={input}
            onChange={handleInputChange}
            color="primary"
            margin="normal"
            variant="outlined"
            id="searchInput"
            placeholder="회사명검색"
          />
          <Card className={classes.paperStyle}>
            <CardContent>
              <div align="center" className={classes.companyInfo}>
                <Typography>{companyName || '골라주세요'}</Typography>
                <Typography>{companyCode || '골라주세요'}</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default CompanyListBox;
