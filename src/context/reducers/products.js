import {
  PRODUCTS_SUCCESS,
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
} from '../../constants/actionTypes';

const productReducer = (state, { payload, type }) => {
  switch (type) {
    case PRODUCTS_LOADING:
      return { ...state, products: { ...state.products, loading: true } };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: { ...state.products, loading: false, data: payload },
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        products: { ...state.products, loading: false, error: payload },
      };
    default:
      return state;
  }
};

export default productReducer;
