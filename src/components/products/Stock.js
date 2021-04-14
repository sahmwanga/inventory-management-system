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
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Stock = () => {
  const {
    stocks,
    editProduct,
    addProduct,
    productState,
    productDispatch,
  } = useContext(GlobalContext);

  console.log({ productState });
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <h3>Stocks</h3>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>productName</TableCell>
                <TableCell>Available stocks</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stocks &&
                stocks.map((stock) => (
                  <TableRow key={stock.id}>
                    <TableCell component="TableCell" scope="row">
                      {stock.productName}
                    </TableCell>
                    <TableCell>{stock.availStock}</TableCell>
                    <TableCell>
                      <button onClick={() => editProduct(stock.id)}>E</button>
                      <button onClick={() => console.log('delete product')}>
                        D
                      </button>
                    </TableCell>
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
