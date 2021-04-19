import React, { useContext, useEffect } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import withProduct from './withProduct';
import Spinner from '../customs/Spinner';

import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const ProductList = (props) => {
  const {
    context: {
      getAllProducts,
      productState: { loading, error, data },
    },
  } = props;

  useEffect(() => {
    getAllProducts();
  }, []);

  const actions = [
    {
      icon: <CreateIcon color="primary" />,
      tooltip: 'Save User',
      onClick: (value) => {
        console.log(value.productName);
        alert('You saved ' + JSON.stringify(value.productName));
      },
    },
    {
      icon: <DeleteIcon style={{ color: 'red' }} />,
      tooltip: 'Delete User',
      onClick: (value) => {
        console.log(value.productName);
        alert('You saved ' + JSON.stringify(value.productName));
      },
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table className="" size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Sales Price</TableCell>
            <TableCell align="right">Purchase Price</TableCell>
            <TableCell align="right">Available Stock</TableCell>
            {actions && actions.map(() => <TableCell></TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Spinner />
              </TableCell>
            </TableRow>
          )}
          {error && JSON.stringify(error)}

          {data &&
            data.map((product) => (
              <TableRow key={product.name}>
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="right">{product.productName}</TableCell>
                <TableCell align="right">{product.salesPrice}</TableCell>
                <TableCell align="right">{product.purchasePrice}</TableCell>
                <TableCell align="right">{product.availStock}</TableCell>
                {actions &&
                  actions.map((action) => (
                    <TableCell onClick={() => action.onClick(product)}>
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

export default withProduct(ProductList);
