import {
  TRANSACTIONS_LOADING,
  TRANSACTIONS_ERROR,
  TRANSACTIONS_SUCCESS,
} from '../../../constants/actionTypes';

import { db } from '../../../firebase/Firebase';

export const getTransactions = (filter) => async (dispatch) => {
  console.log('filter transactions', filter);
  dispatch({ type: TRANSACTIONS_LOADING });
  try {
    db.collection('transactions').onSnapshot((data) => {
      const transactions = data.docs
        .map((doc) => ({ ...doc.data() }))
        .filter((value) => {
          if (filter !== 'all') {
            return value.type === filter;
          }
          return value;
        });
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
        dispatch({ type: TRANSACTIONS_SUCCESS, payload: data });
      });
  } catch (error) {
    dispatch({ type: TRANSACTIONS_ERROR, payload: error });
  }
};
