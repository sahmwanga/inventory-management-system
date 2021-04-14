import {
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
  PRODUCTS_SUCCESS,
} from '../../../constants/actionTypes';

export const getProducts = () => {};

export const addProducts = (values) => (dispatch) => {
  dispatch({ type: PRODUCTS_LOADING });
  try {
    console.log({ products: values });
    // axios call to API-SERVER
    dispatch({ type: PRODUCTS_SUCCESS, payload: values });
  } catch (error) {
    dispatch({ type: PRODUCTS_ERROR, payload: error });
  }
};
