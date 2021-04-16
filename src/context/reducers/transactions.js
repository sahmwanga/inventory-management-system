import {
  TRANSACTIONS_SUCCESS,
  TRANSACTIONS_LOADING,
  TRANSACTIONS_ERROR,
} from '../../constants/actionTypes';

const transactions = (state, { payload, type }) => {
  switch (type) {
    case TRANSACTIONS_LOADING:
      return {
        ...state,
        transactions: { ...state.transactions, loading: true },
      };
    case TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: { ...state.transactions, loading: false, data: payload },
      };
    case TRANSACTIONS_ERROR:
      return {
        ...state,
        transactions: { ...state.transactions, loading: false, error: payload },
      };
    default:
      return state;
  }
};

export default transactions;
