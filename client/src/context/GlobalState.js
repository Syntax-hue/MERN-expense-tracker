import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import axios from "axios";

const URL = "/api/v1/transactions/";

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const getTransactions = async () => {
    try {
      const res = await axios.get(URL);

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.transactions,
      });
    } catch (e) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: e.message,
      });
      console.error(e.message);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${URL}${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: e.message,
      });
    }
  };

  const createTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(URL, transaction, config);
      dispatch({
        type: "CREATE_TRANSACTION",
        payload: res.data.transaction,
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        createTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
