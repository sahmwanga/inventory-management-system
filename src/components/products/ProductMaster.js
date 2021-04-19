import React, { useContext, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
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
import Spinner from '../customs/Spinner';

import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ProductMaster = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const actions = [
    {
      icon: <CreateIcon color="primary" />,
      tooltip: 'Save User',
      onClick: (value) => alert('You saved ' + value.productName),
    },
    {
      icon: <DeleteIcon style={{ color: 'red' }} />,
      tooltip: 'Delete User',
      onClick: (event) => alert('You saved ' + event),
    },
  ];

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Product Master
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth={true}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Product Master</DialogTitle>
        <DialogContent>
          <ProductForm />
          <Box my={2}>
            <ProductList />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default withProduct(ProductMaster);
