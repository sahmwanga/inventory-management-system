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
import MaterialTable from 'material-table';
import { useContext, useEffect } from 'react';
import { getProducts } from '../../context/actions/products';
import { GlobalContext } from '../../context/GlobalState';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const Stock = () => {
  console.log('stock');
  const {
    editProduct,
    productState: {
      products: { data, loading, error },
    },
    productDispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    getProducts()(productDispatch);
  }, []);

  const actions = [
    {
      icon: <CreateIcon />,
      tooltip: 'Save User',
      onClick: (value) => alert('You saved ' + value.productName),
    },
    {
      icon: <DeleteIcon />,
      tooltip: 'Delete User',
      onClick: (event) => alert('You saved ' + event),
    },
  ];

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <h3>Stocks</h3>
          {loading ? 'loading...' : ''}
          {error ? 'error...' : ''}
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>productName</TableCell>
                <TableCell>Available stocks</TableCell>
                {actions && actions.map(() => <TableCell></TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((stock) => (
                  <TableRow key={stock.id}>
                    <TableCell component="TableCell" scope="row">
                      {stock.productName}
                    </TableCell>
                    <TableCell>{stock.availStock}</TableCell>
                    {actions &&
                      actions.map((action) => (
                        <TableCell onClick={() => action.onClick(stock)}>
                          {action.icon}
                        </TableCell>
                      ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Stock;
