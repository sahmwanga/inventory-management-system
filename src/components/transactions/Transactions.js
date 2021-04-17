import {
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import TransactionForm from './TransactionForm';

import {
  getTransactions,
  addTransactions,
} from '../../context/actions/transactions';
import TransactionFilter from './TransactionFilter';

const transactionTypes = [
  { key: 'sales', values: 'sales' },
  { key: 'purchases', value: 'purchases' },
];

const Transactions = () => {
  const {
    transactionState: {
      transactions: { data: txnData },
    },
    transactionDispatch,
    productDispatch,
    productState,
  } = useContext(GlobalContext);

  const [filterValue, setFilterValue] = useState('all');

  useEffect(() => {
    getTransactions(filterValue)(transactionDispatch);
  }, [filterValue]);

  console.log({ filterValue });

  return (
    <Card>
      <CardContent>
        <h3>Transactions</h3>
        <Card>
          <CardContent>
            <TransactionForm
              productState={productState}
              productDispatch={productDispatch}
              transactionDispatch={transactionDispatch}
              transactionTypes={transactionTypes}
              addTransactions={addTransactions}
            />
          </CardContent>
        </Card>
        <Box mt={4}>
          <TransactionFilter
            filterOptions={transactionTypes}
            filterCallback={setFilterValue}
            filterValue={filterValue}
          />
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>productName</TableCell>
                <TableCell>type</TableCell>
                <TableCell>quantiry</TableCell>
                <TableCell>price</TableCell>
                <TableCell>amount</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {txnData &&
                txnData.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell>{txn.product}</TableCell>
                    <TableCell>{txn.type}</TableCell>
                    <TableCell>{txn.quantity}</TableCell>
                    <TableCell>
                      {txn.type === 'sales'
                        ? txn.salesPrice
                        : txn.purchasePrice}
                    </TableCell>
                    <TableCell>{txn.amount}</TableCell>
                    <TableCell>
                      <button onClick={() => console.log('edit transactions')}>
                        E
                      </button>
                      <button onClick={() => console.log('delete transaction')}>
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

export default Transactions;
