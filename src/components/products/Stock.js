import React, { useContext, useEffect } from 'react';
import {
  Card,
  Button,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@material-ui/core';

import withProduct from './withProduct';
import Spinner from '../customs/Spinner';

import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const Stock = (props) => {
  console.log('stock rendering');
  const {
    context: {
      productState: { data, loading, error },
      getAllProducts,
    },
  } = props;

  // const memoData = React.useMemo(() => data);

  useEffect(() => {
    getAllProducts();
  }, []);

  const columns = [
    { key: 'id', value: 'Product Id' },
    { key: 'productName', value: 'Product Name' },
    { key: 'availStock', value: 'Available Stock' },
  ];

  const actions = [
    {
      icon: <CreateIcon color="primary" />,
      tooltip: 'Save User',
      onClick: (value) => alert('You saved ' + value.productName),
    },
    {
      icon: <DeleteIcon style={{ color: 'red' }} />,
      tooltip: 'Delete User',
      onClick: (event) => alert('You saved ' + event),
    },
  ];

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <h3>Stocks</h3>
        </Box>
        <ReportTable
          loading={loading}
          data={data}
          columns={columns}
          actions={actions}
        />
      </CardContent>
    </Card>
  );
};

const ReportTable = ({ loading, error, data, columns, actions }) => {
  const RenderTHeader = () => {
    return (
      <TableHead>
        <TableRow>
          {columns &&
            columns.map((column) => <TableCell>{column.value}</TableCell>)}
          {actions && actions.map(() => <TableCell />)}
        </TableRow>
      </TableHead>
    );
  };
  return (
    <TableContainer>
      <Table>
        <RenderTHeader />
        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Spinner />
              </TableCell>
            </TableRow>
          )}
          {error && JSON.stringify(error)}
          {data &&
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="TableCell" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell>{row.availStock}</TableCell>
                {actions &&
                  actions.map((action) => (
                    <TableCell onClick={(rowData) => action.onClick(rowData)}>
                      {action.icon}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default withProduct(Stock);
