import {
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
  PRODUCTS_SUCCESS,
} from '../../../constants/actionTypes';

import { db } from '../../../firebase/Firebase';

export const getProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCTS_LOADING });
  try {
    // let products = [];
    db.collection('products').onSnapshot((data) => {
      const products = data.docs.map((doc) => ({ ...doc.data() }));
      console.log({ products });
      // products.push();
      dispatch({ type: PRODUCTS_SUCCESS, payload: products });
    });
    // const data = await response.get();

    // let products = [];
    // data.forEach((snap) => {
    //   products.push(snap.val());
    // });
  } catch (error) {
    dispatch({ type: PRODUCTS_ERROR, payload: error });
  }
};

export const addProducts = (values) => (dispatch) => {
  dispatch({ type: PRODUCTS_LOADING });
  try {
    db.collection('products')
      .add({ ...values, availStock: 0 })
      .onSnapshot((data) => {
        dispatch({ type: PRODUCTS_SUCCESS, payload: values });
      });
  } catch (error) {
    dispatch({ type: PRODUCTS_ERROR, payload: error });
  }
};
