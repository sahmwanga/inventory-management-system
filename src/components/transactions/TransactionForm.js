import React, { useContext, useEffect } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

import { Formik, Form, useFormikContext, useField, Field } from 'formik';
import * as Yup from 'yup';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import FormikControl from '../customs/form/FormikControl';
import _ from 'lodash';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

async function fetchNewTextC(a, b) {
  await new Promise((r) => setTimeout(r, 500));
  return a;
}

const MyField = (props) => {
  const {
    values: { quantity, product },
    setFieldValue,
  } = useFormikContext();

  const [field, meta] = useField(props);

  React.useEffect(() => {
    let isCurrent = true;
    // your business logic around when to fetch goes here.
    if (quantity !== '' && product !== '') {
      fetchNewTextC(quantity, product).then((rate) => {
        if (!!isCurrent) {
          // prevent setting old values
          setFieldValue(props.name, rate);
        }
      });
    }
    return () => {
      isCurrent = false;
    };
  }, [product, quantity, setFieldValue, props.name]);

  return (
    <>
      <TextField fullWidth {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

const TransactionForm = ({
  productState: {
    products: { data, loading, error },
  },
  transactionDispatch,
  transactionTypes,
  addTransactions,
}) => {
  console.log('transactionForm');

  const stockOptions = _.isArray(data)
    ? data.map((item) => ({
        key: item.productName,
        value: item.productName,
      }))
    : [];

  const validationSchema = Yup.object({
    rate: Yup.string().required('rate is required'),
    quantity: Yup.string().required('quantity is required'),
    product: Yup.string('Enter your product').required('product is required'),
    date: Yup.string().required('date is required'),
    type: Yup.string().required('Transaction Type is required'),
  });

  const initialValues = {
    product: '',
    quantity: '',
    type: '',
    rate: '',
    date: new Date('2014-08-18T21:11:54'),
  };

  const onSubmit = (values) => {
    addTransactions(values)(transactionDispatch);
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
              {loading ? 'loading...' : ''}
              <FormikControl
                control="select"
                fullWidth
                name="product"
                label="Product"
                options={stockOptions}
                onChange={handleChange}
                touched={touched}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormikControl
                control="select"
                fullWidth
                name="type"
                label="Transaction Types"
                options={transactionTypes}
                onChange={handleChange}
                touched={touched}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormikControl
                control="date"
                label="Date"
                name="date"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormikControl
                control="input"
                fullWidth
                name="quantity"
                label="Quantity"
                onChange={handleChange}
                touched={touched}
                errors={errors}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <MyField name="rate" disabled />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
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
  );
};

export default TransactionForm;
