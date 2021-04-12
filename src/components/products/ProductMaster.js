import React, { useContext } from 'react';
import {
  Button,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  Card,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { GlobalContext } from '../../context/GlobalState';

const ProductMaster = () => {
  const { addProduct, stocks } = useContext(GlobalContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object({
    salesPrice: Yup.string().required('rate is required'),
    purchasePrice: Yup.string().required('purchase Price is required'),
    productName: Yup.string().required('product name is required'),
  });

  const initialValues = {
    salesPrice: '',
    purchasePrice: '',
    productName: '',
  };

  const onSubmit = (values) => {
    addProduct(values);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Product Master
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Product Master</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {({ touched, errors, handleChange, isSubmitting, values }) => (
              <Form className="">
                <Grid container spacing="2">
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      fullWidth
                      id="productName"
                      name="productName"
                      label="productName"
                      onChange={handleChange}
                      error={touched.productName && Boolean(errors.productName)}
                      helperText={touched.productName && errors.productName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      fullWidth
                      id="salesPrice"
                      name="salesPrice"
                      label="salesPrice"
                      onChange={handleChange}
                      error={touched.salesPrice && Boolean(errors.salesPrice)}
                      helperText={touched.salesPrice && errors.salesPrice}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      fullWidth
                      id="purchasePrice"
                      name="purchasePrice"
                      label="purchasePrice"
                      onChange={handleChange}
                      error={
                        touched.purchasePrice && Boolean(errors.purchasePrice)
                      }
                      helperText={touched.purchasePrice && errors.purchasePrice}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
          <Box my={2}>
            <TableContainer component={Paper}>
              <Table className="" size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Product Name</TableCell>
                    <TableCell align="right">Sales Price</TableCell>
                    <TableCell align="right">Purchase Price</TableCell>
                    <TableCell align="right">Available Stock</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stocks.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.productName}</TableCell>
                      <TableCell align="right">{row.salesPrice}</TableCell>
                      <TableCell align="right">{row.purchasePrice}</TableCell>
                      <TableCell align="right">{row.availStock}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductMaster;
