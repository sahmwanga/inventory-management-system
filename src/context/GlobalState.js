import React, { createContext, useReducer } from 'react';
import products from './initialStates/productInitialState';
import productReducer from './reducers/products';
import transactionReducer from './reducers/transactions';
import transactions from './initialStates/transactionsInitialState';

// const initialState = {
//   reports: [],
//   stocks: [
//     // {
//     //   id: 1,
//     //   productName: "abc",
//     //   purchasePrice: 8,
//     //   salesPrice: 10,
//     //   availStock: 12
//     // }
//   ],
//   transactions: [
//     // {
//     //   id: 1,
//     //   productName: "abc",
//     //   type: "sales",
//     //   quantity: 10,
//     //   salesPrice: 10,
//     //   purchasePrice: 8,
//     //   amount: "120",
//     //   date: new Date()
//     // }
//   ],
// };

export const EDIT_PRODUCT = 'edit_product';
export const GET_REPORTS = 'get_report';
export const ADD_PRODUCT = 'add_product';
export const FILTER_TRANSACTIONS = 'filter_transactions';
export const GET_TRANSACTIONS = 'get_transactions';
export const ADD_TRANSACTION = 'add_transaction';
export const UPDATE_STOCKS = 'UPDATE_STOCKS';

// const getInventoryQty = (stocks) =>
//   stocks.reduce((index, value) => index + value.availStock, 0);

// const getInventoryTotalAmount = (stocks) =>
//   stocks
//     .map((stock) => stock.availStock * stock.salesPrice)
//     .reduce((index, value) => index + value, 0);

// const getTotalSales = (transactions) =>
//   transactions
//     .filter((value) => value.type === 'sales')
//     .map((value) => value.salesPrice * value.quantity)
//     .reduce((index, value) => index + value, 0);

// const getTotalPurchase = (transactions) =>
//   transactions
//     .filter((value) => value.type === 'purchases')
//     .map((value) => value.purchasePrice * value.quantity)
//     .reduce((index, value) => index + value, 0);

// const appReducer = (state, action) => {
//   switch (action.type) {
//     case EDIT_PRODUCT:
//       return state;
//     case ADD_PRODUCT:
//       const newItem = {
//         ...state,
//         stocks: [...state.stocks, action.payload],
//       };
//       return newItem;
//     case UPDATE_STOCKS: {
//       const { type, quantity, product } = action.payload;
//       const elementsIndex = state.stocks.findIndex(
//         (value) => value.id === product
//       );
//       const existingStock = [...state.stocks];

//       if (type === 'sales') {
//         existingStock[elementsIndex] = {
//           ...existingStock[elementsIndex],
//           availStock: existingStock[elementsIndex]['availStock'] - 1 * quantity,
//         };
//       }
//       if (type === 'purchases') {
//         existingStock[elementsIndex] = {
//           ...existingStock[elementsIndex],
//           availStock: existingStock[elementsIndex]['availStock'] + 1 * quantity,
//         };
//       }

//       const _stocks = {
//         ...state,
//         stocks: existingStock,
//       };
//       return _stocks;
//     }
//     case ADD_TRANSACTION:
//       const { product, type, date, quantity } = action.payload;
//       const stocks = state.stocks;
//       let amount = 0;
//       const {
//         productName,
//         purchasePrice,
//         salesPrice,
//         availStock,
//       } = stocks.filter((value) => value.id === product)[0];

//       //TODO: VALIDATE AVAILABLE STOCK IF EXIST

//       if (type === 'sales') {
//         console.log({ salesPrice, quantity });
//         amount = 1 * salesPrice * 1 * quantity;
//       }
//       if (type === 'purchases') {
//         console.log({ purchasePrice, quantity });
//         amount = 1 * purchasePrice * 1 * quantity;
//       }

//       const txns = {
//         ...state,
//         transactions: [
//           ...state.transactions,
//           {
//             productName,
//             type,
//             purchasePrice,
//             quantity,
//             salesPrice,
//             amount,
//             date,
//           },
//         ],
//       };
//       return txns;
//     case GET_REPORTS:
//       const inventoryQty = getInventoryQty(state.stocks);

//       const inventoryAmount = getInventoryTotalAmount(state.stocks);

//       const totalSales = getTotalSales(state.transactions);

//       const totalPurchase = getTotalPurchase(state.transactions);

//       const arrDt = [
//         { value: totalPurchase, key: 'Purchase' },
//         { value: totalSales, key: 'Sale' },
//         { value: totalSales - totalPurchase, key: 'Profit' },
//         { value: inventoryQty, key: 'Intentory Qnty' },
//         { value: inventoryAmount, key: 'Intentory Amount' },
//       ];

//       const data = [...arrDt];
//       return { ...state, reports: data };
//     case GET_TRANSACTIONS:
//       console.log(action.payload);
//       if (action.payload === 'sales') {
//         const sales = state.transactions.filter(
//           (value) => value.type === 'sales' && value
//         );
//         // console.log({ ...state, transactions: sales });
//         return { ...state, transactions: sales };
//       }
//       if (action.payload === 'purchases') {
//         const purchases = state.transactions.filter(
//           (value) => value.type === 'purchases' && value
//         );
//         // console.log({ ...state, transactions: purchases });
//         return { ...state, transactions: purchases };
//       }
//       return state;

//     default:
//       return state;
//   }
// };

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(appReducer, initialState);
  const [productState, productDispatch] = useReducer(productReducer, products);
  const [transactionState, transactionDispatch] = useReducer(
    transactionReducer,
    transactions
  );

  // const editProduct = (id) => {
  //   dispatch({ type: EDIT_PRODUCT, id });
  // };

  // const getReports = () => {
  //   console.log('get reports');
  //   dispatch({ type: GET_REPORTS });
  // };

  // const getTransactions = (filter) => {
  //   dispatch({ type: GET_TRANSACTIONS, payload: filter });
  // };

  // const addProduct = (payload) => {
  //   console.log('add products');
  //   dispatch({
  //     type: ADD_PRODUCT,
  //     payload: {
  //       id: Math.floor(Math.random() * 100),
  //       ...payload,
  //       availStock: 0,
  //     },
  //   });
  //   dispatch({ type: GET_REPORTS });
  // };

  // const addTransaction = (values) => {
  //   console.log('add transaction');
  //   dispatch({
  //     type: ADD_TRANSACTION,
  //     payload: values,
  //   });
  //   dispatch({
  //     type: UPDATE_STOCKS,
  //     payload: values,
  //   });
  //   dispatch({ type: GET_REPORTS });
  // };

  // const filterTransactions = (value) => {
  //   dispatch({ type: GET_TRANSACTIONS, payload: value });
  // };

  return (
    <GlobalContext.Provider
      value={{
        // transactions: state.transactions,
        // getTransactions: getTransactions,
        // addTransaction: addTransaction,
        // filterTransactions: filterTransactions,
        // stocks: state.stocks,
        // reports: state.reports,
        // editProduct: editProduct,
        // getReports: getReports,
        // addProduct: addProduct,
        productState,
        productDispatch,
        transactionState,
        transactionDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
