import {
  Card,
  Grid,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Box
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import TransactionForm from "./TransactionForm";

const Transactions = () => {
  const { transactions, filterTransactions } = useContext(GlobalContext);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    console.log("refresh page");
  }, [reload]);

  return (
    <Card>
      <CardContent>
        <h3>Transactions</h3>
        <Card>
          <CardContent>
            <TransactionForm />
          </CardContent>
        </Card>
        <Box mt={4}>
          <TransactionFilter
            filterTransactions={filterTransactions}
            setReload={setReload}
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
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions &&
                transactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell>{txn.productName}</TableCell>
                    <TableCell>{txn.type}</TableCell>
                    <TableCell>{txn.quantity}</TableCell>
                    <TableCell>
                      {txn.type === "sales"
                        ? txn.salesPrice
                        : txn.purchasePrice}
                    </TableCell>
                    <TableCell>{txn.amount}</TableCell>
                    <button onClick={() => console.log("edit transactions")}>
                      E
                    </button>
                    <button onClick={() => console.log("delete transaction")}>
                      D
                    </button>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

const TransactionFilter = ({ filterTransactions, setReload }) => {
  const [value, setValue] = useState("all");
  const handleStateChange = (event) => {
    setValue(event.target.value);
    // filterTransactions(value);
    // setReload(true);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Show Transactions</FormLabel>
      <RadioGroup
        aria-label="transactions"
        name="transactions"
        value={value}
        onChange={handleStateChange}
      >
        <Grid container>
          <Grid item xs>
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All"
              // onChange={(event) => setValue(event.target.value)}
            />
          </Grid>
          <Grid item xs>
            <FormControlLabel
              value="sales"
              control={<Radio />}
              label="Sales"
              // onChange={(event) => setValue(event.target.value)}
            />
          </Grid>
          <Grid item xs>
            <FormControlLabel
              value="purchases"
              control={<Radio />}
              label="Purchases"
              // onChange={(event) => setValue(event.target.value)}
            />
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default Transactions;
