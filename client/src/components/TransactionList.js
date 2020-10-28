import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((trans) => (
          <Transaction key={trans.id} trans={trans} />
        ))}
      </ul>
    </div>
  );
}
