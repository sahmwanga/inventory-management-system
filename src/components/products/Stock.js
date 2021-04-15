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
import { useContext, useEffect } from 'react';
import { getProducts } from '../../context/actions/products';
import { GlobalContext } from '../../context/GlobalState';

const Stock = () => {
  const {
    stocks,
    editProduct,
    addProduct,
    productState: {
      products: { data },
      loading,
      error,
    },
    productDispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    getProducts()(productDispatch);
  }, []);

  console.log({ 'product===': data });
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
              {data &&
                data.map((stock) => (
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
