import {
  TRANSACTIONS_LOADING,
  TRANSACTIONS_ERROR,
  TRANSACTIONS_SUCCESS,
} from '../../../constants/actionTypes';

import { db } from '../../../firebase/Firebase';

export const getTransactions = () => async (dispatch) => {
  dispatch({ type: TRANSACTIONS_LOADING });
  try {
    db.collection('transactions').onSnapshot((data) => {
      const transactions = data.docs.map((doc) => ({ ...doc.data() }));
      dispatch({ type: TRANSACTIONS_SUCCESS, payload: transactions });
    });
  } catch (error) {
    dispatch({ type: TRANSACTIONS_ERROR, payload: error });
  }
};

export const addTransactions = (values) => (dispatch) => {
  dispatch({ type: TRANSACTIONS_LOADING });
  try {
    db.collection('transactions')
      .add({ ...values })
      .onSnapshot((data) => {
        dispatch({ type: TRANSACTIONS_SUCCESS, payload: values });
      });
  } catch (error) {
    dispatch({ type: TRANSACTIONS_ERROR, payload: error });
  }
};
