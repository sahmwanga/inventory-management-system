import React, { useContext } from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Formik, Form, useFormikContext, useField, Field } from 'formik';
import * as Yup from 'yup';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../../context/GlobalState';
import FormikControl from '../customs/form/FormikControl';

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

const TransactionForm = () => {
  const { stocks, addTransaction } = useContext(GlobalContext);
  const stockOptions = stocks.map((item) => ({
    key: item.productName,
    value: item.id,
  }));
  const transactionTypes = ['sales', 'purchases'];

  const classes = useStyles();

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
    addTransaction(values);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                <FormikControl
                  control="select"
                  fullWidth
                  name="product"
                  label="product"
                  options={stockOptions}
                  onChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="type">Transaction Types</InputLabel>
                  <Select
                    labelId="type"
                    id="type"
                    name="type"
                    onChange={handleChange}
                    defaultValue=""
                    error={touched.type && Boolean(errors.type)}
                    helperText={touched.type && errors.type}
                  >
                    {transactionTypes.map((value) => (
                      <MenuItem value={value}>{value}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date"
                  label="Date"
                  name="date"
                  onChange={handleChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
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
    </MuiPickersUtilsProvider>
  );
};

export default TransactionForm;
