import React, { createContext, useReducer } from 'react';
import { getProducts } from './actions/products';
import products from './initialStates/productInitialState';
import productReducer from './reducers/products';

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, products);

  const getAllProducts = () => getProducts()(productDispatch);

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        getAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
