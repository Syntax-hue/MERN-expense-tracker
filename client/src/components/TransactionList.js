import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {!transactions.length ? (
          <div>No transactions</div>
        ) : (
          transactions.map((trans) => (
            <Transaction key={trans._id} trans={trans} />
          ))
        )}
      </ul>
    </div>
  );
}
