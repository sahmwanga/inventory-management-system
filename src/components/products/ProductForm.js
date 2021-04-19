import React, { useContext, useEffect } from 'react';
import {
  Button,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from '@material-ui/core';
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ProductContext } from '../../context/ProductState';
import { addProducts, getProducts } from '../../context/actions/products';
import withProduct from './withProduct';
const ProductForm = (props) => {
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
    addProducts(values);
  };

  return (
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
                error={touched.purchasePrice && Boolean(errors.purchasePrice)}
                helperText={touched.purchasePrice && errors.purchasePrice}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default withProduct(ProductForm);
