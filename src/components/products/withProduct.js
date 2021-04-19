import React from 'react';
import { ProductContext, ProductProvider } from '../../context/ProductState';

export function withProduct(Component) {
  return function WrapperComponent(props) {
    return (
      <ProductProvider>
        <ProductContext.Consumer>
          {(state) => {
            return <Component {...props} context={state} />;
          }}
        </ProductContext.Consumer>
      </ProductProvider>
    );
  };
}

export default withProduct;
