import {
  PRODUCTS_SUCCESS,
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
} from '../../constants/actionTypes';

const productReducer = (state, { payload, type }) => {
  switch (type) {
    case PRODUCTS_LOADING:
      return { ...state, loading: true };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default productReducer;
